import { useState } from "react";
import "./Gallery.css";

function Gallery({ images }) {

  const [selected, setSelected] = useState(null);

  return (

    <div>

      <h2>Image Gallery</h2>

      <div className="gallery-grid">

        {images.map((img, index) => (

          <img
            key={index}
            src={img}
            className="gallery-img"
            onClick={() => setSelected(img)}
          />

        ))}

      </div>

      {/* Fullscreen Modal */}
      {selected && (

        <div
          className="modal"
          onClick={() => setSelected(null)}
        >

          <img
            src={selected}
            className="modal-img"
          />

        </div>

      )}

    </div>

  );

}

export default Gallery;
