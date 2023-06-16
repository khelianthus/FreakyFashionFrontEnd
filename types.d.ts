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

type ProductWithQuantity = {
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
    createdat: Date,
    quantity: number;
}

type ProductWithCategoryObject = Product & {
  category: {
    id: number;
    name: string;
    urlSlug: string;
  };
}

type Category = {
    id: number,
    name: string,
    urlSlug: string,
    products: Product[];
}