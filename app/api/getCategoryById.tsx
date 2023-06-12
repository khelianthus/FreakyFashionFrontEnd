export default async function getCategoryById(categoryId: number) {
    const response = await fetch(`http://localhost:5000/categories/${categoryId}`, {next: { revalidate: 10 }})
  
    if (!response) throw new Error("failed to fetch category")
  
    return response.json();
  }