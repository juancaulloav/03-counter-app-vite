import PropTypes from 'prop-types';
const newMessage = {
  nombre: 'juanca',
  apellido: 'ulloa'
};
const getResult =  () =>{
    return 'mapache';
}
export const FirstApp = ({ title , subTitle , name }) => {


  return (
    <>
    <h1>{`Hola  ${getResult()} ${newMessage.apellido} `}</h1>
    <h2>{ title }</h2>
    <p>{ subTitle }</p>
    <p>{ name }</p>
    </>
  )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string
}

FirstApp.defaultProps = {
    name: 'Juanca Ulloa',
    subTitle: ' no hay subtitulo ',
    title: ' no hay titulo ',
}