import Container from "../container";

export default function PageHeader({children}){
  return (
    <div className="my-20 w-8/12 mx-auto text-center">
      <Container>
        <div className="">
          {children}
        </div>
      </Container>
    </div>
  )
}