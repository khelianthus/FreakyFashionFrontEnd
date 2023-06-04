export default async function getProducts(searchTerm: string) {

    const searchParams = new URLSearchParams();
    searchParams.set('search', searchTerm);
    
    //Header sätts för att säga att cache-data (vårt sökresultat vi hämtar från backend)
    //ej ska sparas i mer än 10 sekunder. Detta sätts för att om ändringar gjorts på backend,
    //hämtar next.js först sparad data i cache istället för att titta i backend först, det gör den endast
    //om den inte hittar en match i cache.
    const headers = new Headers();
    headers.append('Cache-Control', 'public, max-age=10');

    //Skicka in searchParams till endpoint localhost:5000/products? samt sätter ovan header på detta anrop
    const response = await fetch('http://localhost:5000/products?' + searchParams, {
      headers: headers
    });

    //Svaret görs till json-format
    const responseJson = await response.json();

    //Svaret mappas till en samling av typ Product
    const products: Product[] = responseJson.map((item: any) => {
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
          createdAt: item.createdAt,
        };
      });

      //Array av products returneras för att visas på pages.tsx
     return products

}
