import { Link } from "react-router"
import { Contact } from "../contact"

export function Home() {
  return (
    <div>
      <h1>Página HOME</h1>
      <br />
      <Link to="/contact">Contatos</Link>
      <br />
      <Link to="/about">Sobre</Link>
    </div>
  )
}