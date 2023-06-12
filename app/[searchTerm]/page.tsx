import getProducts from "../api/getProducts";
import ProductCard from "./components/ProductCard";

type Props = {
  params: {
    searchTerm: string;
  };
};

export async function generateMetadata({ params: { searchTerm } }: Props) {
  const products: Product[] = await getProducts(searchTerm);

  const displayTerm = decodeURIComponent(searchTerm.replaceAll("%20", " "));
  
  if (products.length === 0) {
    return {
      title: `${displayTerm} Not Found`
    };
  }

  return {
    title: displayTerm,
    description: `Sökresultat för ${displayTerm}`
  };
}

export default async function SearchResults({ params: { searchTerm } }: Props) {
  const products: Product[] = await getProducts(searchTerm);

  const decodedSearchTerm = decodeURIComponent(searchTerm);

    const content = (
    <main className="mx-auto min-h-min">
      <h1 className="mt-5 text-xl text-gray-500 text-center p-1">Sökresultat för "{decodedSearchTerm}":</h1>
        <section className="product-cards">
            <div className="bg-white">
                <div className="mx-auto max-w-7xl overflow-hidden px-4 py-4 sm:px-6 sm:py-16 lg:px-8">
                    <div className="p-7 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} result={product} />
        ))
      ) : (
        <h2 className="p-2 text-xl">{`${decodedSearchTerm} Not Found`}</h2>
      )}
                </div>
            </div>
        </div>
      </section>
    </main>
  );

  return content;
}