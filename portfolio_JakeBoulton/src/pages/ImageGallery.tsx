import React, { useState, useEffect } from "react";

const ImageGallery: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    fetch("/.netlify/functions/listImages") // Fetch from Netlify Function
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setImages(data.images);
      })
      .catch((error) => {
        return console.error("Error loading images:", error);
      });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-6">Image Gallery</h1>

      <div className="flex flex-wrap justify-center gap-4">
        {images.map((image, index) => {
          return (
            <div
              key={index}
              className="w-1/4 md:w-1/5 p-2 cursor-pointer"
              onClick={() => {
                return setLightbox(image);
              }}
            >
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {lightbox && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          onClick={() => {
            return setLightbox(null);
          }}
        >
          <img
            src={lightbox}
            alt="Large view"
            className="max-w-3xl max-h-[80vh] rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
