import React, { useState } from 'react';


import img1 from '../assets/img1.jpeg';
import img2 from '../assets/img2.jpeg';
import img3 from '../assets/img3.jpeg';
import img4 from '../assets/img4.jpeg';
import img5 from '../assets/img5.jpeg';


  const images = [img1, img2, img3, img4, img5];



export default function Task2() {
  const [selected, setSelected] = useState(null);

  return (
    <div>
      <h2>🧭 Image Gallery</h2>
      <div style={{ display: 'flex', gap: '10px' }}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            onClick={() => setSelected(img)}
            style={{
              border: selected === img ? '3px solid #000' : '1px solid #ccc',
              cursor: 'pointer',
              width: 100,
              height: 100,
            }}
          />
        ))}
      </div>
      {selected && <div><img src={selected} alt="Selected" style={{ marginTop: 20, width: 200 }} /></div>}
    </div>
  );
}
