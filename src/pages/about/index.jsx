import { Link } from "react-router";


export function About() {
  return (
    <div>
      <h1>Página SOBRE</h1>
      <br />
      <Link to="/">Home</Link>
      <br />
      <Link to="/contact">Contatos</Link>
    </div>
  )
}