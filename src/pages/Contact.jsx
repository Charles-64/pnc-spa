import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-10 mx-auto">
          <h1 className="text-center mb-5">Contact Us</h1>
          
          <div className="row">
            <div className="col-md-5 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h4 className="card-title text-primary">Get in Touch</h4>
                  
                  <div className="mb-4">
                    <h6 className="text-muted">Address</h6>
                    <p className="mb-0">
                      Pamantasan ng Cabuayo UC(PnC)<br />
                      Katapatan Mutual Homes,<br />
                      Brgy. Banay-banay, City of Cabuyao,<br />
                      Laguna
                    </p>
                  </div>
                  
                  <div className="mb-4">
                    <h6 className="text-muted">Mobile Number:</h6>
                    <p className="mb-0">+63999999999</p>
                  </div>
                  
                  <div className="mb-4">
                    <h6 className="text-muted">Email</h6>
                    <p className="mb-0">pamantasanngcabuyao@pnc.edu.ph</p>
                  </div>
                  
                  <div className="mb-4">
                    <h6 className="text-muted">Office Hours</h6>
                    <p className="mb-0">
                      Monday - Friday: 8:00 AM - 5:00 PM<br />
                      Saturday: 8:00 AM - 12:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-md-7">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h4 className="card-title text-primary mb-4">Send us a Message</h4>
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="name" className="form-label">Your Name</label>
                        <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required/>
                      </div>

                      <div className="col-md-6 mb-3">
                        <label htmlFor="email" className="form-label">Your Email</label>
                        <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required/>
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <label htmlFor="subject" className="form-label">Subject</label>
                      <input type="text" className="form-control" id="subject" name="subject" value={formData.subject} onChange={handleChange} required/>
                    </div>
                    
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">Your Message</label>
                      <textarea className="form-control" id="message" rows="5" name="message" value={formData.message} onChange={handleChange} required/>
                    </div>
                    
                    <button type="submit" className="btn btn-primary w-100 py-2">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;