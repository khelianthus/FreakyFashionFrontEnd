export default async function getProductById(productId: string) {
    const response = await fetch(`http://localhost:5000/products/${productId}`, {next: { revalidate: 10 }})
  
    if (!response) throw new Error("failed to fetch product")
  
    return response.json();
  }