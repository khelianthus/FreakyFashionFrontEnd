'use client'
import ProductInformation from "../../components/ProductInformation"
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react';
import getProductByUrlSlug from "@/app/api/getProductByUrlSlug";
import AdminSideBar from "../../components/AdminSideBar";

export default function Page() {
  const pathname = usePathname()
  const [product, setProducts] = useState<ProductWithCategoryObject | null>(null);
  
  const extractedSlug = pathname && typeof pathname === 'string' ? pathname.split('/').pop() : '';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productData = await getProductByUrlSlug(extractedSlug as string);
        setProducts(productData);
      } catch (error) {
        console.log(error)
      }
    };

    if (extractedSlug) {
      fetchData();
    }  }, [extractedSlug])

  return (
    <>
      <div className="flex">
        <AdminSideBar />
        <div className="basis-8/12">
          <ProductInformation product={product} />
        </div>
      </div>
    </>
  );
}