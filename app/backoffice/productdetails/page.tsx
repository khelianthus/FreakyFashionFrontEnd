import ProductInformation from "../components/ProductInformation"

type ProductDetailsProps = {
  productId: string;
};

const ProductDetails = ({ productId }: ProductDetailsProps) => {
  return (
    <ProductInformation params={{ productId }} />
  )
}

export default ProductDetails