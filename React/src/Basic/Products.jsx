import { useParams } from "react-router-dom"

const Products = () => {
    const param = useParams();
  return (
    <div>
      {param.id}
    </div>
  )
}

export default Products
