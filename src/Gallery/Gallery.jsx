import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { galleryItems } from '../data/galleryData';
import GalleryItem from './GalleryItem';

const Gallery = () => {
  return (
    <>
      <Routes>
        {/* NESTED ROUTE for individual gallery items */}
        <Route path=":id" element={<GalleryItem />} />
        
        {/* Default gallery list view */}
        <Route path="/" element={
          <div className="container mt-5">
            <h1 className="text-center mb-5">PNC Gallery</h1>
            <p className="text-center lead mb-5">
              Explore our modern facilities and learning environments
            </p>
            <div className="row">
              {galleryItems.map((item) => (
                <div key={item.id} className="col-md-4 mb-4">
                  <div className="card h-100 shadow-sm">
                    <img 
                      src={item.image} 
                      className="card-img-top" 
                      alt={item.title}
                      style={{ height: '250px', objectFit: 'cover' }}
                    />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text flex-grow-1">{item.description}</p>
                      
                      {/* DYNAMIC LINK to individual gallery item */}
                      <Link 
                        to={`/gallery/${item.id}`} 
                        className="btn btn-outline-primary mt-auto"
                      >
                        View Details
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

export default Gallery;