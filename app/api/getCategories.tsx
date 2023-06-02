export default async function getCategories() {

    const headers = new Headers();
    headers.append('Cache-Control', 'public, max-age=10');
   
    const response = await fetch('http://localhost:5000/categories', {
      headers: headers
    });

    const responseJson = await response.json();

    const responseData = JSON.parse(JSON.stringify(responseJson))

    const categories: Category[] = responseData.map((item: any) => {
        return {
          id: item.id,
          name: item.name,
          products: item.products
        };
      });

     return categories

}