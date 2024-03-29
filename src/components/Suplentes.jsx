import React from "react";
import { connect } from "react-redux";
import { quitarSuplente } from "../redux/actions/actionsEntrenador";

const Suplentes = ({ suplentes, quitarSuplente }) => (
  <section>
    <h2>Suplente</h2>
    <div className="cancha">
      {suplentes.map(suplente => (
        <article className="suplentes" key={suplente.id}>
          <div>
            <img src={suplente.foto} alt={suplente.nombre} />
            <button onClick={() => quitarSuplente(suplente)}>X</button>
          </div>
          <p>{suplente.nombre}</p>
        </article>
      ))}
    </div>
  </section>
);

const mapStateToProps = state => ({
  suplentes: state.entrenador.suplentes
});

const mapDispatchToProps = {
  quitarSuplente
};

// const mapDispatchToProps = dispatch => ({
//     quitarSuplente(suplente){
//         dispatch({
//             type: "QUITAR_SUPLENTE",
//             suplente
//         })
//     }

// })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Suplentes);
