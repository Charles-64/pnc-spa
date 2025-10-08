import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import TeamMember from './TeamMember';

const About = () => {
  const teamMembers = [
    {
      id: 'john',
      name: "John Doe",
      role: "Frontend Developer",
      email: "john.doe@pnc.edu.kh",
      avatar: "https://via.placeholder.com/150/007bff/ffffff?text=JD"
    },
    {
      id: 'jane', 
      name: "Jane Smith",
      role: "Backend Developer",
      email: "jane.smith@pnc.edu.kh",
      avatar: "https://via.placeholder.com/150/28a745/ffffff?text=JS"
    }
  ];

  return (
    <>
      <Routes>
        {/* NESTED ROUTE for individual team members */}
        <Route path="team/:memberId" element={<TeamMember />} />
        
        {/* Default team list view */}
        <Route path="/" element={
          <div className="container mt-5">
            <h1 className="text-center mb-5">About Our Team</h1>
            <p className="text-center lead mb-5">
              Meet the talented students behind this project
            </p>
            <div className="row">
              {teamMembers.map((member) => (
                <div key={member.id} className="col-md-6 mb-4">
                  <div className="card text-center h-100 shadow-sm">
                    <div className="card-body">
                      <img 
                        src={member.avatar} 
                        alt={member.name}
                        className="rounded-circle mb-3"
                        style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                      />
                      <h5 className="card-title">{member.name}</h5>
                      <p className="card-text text-muted">{member.role}</p>
                      <p className="card-text">
                        <small className="text-primary">{member.email}</small>
                      </p>
                      
                      {/* DYNAMIC LINK to team member profile */}
                      <Link 
                        to={`/about/team/${member.id}`}
                        className="btn btn-outline-primary"
                      >
                        View Profile
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        } />
      </Routes>
    </>
  );
};

export default About;