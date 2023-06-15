'use client'

import AdminSideBar from './components/AdminSideBar'
import ProductList from './components/ProductList'

export default function page() {
    return (
    <> 
    <div className="flex">
    <AdminSideBar/>
    <div className="basis-8/12">
     <ProductList/> 
    </div>
    </div>
    </>
  )
}
