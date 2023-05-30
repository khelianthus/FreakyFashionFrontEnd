export default async function getProductResults(searchTerm: string) {

    const searchParams = new URLSearchParams();
    searchParams.set('search', searchTerm);
    
    const response = await fetch('http://localhost:5000/products?' + searchParams)

    return response.json()

}


