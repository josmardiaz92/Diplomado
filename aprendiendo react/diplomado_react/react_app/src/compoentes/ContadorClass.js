import React, {Component} from "react";

class Contador extends Component{
    constructor(props){
        super(props);
        this.state={contador:0}
    }
    componentDidMount(){
        console.log('el componente se cargo en el DOM')
    }
    componentDidUpdate(PropsAnteriores, EstadoAnterior){
        console.log('el componente ha sido actualizado');
        console.log('las propiedades anteriores del componente son: ',PropsAnteriores);
        console.log('El estado anterior del compnente es: ',EstadoAnterior);
    }
    componentWillUnmount(){
        console.log('el componente se dejara de mostrar en el DOM')
    }
    incrementar(CantidadAIncrementar){
        this.setState((EstadoAnterior)=>{
            return{
                contador:EstadoAnterior.contador+CantidadAIncrementar
            }
        });
    }
    disminuir(CantidadADisminuir){
        this.setState((EstadoAnterior)=>{
            return{
                contador:EstadoAnterior.contador-CantidadADisminuir
            }
        });
    }
    render(){
        return(
            <div>
                <h2>Esta es la calse número {this.state.contador}</h2>
                <button onClick={()=>this.incrementar(this.props.incrementar)}>Incrementar</button>
                <button onClick={()=>this.disminuir(this.props.disminuir)}>Disminuir</button>
            </div>
        );
    }
}
export default Contador;