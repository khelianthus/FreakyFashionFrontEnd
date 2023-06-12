"use client";

import ProductCard from '@/app/[searchTerm]/components/ProductCard';
import getCategoryById from '@/app/api/getCategoryById';
import { useState, useEffect } from 'react'

type Params = {
    params: {
        categoryId: number
    }
  }

export default function Category({params: {categoryId}}:Params) {

    const [category, setCategory] = useState<Category>();

    useEffect(() => {
        async function fetchData() {
        const categoryData = await getCategoryById(categoryId);
        setCategory(categoryData);
        }
        fetchData();
    }, []);

    if(category == undefined){
        <p>Kategorin finns inte</p>
    }
    else
    {
        const products = category.products
        const content = (
            <main className="mx-auto min-h-min">
              <h1 className="mt-5 text-xl text-gray-500 text-center p-1">"{category.name}"</h1>
                <section className="product-cards">
                    <div className="bg-white">
                        <div className="mx-auto max-w-7xl overflow-hidden px-4 py-4 sm:px-6 sm:py-16 lg:px-8">
                            <div className="p-7 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                                {products.length > 0 ? (
                                    products.map((product) => (
                                    <ProductCard key={product.id} result={product} />
                                    ))
                                ) : (
                                    <h2 className="p-2 text-xl">{`Finns inga produkter att visa`}</h2>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
          );

        return content;
    }
   
}