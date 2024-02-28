

const Paciente = ({paciente, setPaciente}) => {
  
  const {nombre, propietario, email, fecha, sintomas} = paciente
  return (
    <div className="mx-5 my-10  bg-white shadow-md rounded-xl p-5 py-5">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
          <span className="font-normal normal-case ">{nombre}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
          <span className="font-normal normal-case ">{propietario}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
          <span className="font-normal normal-case ">{email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Ingreso: {''}
          <span className="font-normal normal-case ">{fecha}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
          <span className="font-normal normal-case ">{sintomas}</span>
        </p>

        <div className="flex justify-start gap-5 mt-10">
          <button 
            type="button"
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300 shadow-md"
            onClick={() => setPaciente(paciente)}
          >Editar</button>
          <button 
            className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg cursor-pointer transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300 shadow-md"
            type="button"
          > Eliminar</button>
        </div>
    </div>
  )
}

export default Paciente
