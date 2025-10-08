import React from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <h1>Dashboard</h1>
          <p className="lead">Welcome to your protected dashboard, {user?.name}!</p>
          
          <div className="row mt-4">
            <div className="col-md-4 mb-4">
              <div className="card text-white bg-primary">
                <div className="card-body">
                  <h5 className="card-title">Students</h5>
                  <p className="card-text">Manage student information and records</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4 mb-4">
              <div className="card text-white bg-success">
                <div className="card-body">
                  <h5 className="card-title">Courses</h5>
                  <p className="card-text">View and manage course offerings</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4 mb-4">
              <div className="card text-white bg-warning">
                <div className="card-body">
                  <h5 className="card-title">Reports</h5>
                  <p className="card-text">Generate reports and analytics</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card mt-4">
            <div className="card-header">
              <h5>Your Profile Information</h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <p><strong>Name:</strong> {user?.name}</p>
                  <p><strong>Email:</strong> {user?.email}</p>
                  <p><strong>Role:</strong> {user?.role}</p>
                </div>
                <div className="col-md-6">
                  <p><strong>Last Login:</strong> {new Date().toLocaleString()}</p>
                  <p><strong>Account Status:</strong> Active</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;