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
    createdat: string
}

type Category = {
    id: number,
    name: string,
    products: Product[];
}