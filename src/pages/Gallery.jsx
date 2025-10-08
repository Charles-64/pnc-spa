import React from 'react';

const Gallery = () => {
  const images = [
    {
      id: 1,
      src: "https://via.placeholder.com/400x300/28a745/ffffff?text=PNC+Library",
      title: "Modern Library",
      description: "State-of-the-art library with extensive digital and physical resources"
    },
    {
      id: 2,
      src: "https://via.placeholder.com/400x300/dc3545/ffffff?text=Computer+Lab",
      title: "Computer Laboratory",
      description: "Advanced computing facilities with latest software and hardware"
    },
    {
      id: 3,
      src: "https://via.placeholder.com/400x300/ffc107/000000?text=Sports+Complex",
      title: "Sports Complex",
      description: "Modern sports facilities for various athletic activities"
    },
    {
      id: 4,
      src: "https://via.placeholder.com/400x300/17a2b8/ffffff?text=Auditorium",
      title: "Main Auditorium",
      description: "500-seat auditorium for events and conferences"
    },
    {
      id: 5,
      src: "https://via.placeholder.com/400x300/6f42c1/ffffff?text=Cafeteria",
      title: "Student Cafeteria",
      description: "Spacious dining area with variety of food options"
    },
    {
      id: 6,
      src: "https://via.placeholder.com/400x300/fd7e14/ffffff?text=Research+Center",
      title: "Research Center",
      description: "Dedicated space for innovative research projects"
    }
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5">PNC Gallery</h1>
      <p className="text-center lead mb-5">
        Explore our modern facilities and learning environments
      </p>
      <div className="row">
        {images.map((image) => (
          <div key={image.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img 
                src={image.src} 
                className="card-img-top" 
                alt={image.title}
                style={{ height: '250px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{image.title}</h5>
                <p className="card-text flex-grow-1">{image.description}</p>
                <button className="btn btn-outline-primary mt-auto">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;