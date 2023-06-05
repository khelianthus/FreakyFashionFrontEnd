//Behöver kanske göra om category: string till category: Category på sikt.
type Product = {
    id: number,
    name: string,
    description: string,
    brand: string,
    price: number,
    sku: string,
    imageUrl: string,
    urlSlug: string,
    likes: number,
    color: string,
    category: string,
    createdat: Date
}

type Category = {
    id: number,
    name: string,
    products: Product[];
}