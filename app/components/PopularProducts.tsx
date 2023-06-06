import getAllProducts from "../api/getAllProducts"
import ProductCard from "../[searchTerm]/components/ProductCard"

export default async function PopularProducts() {
    
  const productsData: Promise<Product[]> = getAllProducts()

    const products = (await productsData)

    const content = (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="sm:flex sm:items-baseline sm:justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Populära produkter</h2>
          <a href="#" className="hidden text-sm font-semibold text-gray-700 hover:text-gray-900 sm:block">
            Se alla produkter
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
       
      <div className="mx-auto max-w-2xl py-8 sm:py-10 lg:max-w-7xl">
        <div className="grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} result={product} />
          ))}
        </div>
      </div>
   

        <div className="mt-6 sm:hidden">
          <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
            Browse all favorites
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
     )

    return content;

}