export default async function getCategories() {
   
    const response = await fetch('http://localhost:5000/categories', {
        next: { revalidate: 10 }  
    });

    const responseJson = await response.json();

    const responseData = JSON.parse(JSON.stringify(responseJson))

    const categories: Category[] = responseData.map((item: any) => {
        return {
          id: item.id,
          name: item.name,
          urlSlug: item.urlSlug,
          products: item.products
        };
      });

     return categories

}