"use client"

import { useState, useEffect  } from "react";
import AdminSideBar from "../components/AdminSideBar";
import getCategories from "@/app/api/getCategories";

export default function CreateProduct() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState('');
    const [sku, setSku] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [color, setColor] = useState('');
    const [category, setCategory] = useState('');

    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
      async function fetchCategories() {
        try {
          const categoriesData = await getCategories();
          setCategories(categoriesData);
        } catch (error) {
          console.error('Error fetching categories:', error);
        }
      }
  
      fetchCategories();
    }, []);

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const now = new Date();

        const year = now.getFullYear(); 
        const month = now.getMonth(); 
        const day = now.getDate(); 

        const formattedDateTime = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    
        const userData = {
            name,
            description,
            brand,
            price,
            sku,
            imageUrl,
            color,
            categoryId: parseInt(category, 10),
            createdAt: formattedDateTime,
        };
    
        try {
            const response = await fetch('http://localhost:5000/products', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if(response.ok){
                alert('Produkt tillagd!');
                window.location.replace('/backoffice');
            }
            else{
                const errorData = await response.json();
                const errors = errorData.errors || {};
                
                console.error('Ogiltiga uppgifter:', errors);

                alert(`Ogiltiga uppgifter!`);
            }

        } catch (error) {
            console.error('Något gick fel:', error);
        }
    };

    return (
      <>
      <div className="flex">
        <AdminSideBar />
        <div className="basis-8/12">
        <form onSubmit={(e) => handleSubmit(e)}>
      <div className="space-y-12 sm:space-y-16 mt-5">
        <div>
          <h2 className="text-base font-semibold leading-7 text-gray-900">Lägg till produkt</h2>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-600">
            Fyll i alla fält.
          </p>

          <div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">

              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                Namn
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0"> 
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-lime-200 sm:max-w-md">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="t-shirt"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
            </div>

        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
            <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                Beskrivning
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <textarea
                  id="description"
                  name="description"
                  rows={3}
                  className="block w-full max-w-2xl rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-200 sm:text-sm sm:leading-6"
                  defaultValue={''}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>

        <div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label htmlFor="brand" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                Märke
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-lime-200 sm:max-w-md">
                  <input
                    type="text"
                    name="brand"
                    id="brand"
                    autoComplete="brand"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="levis"
                    onChange={(e) => setBrand(e.target.value)}
                  />
                </div>
              </div>
            </div>
        </div>

        <div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                Pris
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-lime-200 sm:max-w-md">
                <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">kr: </span>
                  <input
                    type="text"
                    name="price"
                    id="price"
                    autoComplete="price"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="1000"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
              </div>
            </div>
        </div>

        <div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label htmlFor="sku" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                SKU
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-lime-200 sm:max-w-md">
                  <input
                    type="text"
                    name="sku"
                    id="sku"
                    autoComplete="sku"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="AAA111"
                    onChange={(e) => setSku(e.target.value)}
                  />
                </div>
              </div>
            </div>
        </div>

        <div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label htmlFor="imageUrl" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                BildUrl
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-lime-200 sm:max-w-md">
                  <input
                    type="text"
                    name="imageUrl"
                    id="imageUrl"
                    autoComplete="imageUrl"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="http://via.placeholder/100x100"
                    onChange={(e) => setImageUrl(e.target.value)}
                  />
                </div>
              </div>
            </div>
        </div>

        <div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label htmlFor="color" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                Färg
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-lime-200 sm:max-w-md">
                  <input
                    type="text"
                    name="color"
                    id="color"
                    autoComplete="color"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="röd"
                    onChange={(e) => setColor(e.target.value)}
                  />
                </div>
              </div>
            </div>
        </div>
            

                <div>
                <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
                Kategori
                </label>
                <select
                id="category"
                name="category"
                className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-lime-200  sm:text-sm sm:leading-6"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                >
                {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                    {category.name}
                    </option>
                ))}
                </select>
                </div>    
            </div>
        </div>
    </div> 

      <div className="mt-6 flex items-center justify-center gap-x-6 mb-8">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Avbryt
        </button>
        <button
          type="submit"
          className="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Spara
        </button>
      </div>
    </form>
    </div> 
    </div> 
      </>
    )
  }