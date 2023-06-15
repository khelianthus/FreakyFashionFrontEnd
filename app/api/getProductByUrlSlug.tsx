export default async function getProductByUrlSlug(urlSlug: string) {
  const response = await fetch(`http://localhost:5000/backoffice/productdetails/${urlSlug}`);
  
  console.log('URLslug in getProductsByUrlSlug:', urlSlug)

  if (!response) throw new Error("failed to fetch product")

  console.log('Response in getProductsByUrlSlug:', response)

  return response.json();
}