'use client'
import getProductById from "@/app/api/getProductById";



type Params = {
    params: {
        productId: string
    }


}

export default async function Details({params: {productId}}:Params) {

    const productData: Promise<ProductWithQuantity> = getProductById(productId);

    const product = await productData; 

    product.quantity = 1;

    function AddToLocalStorage() {
        const productsJSON = localStorage.getItem('cart');
        const existingProducts = productsJSON ? JSON.parse(productsJSON) : [];
        const existingProduct = existingProducts.find((existingProduct: any) => existingProduct.id === product.id);
    
        if (existingProduct) {
          // Om produkten redan finns i varukorgen, öka antalet
          existingProduct.quantity += product.quantity;
        } else {
          // Annars, lägg till produkten i varukorgen
          existingProducts.push(product);
        }
    
        localStorage.setItem('cart', JSON.stringify(existingProducts));
      }

   

  return (
    <section className="w-11/12 md:w-3/5 h-screen m-auto flex items-center">
    <div className="w-full h-full flex flex-col md:flex-row gap-20 items-center "> 
        <div className="relative">
            <img className=" w-full h-full"src={product.imageUrl} alt=""/>
            {/* <div className="arrows w-full justify justify-between absolute inset-y-1/2 flex px-3" >
                <button><i className="fa-solid fa-chevron-left"></i></button>
                <button><i className="fa-solid fa-chevron-right"></i></button>
            </div> */}

        </div>
        <div className="flex flex-col flex-wrap space-y-5 p-5">
        {/* <h4 className="text-xl font-semibold">{product.category.name}</h4> */}
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <h2 className="text-xl font-bold">{product.price} kr</h2>
        <p className="text-sm">{product.description}</p>
        <div className="space-y-5"> 
            <input className="w-24 h-8 border border-gray-600 outline-0"  placeholder="1" type="number" id="amount"/>
            <div>
                <button className="w-8 h-8 bg-black rounded-full shadow-xl"></button>
                <button className="w-8 h-8 bg-red-500 rounded-full shadow-xl"></button>
                <button className="w-8 h-8 bg-blue-500 rounded-full shadow-xl"></button>
                <button className="w-8 h-8 bg-white border rounded-full shadow-xl"></button>
            </div>
        </div>
        <div className="space-x-5 flex items-center">
            <button className="flex items-center space-x-2 border border-rose-400 px-5 py-2 rounded-md hover:bg-rose-400 hover:text-white">
                <i className="fa-regular fa-heart text-xl"></i>
                <span>Favoriter</span>
            </button>
            <button className="bg-rose-400 px-5 py-2 rounded-md text-white hover:bg-white hover:border hover:border-gray-600 hover:text-black" type="submit" onClick={AddToLocalStorage}>
                <i className="fa-solid fa-cart-shopping"></i>
                <span>Lägg till varukorg</span>
            </button>
        </div>
      </div>
    </div>
    </section>

  )
}
