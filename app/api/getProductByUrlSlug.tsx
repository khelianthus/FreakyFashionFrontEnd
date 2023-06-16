export default async function getProductByUrlSlug(urlSlug: string) {
  const response = await fetch(`http://localhost:5000/backoffice/productdetails/${urlSlug}`);
  
  if (!response) throw new Error("failed to fetch product")

  return response.json();
}