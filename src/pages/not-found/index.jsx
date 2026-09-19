import { useNavigate } from "react-router"


export function NotFound() {
  let navigate = useNavigate()
  function returnHome() {
    navigate("/")
  }

  return (
    <div>
      <h1>Página não encontrada!</h1>
      <button onClick={returnHome}>Voltar ao HOME</button>
    </div>
  )
}