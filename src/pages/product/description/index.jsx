import { useParams } from "react-router"


export function Description() {
  const { id } = useParams()
  return (
    <div>
      <h3>Descrição do produto</h3>
      <p>Este é um produto muito top!</p>
    </div>
  )
}