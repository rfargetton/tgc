export default function PricesList({description, options}){
  return (
    <div className="my-6">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-1/3 mb-4">
          <div className="text-base md:text-lg font-medium">{description}</div>
        </div>
        <div className="w-full md:w-1/2">
          <ul>
            {options.map((option) => (
              <li key={option.description} className="border-b-2 last:border-b-0 border-asphalte flex items-center justify-between">
                <p>{option.description}</p>
                <span className="ml-2 my-2 p-2 bg-white font-medium rounded-lg">{`${option.price}€`}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}