export default async function getAllProducts() {
    const response = await fetch("http://localhost:5000/products", {next: { revalidate: 10 }} )
  
    if (!response) throw new Error("failed to fetch products")
  
    return response.json();
  }