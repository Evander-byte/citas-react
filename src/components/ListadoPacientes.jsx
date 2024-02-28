import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes}) => {
  
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes.length && pacientes 
      
        ? (
            <>
              <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
              <p className="text-xl mt-5 mb-10 text-center ">Administra tus <span className="text-indigo-600 font-bold">Pacientes y Citas</span></p>
              {pacientes.map(paciente => (
                <Paciente 
                  key={paciente.id} 
                  paciente={paciente}
                />
              ))}
            </>
          )
        
        : (
            <>
              <h2 className="font-black text-3xl text-center">No hay pacientes registrados</h2>
              <p className="text-xl mt-5 mb-10 text-center ">Agrega pacientes <span className="text-indigo-600 font-bold">para poder administrarlos</span></p>
            </>
          )
      }
      
    </div>
  )
}

export default ListadoPacientes
