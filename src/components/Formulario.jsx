import { useState, useEffect } from "react"
import Error from "./Error"


const Formulario = ({ pacientes,setPacientes,paciente }) => {


  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [sintomas, setSintomas] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    const {nombre, propietario, email, fecha, sintomas} = paciente

    setNombre(nombre)
    setPropietario(propietario)
    setEmail(email)
    setFecha(fecha)
    setSintomas(sintomas)
  }, [paciente])

  const handleSubmit = (e) => {
    e.preventDefault()

    if([nombre, propietario, email, fecha, sintomas].includes('')){
      console.log('Los campos no deben ir vacios')
      setError(true)
      return
    }

    const generarId = () => {
      const date = Date.now().toString(36)
      const math = Math.random().toString(36).substring(2)
      return date+math
    }

    // Objeto de paciente
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
      id: generarId()
    }

    setPacientes([...pacientes, objetoPaciente])
    
    setNombre('')
    setEmail('')
    setPropietario('')
    setSintomas('')
    setError(false)

  }
  

  return (
    <div className=" mx-5 md:w-1/2 lg:w-2/5">
      <h2  className="font-black text-3xl text-center">
        Seguimiento Pacientes
      </h2>
      <p className="text-lg mt-5 text-center mb-10">Añade Pacientes y  {""}<span className="text-indigo-600 font-bold">Administralos </span>
      </p>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        {error && <Error mesanje={'Todos los campos son obligatorios'}/>}
        <div className="mb-5">
          <label
            htmlFor="nombre"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Mascota: 
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"
            type="text"
            placeholder="Nombre de la mascota"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div> 
        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Propietario: 
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"
            type="text"
            placeholder="Nombre del Propietario"
            id="propietario"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div> 
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email: 
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"
            type="email"
            placeholder="Email del propietario"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div> 
        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Ingreso: 
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"
            type="date"
            id="alta"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div> 
        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Sintomas: 
          </label>
          <textarea 
            id="sintomas" 
            cols="30" 
            rows="10"
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"
            placeholder="Describe los sintomas de la mascota"
            value={sintomas}
            onChange={(e) => setSintomas (e.target.value)}
          />
        </div> 
        <input 
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all rounded-lg"
          value="Agregar Mascota"
        />
      </form>
    </div>
  )
}

export default Formulario
