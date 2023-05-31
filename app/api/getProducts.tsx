export default async function getProducts(searchTerm: string) {

    const searchParams = new URLSearchParams();
    searchParams.set('search', searchTerm);
    
    const headers = new Headers();
    headers.append('Cache-Control', 'public, max-age=10');

    const response = await fetch('http://localhost:5000/products?' + searchParams, {
      headers: headers
    });

    const responseJson = await response.json();

    const responseData = JSON.parse(JSON.stringify(responseJson))

    const products: Product[] = responseData.map((item: any) => {
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

     return products

}
