export default async function getCategoryByUrlSlug(urlSlug: string) {
    const response = await fetch(`http://localhost:5000/categories/${urlSlug}`, {next: { revalidate: 10 }})
  
    if (!response) throw new Error("failed to fetch category")
  
    return response.json();
  }