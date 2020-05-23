import React from 'react';
import imagen1 from '../img/imagen1.png';
//Importo los estilos 
import './estilos/Tarjeta.css';
import 'bootstrap/dist/css/bootstrap.css'


class Tarjeta extends React.Component{

    render(){
        return (
            <div className="card mx-auto Fitness-Card">
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={imagen1} alt="Imagen" className="float-right" />
                        </div>

                        <div className="col-6 Fitness-Card-Info">
                            <h1>Technique Guides</h1>
                            <p>Learn amazing street workout and calisthenics</p>
                        </div>
                    </div>
                </div>
            </div>

           
        );
    }

}

export default Tarjeta;