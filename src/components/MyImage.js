import React, { useState, useEffect } from 'react';

const MyImage = ({ imgs }) => {
  // Normalize images
  const imagesArray = Array.isArray(imgs)
    ? imgs
    : imgs
    ? [{ url: imgs, filename: "product" }]
    : [];

    console.log(imagesArray,"imagesArray");
    
  const [mainImage, setMainImage] = useState(imagesArray[0]);

  // Update main image when data changes
  useEffect(() => {
    setMainImage(imagesArray[0]);
  }, [imagesArray]);

  if (!imagesArray.length) {
    return <div>No Image Available</div>;
  }

  return (
    <div className="flex p-5 md:p-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">

        {/* Left Column (Thumbnails) */}
        <div className="space-y-4 p-2 md:col-span-1">
          {imagesArray.map((curElm, index) => (
            <figure key={index}>
              <img
                src={curElm.url}
                alt={curElm.filename || "product"}
                className="object-cover cursor-pointer w-full h-24 border hover:border-blue-500"
                onClick={() => setMainImage(curElm)}
              />
            </figure>
          ))}
        </div>

        {/* Right Column (Main Image) */}
        <div className="flex items-center justify-center md:col-span-2">
          <img
            src={mainImage?.url}
            alt={mainImage?.filename || "product"}
            className="max-w-full max-h-[400px] object-contain"
          />
        </div>

      </div>
    </div>
  );
};

export default MyImage;