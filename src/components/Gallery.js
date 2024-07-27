import React from 'react';

const Gallery = () => (
  <div className="container mt-5">
    <h2>Gallery</h2>
    <div className="row">
      <div className="col-md-4">
        <img src="sportsday.jpg" alt="Sports Day" className="img-fluid" />
        <p>Students participating in various sports events.</p>
      </div>
      <div className="col-md-4">
        <img src="scienceexhibition.jpg" alt="Science Exhibition" className="img-fluid" />
        <p>Students presenting their science projects.</p>
      </div>
      <div className="col-md-4">
        <img src="culturalfest.jpg" alt="Cultural Fest" className="img-fluid" />
        <p>Students performing in the cultural fest.</p>
      </div>
    </div>
    <div className="row mt-4">
      <div className="col-md-4">
        <img src="classroom.jpg" alt="Classroom" className="img-fluid" />
        <p>A glimpse of our interactive classrooms.</p>
      </div>
      <div className="col-md-4">
        <img src="library.jpg" alt="Library" className="img-fluid" />
        <p>Students reading and studying in the school library.</p>
      </div>
    </div>
  </div>
);

export default Gallery;
