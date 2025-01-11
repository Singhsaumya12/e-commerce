import React from 'react'
import { BsFillGridFill , BsList } from 'react-icons/bs'
import { useFilterContext } from '../context/filter_context'

const Sort = () => {
  const{filter_products,grid_view , setGridView, setListView,sorting} = useFilterContext();
  const sortOptions = [
    { label: "Price (lowest)",value: "lowest" },
    { label: "Price (highest)",value: "highest"  },
    { label: "Price (a-z)",value: "a-z"  },
    { label: "Price (z-a)" ,value: "z-a" }
  ];
  return (
    <>
      <div className="flex justify-between p-4 mt-8">
        <div className="flex gap-4">
          <button
            className={`border p-2.5  ${grid_view ? "bg-black text-white" : "bg-gray-200"}`}
            onClick={setGridView}
          >
            <BsFillGridFill />
          </button>
          <button
            className={`border p-2.5  ${!grid_view ? "bg-black text-white" : "bg-gray-200"}`}
            onClick={setListView}
          >
            <BsList />
          </button>
        </div>
        {/* 2nd col */}
        <div>
          <p>{`${filter_products.length} Product Available`}</p>
        </div>

        {/* 3rd col */}
        <div>
          <form>
            <label></label>
            <select id="sort" name="sort" className='border-[0.5px] border-black p-1 rounded' onClick={sorting}>
              {sortOptions.map((option,index)=>{
                return (
                  <option key={index} value={option.value}>{option.label}</option>
                )
              })}
              
            </select>
          </form>
        </div>
      </div>
    </>
  )
}

export default Sort