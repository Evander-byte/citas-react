

const Error = ({mensaje}) => {
  return (
    <div className="bg-red-800 rounded-xl p-3 text-center mb-3 uppercase font-bold text-white">
        <p>{mensaje}</p>
    </div>
  )
}

export default Error
