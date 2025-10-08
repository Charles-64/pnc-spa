import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';

const TeamMember = () => {
  const { memberId } = useParams();

  // Mock team data - in real app, this would come from API
  const teamMembers = {
    john: {
      name: "John Doe",
      role: "Frontend Developer",
      email: "john.doe@pnc.edu.kh",
      bio: "John is a passionate frontend developer with 3 years of experience in React and modern web technologies.",
      skills: ["React", "JavaScript", "CSS", "HTML5"],
      projects: ["PNC Portal", "Student Management System"]
    },
    jane: {
      name: "Jane Smith",
      role: "Backend Developer", 
      email: "jane.smith@pnc.edu.kh",
      bio: "Jane specializes in backend development and database design with expertise in Node.js and Python.",
      skills: ["Node.js", "Python", "MongoDB", "API Design"],
      projects: ["PNC API", "Database Optimization"]
    }
  };

  const member = teamMembers[memberId];

  // Handle invalid member IDs
  if (!member) {
    return <Navigate to="/about" replace />;
  }

  return (
    <div className="container mt-5">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/about">About</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {member.name}
          </li>
        </ol>
      </nav>

      <div className="row">
        <div className="col-md-4 text-center">
          <img 
            src={`https://via.placeholder.com/300x300/007bff/ffffff?text=${member.name.charAt(0)}`}
            alt={member.name}
            className="rounded-circle img-fluid mb-3"
            style={{ width: '200px', height: '200px', objectFit: 'cover' }}
          />
          <h2>{member.name}</h2>
          <p className="text-muted">{member.role}</p>
          <p>
            <strong>Email:</strong><br />
            {member.email}
          </p>
        </div>
        <div className="col-md-8">
          <h4>About</h4>
          <p>{member.bio}</p>
          
          <h5 className="mt-4">Skills</h5>
          <div className="d-flex flex-wrap gap-2 mb-4">
            {member.skills.map((skill, index) => (
              <span key={index} className="badge bg-primary">
                {skill}
              </span>
            ))}
          </div>

          <h5>Projects</h5>
          <ul>
            {member.projects.map((project, index) => (
              <li key={index}>{project}</li>
            ))}
          </ul>

          <Link to="/about" className="btn btn-outline-primary mt-3">
            Back to Team
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;