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
/*
TODO: Skriva om kod, använd interface - extends.
Se exempel:

interface Vehicle {
  brand: string;
  wheels: number;
}

interface Car extends Vehicle {
  engineType: string;
}

type Vehicle = {
  brand: string;
  wheels: number;
};

type Car = Vehicle & {
  engineType: string;
};
*/

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