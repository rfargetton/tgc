export default function Card({children}){
  return (
    <div className="h-full shadow-2xl rounded-xl bg-white overflow-hidden">
      {children}
    </div>
  )
}