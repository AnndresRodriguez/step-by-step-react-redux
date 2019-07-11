import React from 'react';
import {connect} from "react-redux"
import {quitarTitular} from "../redux/actions/actionsEntrenador"
const Titulares = ({titulares, quitarTitular}) => (
    <section>
        <h2>Titulares</h2>
        <div className="cancha">
            {
                titulares.map(titular => (
                    <article className="titular" key={titular.id}>
                        <div>
                            <img src={titular.foto} alt={titular.nombre}/>
                            <button onClick={() => quitarTitular(titular) }>X</button>
                        </div>
                        <p>{titular.nombre}</p>

                    </article>
                ))
            }

        </div>
    </section>
)

const mapStateToProps = state => ({
    titulares: state.entrenador.titulares
})

const mapDispatchToProps = {
    quitarTitular
}

// const mapDispatchToProps = dispatch => ({
//     quitarTitular(titular){
//         dispatch({
//             type: "QUITAR_TITULAR",
//             titular
//         })

//     }
// })
export default connect(mapStateToProps, mapDispatchToProps)(Titulares);