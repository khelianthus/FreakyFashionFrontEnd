'use client'
import ProductInformation from "../../components/ProductInformation"
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react';
import getProductByUrlSlug from "@/app/api/getProductByUrlSlug";
import AdminSideBar from "../../components/AdminSideBar";

export default function Page() {
  const pathname = usePathname()
  const [product, setProducts] = useState<ProductWithCategoryObject | null>(null);
  
  // console.log('Pathname', pathname);

  const extractedSlug = pathname && typeof pathname === 'string' ? pathname.split('/').pop() : '';

  // console.log('Pathname extracted:', extractedSlug);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productData = await getProductByUrlSlug(extractedSlug as string);
        setProducts(productData);
      } catch (error) {
        // Handle error
      }
    };

    if (extractedSlug) {
      fetchData();
    }  }, [extractedSlug])


  // console.log('UrlSlug i page.tsx:', pathname)

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
