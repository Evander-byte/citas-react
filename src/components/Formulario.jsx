

const Formulario = () => {
  return (
    <div className="md:w-1/2 lg:w -2/5">
      <h2  className="font-black text-3xl text-center">
        Seguimiento Pacientes
      </h2>
      <p className="text-lg mt-5 text-center">Añade Pacientes y  {""}<span className="text-indigo-600 font-bold">Administralos </span>
      </p>

      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
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
          />
        </div> 
        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Alta: 
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"
            type="date"
            id="alta"
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
          />
        </div> 
        <input 
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
          value="Agregar Mascota"
        />
      </form>
    </div>
  )
}

export default Formulario
