export default async function getAllProducts() {

    const response = await fetch("http://localhost:5000/products", {next: { revalidate: 10 }} )
  
    if (!response) throw new Error("failed to fetch products")

    const responseJson = await response.json();

    const products: Product[] = responseJson.map((item: any) => {
     
      const sqlDateString: string = item.createdAt; 

      const dateParts: string[] = sqlDateString.split("-");
      const year: number = parseInt(dateParts[0]);
      const month: number = parseInt(dateParts[1]) - 1; 
      const day: number = parseInt(dateParts[2]);
      const date: Date = new Date(year, month, day);

      const createdAtString: string = date.toLocaleDateString('sv-SE', { year: 'numeric', month: '2-digit', day: '2-digit' });

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