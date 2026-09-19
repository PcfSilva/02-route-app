import { useParams } from "react-router"
import { Outlet } from "react-router"

export function Product() {
  const { id } = useParams()
  return (
    <div>
      <h1>Produtos: id aqui - {id}</h1>
      <Outlet />
    </div>
  )
}