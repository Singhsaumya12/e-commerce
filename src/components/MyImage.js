import React, { useEffect, useState } from "react";

const MyImage = ({ imgs }) => {

  // Always convert to array
  const imagesArray = Array.isArray(imgs)
    ? imgs
    : imgs
    ? [imgs]
    : [];

  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    if (imagesArray.length > 0) {
      setMainImage(imagesArray[0]);
    }
  }, [imgs]);

  if (imagesArray.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex gap-4">

      {/* Left thumbnails */}
      <div className="flex flex-col gap-2">
        {imagesArray.map((img, index) => (
          <img
            key={index}
            src={img.url || img.image || img}
            alt="product"
            className="w-20 h-20 object-cover border cursor-pointer"
            onClick={() => setMainImage(img)}
          />
        ))}
      </div>

      {/* Main image */}
      <div>
        <img
          src={mainImage?.url || mainImage?.image || mainImage}
          alt="main-product"
          className="w-[400px] h-[400px] object-contain"
        />
      </div>

    </div>
  );
};

export default MyImage;