import getCategories from "./getCategories";

export default async function getProducts(searchTerm: string) {

    const encodedSearchTerm = searchTerm.includes('%')
    ? searchTerm
    : encodeURIComponent(searchTerm);

    const searchParams = new URLSearchParams();
    searchParams.set('search', encodedSearchTerm);

    const url = `http://localhost:5000/products?${searchParams.toString()}`;
    console.log(url);
    
    const response = await fetch('http://localhost:5000/products?' + searchParams,
     { next: { revalidate: 10 }
    });

    const responseJson = await response.json();

    const products: Product[] = responseJson.map((item: any) => {
      const sqlDateString: string = item.createdAt; 
  
      const dateParts: string[] = sqlDateString.split("-");
      const year: number = parseInt(dateParts[0]);
      const month: number = parseInt(dateParts[1]) - 1; 
      const day: number = parseInt(dateParts[2]);
      const date: Date = new Date(year, month, day);

      const createdAtString: string = date.toLocaleDateString('sv-SE', { year: 'numeric', month: '2-digit', day: '2-digit' });

      // const categories = getCategories();
      // const category: string item.category;
  
      return {
        id: item.id,
        name: item.name,
        description: item.description,
        brand: item.brand,
        price: item.price,
        sku: item.sku,
        imageUrl: item.imageUrl,
        urlSlug: item.urlSlug,
        likes: item.likes,
        color: item.color,
        category: item.category,
        createdat: createdAtString 
      };
    });

     return products

}