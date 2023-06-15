import ProductInformation from "../../components/ProductInformation"

type Params = {
  params: {
      urlSlug: string
  }
}

export default function ProductDetails({params: {urlSlug}}:Params) {
  return <ProductInformation params={{ urlSlug }} />
  
}

