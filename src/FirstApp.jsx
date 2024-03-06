
const newMessage = {
  nombre: 'juanca',
  apellido: 'ulloa'
};
const getResult =  () =>{
    return 'mapache';
}
export const FirstApp = () => {

  return (
    <>
    <h1>{`Hola  ${getResult()} ${newMessage.apellido} `}</h1>
    <p>soy un subtitulo</p>
    </>
  )
}
