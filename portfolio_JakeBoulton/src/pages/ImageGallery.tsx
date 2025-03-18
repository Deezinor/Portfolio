import React, { useState, useEffect } from "react";
import Header from "../components/header";

const IMAGE_PATH = "/Assets/Images";

interface ImageData {
  src: string;
  category: string[];
}

const ImageGallery: React.FC = () => {
  const [images, setImages] = useState<ImageData[]>([]);
  const [filteredImages, setFilteredImages] = useState<ImageData[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    fetch("/images.json")
      .then((response) => {
        return response.json() as Promise<{ images: ImageData[] }>;
      })
      .then((data) => {
        const imagesWithPath = data.images.map((image) => {
          return {
            ...image,
            src: `${IMAGE_PATH}/${image.src}`,
          };
        });

        setImages(imagesWithPath);
        setFilteredImages(imagesWithPath);

        const uniqueCategories: string[] = [
          "All",
          ...Array.from(
            new Set(
              imagesWithPath.flatMap((img) => {
                return img.category;
              })
            )
          ),
        ];

        setCategories(uniqueCategories);
      })
      .catch((error) => {
        return console.error("Error loading images:", error);
      });
  }, []);

  const handleFilter = (category: string) => {
    setActiveCategory(category);
    setFilteredImages(
      category === "All"
        ? images
        : images.filter((image) => {
            return image.category.includes(category);
          })
    );
  };

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-6">Gallery</h1>

        {/* Filter Buttons */}
        <div className="flex mx-auto justify-center gap-4 mb-6 w-3/4 flex-wrap">
          {categories.map((category) => {
            return (
              <button
                key={category}
                className={`px-4 py-2 rounded-lg shadow-md ${
                  activeCategory === category
                    ? "bg-black text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => {
                  return handleFilter(category);
                }}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Masonry Layout using CSS Columns */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {filteredImages.map((image, index) => {
            return (
              <div
                key={index}
                className="relative overflow-hidden cursor-pointer rounded-lg break-inside-avoid"
                onClick={() => {
                  return setLightbox(image.src);
                }}
              >
                <img
                  src={image.src}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-auto object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
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
    </>
  );
};

export default ImageGallery;
