import { useParams } from "react-router"


export function Avaliation() {
  const { id } = useParams()
  return (
    <div>
      <strong>Esta é uma avaliação do produto!</strong>
    </div>
  )
}