import React ,{useState} from 'react'


const MyImage = ({imgs = [{url:" "}]}) => {
  //array of objects
  console.log("test",imgs);
  const [mainImage , setMainImage] = useState(imgs[0]);
  
  return (
    <div className="flex  p-5 md:p-10">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Left Column */}
      <div className="space-y-4 p-4 md:col-span-1">
        {imgs.map((curElm, index) => (
          <figure key={index}>
            <img
              src={curElm.url}
              alt={curElm.filename}
              className="object-cover cursor-pointer w-full h-auto"
              onClick={() => setMainImage(curElm)}
            />
          </figure>
        ))}
      </div>
  
      {/* Right Column */}
      <div className="flex items-center justify-center col-span-1 md:col-span-2">
        <img 
          src={mainImage.url} 
          alt={mainImage.filename} 
          className="max-w-full max-h-full w-full md:w-auto h-auto" 
        />
      </div>
    </div>
  </div>
  

  )
}

export default MyImage