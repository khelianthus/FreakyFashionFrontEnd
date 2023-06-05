import getProducts from "../api/getProducts";
import ProductCard from "./components/ProductCard";

//Tar in searchTerm från sökfältet så vi kan använda den här
type Props = {
  params: {
    searchTerm: string;
  };
};

//Genererar metadata som vi ser i head dynamiskt, tar in vårt objekt Props som är vår searchTerm.

export async function generateMetadata({ params: { searchTerm } }: Props) {
    //Sparar resultatet av vår fetch asynkront som blir en array av Product, sparar den i en const
  const products: Product[] = await getProducts(searchTerm);

    //mellanslag i söktermen blir till ett faktiskt mellanslag i URL
  const displayTerm = searchTerm.replaceAll("%20", " ");

    //Om vi inte har något objekt i vår array, har vi inte fått ett resultat
  if (products.length === 0) {
    return {
      title: `${displayTerm} Not Found`
    };
  }
  //Annars visar vi resultat från vår sökterm (formaterad så att den innehåller mellanslag om det finns)

  return {
    title: displayTerm,
    description: `Sökresultat för ${displayTerm}`
  };
}

    //Genrerar vårt sökresultat utifrån vår searchTerm som är av objekt Props
export default async function SearchResults({ params: { searchTerm } }: Props) {
    //Sparar resultatet av vår fetch asynkront som blir en array av Product, sparar den i en const
  const products: Product[] = await getProducts(searchTerm);


    //Genererar HTML-innehåll av vårt resultat dynamiskt 
    const content = (
    <main className="mx-auto min-h-min">
      <h1 className="text-xl text-gray-500 text-center p-1">Sökresultat för "{searchTerm}":</h1>
        <section className="product-cards">
            <div className="bg-lightBlue">
                <div className="mx-auto max-w-7xl overflow-hidden px-4 py-4 sm:px-6 sm:py-16 lg:px-8">
                    <div className="bg-white shadow-white shadow-2xl rounded-xl p-7 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10">
        {/* Om products är mer än 0, mappa array till en productCard, iterera (product) 
        För varje product, gör en ProductCard-component där nyckel är product.id*/}
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} result={product} />
        ))
      ) : (
        <h2 className="p-2 text-xl">{`${searchTerm} Not Found`}</h2>
      )}
                </div>
            </div>
        </div>
      </section>
    </main>
  );

  return content;
}
