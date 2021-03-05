export default function FeaturesList({description, features}){
  return (
    <div className="mb-6">
      <div className="p-3 md:p-6 flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-1/3 mb-4">
          <div className="text-base md:text-lg font-medium">{description}</div>
        </div>
        <div className="w-full md:w-1/2">
          <ul>
            {features.map((feature) => (
              <li key={feature} className="border-b-2 border-asphalte">
                <p>{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}