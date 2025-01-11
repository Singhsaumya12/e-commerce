import React from 'react'
import FilterSection from './components/FilterSection'
import Sort from './components/Sort'
import ProductList from './components/ProductList'
import { useFilterContext } from './context/filter_context'

const Products = () => {
  const {filter_products} = useFilterContext();
  // console.log("filterproduct",filter_products);
  

  return (
    <div >
        <div className='flex p-4'>
          <div className='w-[20%]'>
              <FilterSection/>
          </div>

          <section className='w-[80%]'>
              <div>
                <Sort/> 
              </div>
              <div>
                  <ProductList/>
              </div>
          </section>
        </div>
    </div>
  )
}

export default Products