function App() {

  const sumar = () => {
    console.log(2+2)
  }

  const name = 'Amorcito'

  sumar()
  return (
    // Dentro del return solo se pueden colocar expresiones (ternarios, expresiones, funciones del strings) usando {}
    <>
    {/* EJEMPLO de un ternario: */}
     {name == 'Amorcito' ? 'eres un amorcito' : 'no eres un amorcito'}
      <h1>{'Hola Mundo'.toLowerCase()}</h1>
    </>
  )
}

export default App
