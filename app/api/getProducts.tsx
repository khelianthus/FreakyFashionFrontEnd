export default async function getProducts(searchTerm: string) {

    const searchParams = new URLSearchParams();
    searchParams.set('search', searchTerm);
    
    //Header sätts för att säga att cache-data (vårt sökresultat vi hämtar från backend)
    //ej ska sparas i mer än 10 sekunder. Detta sätts för att om ändringar gjorts på backend,
    //hämtar next.js först sparad data i cache istället för att titta i backend först, det gör den endast
    //om den inte hittar en match i cache.

    //Skicka in searchParams till endpoint localhost:5000/products? samt sätter ovan header på detta anrop
    const response = await fetch('http://localhost:5000/products?' + searchParams,
     { next: { revalidate: 10 }
    });

    //Svaret görs till json-format
    const responseJson = await response.json();

    //Mappar svaret till Product array
    const products: Product[] = responseJson.map((item: any) => {
      //Då createdat är string måste det göras om till date, används för att bedöma om produkt är nyhet eller ej.
      const sqlDateString: string = item.createdAt; 
  
      // Konverterar strängen till ett Date-objekt
      const dateParts: string[] = sqlDateString.split("-");
      const year: number = parseInt(dateParts[0]);
      const month: number = parseInt(dateParts[1]) - 1; // Månader är noll-baserade, därför -1
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
        createdat: createdAtString // Skriver över createdAt med vårt nya parsade Date objekt
      };
    });

    console.log(products)

      //Array av products returneras för att visas på pages.tsx
     return products

}