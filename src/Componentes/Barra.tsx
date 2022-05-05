import './Estilos.css';

function Barra(props: any) {

  return (
   <>
   <input type= 'text' className='Texto' id='Texto' value={props.valor} readOnly = {true}  />
   </>
  );
}

export default Barra;


