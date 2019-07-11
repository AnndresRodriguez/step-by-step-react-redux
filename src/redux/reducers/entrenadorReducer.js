import {AGREGAR_TITULAR, AGREGAR_SUPLENTE, QUITAR_TITULAR, QUITAR_SUPLENTE} from "../actions/actionsEntrenador"

const initialState = {
    jugadores: [
        {
            id: 1,
            nombre: "Juan Carlos",
            foto: "https://api.ed.team/files/avatars/001803a2-cf00-4a26-8bac-c77c15dcb1d2.jpg"
        },
        {
            id: 2,
            nombre: "Beto Quiroga",
            foto: "https://api.ed.team/files/avatars/38118146-4b4a-4844-8959-157614e04cd1.jpg"
        },
        {
            id: 3,
            nombre: "Juan Vilavalzo",
            foto: "https://api.ed.team/files/avatars/e58f3a64-aa51-4582-80fa-9bf31c1208b9.jpg"
        }
    ],
    titulares: [],
    suplentes: []
}

function reducer (state = initialState, {type, payload}){

    switch(type){
        case AGREGAR_TITULAR: {
            return {
                ...state,
                titulares: state.titulares.concat(payload.titular),
                jugadores: state.jugadores.filter(jugador => jugador.id !== payload.titular.id)
            }
        }
        case AGREGAR_SUPLENTE: {
            return {
                ...state,
                suplentes: state.suplentes.concat(payload.suplente),
                jugadores: state.jugadores.filter(jugador => jugador.id !== payload.suplente.id)
            }
        }
        case QUITAR_TITULAR: {
            return {
                ...state,
                titulares: state.titulares.filter(titular => titular.id !== payload.titular.id),
                jugadores: state.jugadores.concat(payload.titular) 
            }
        }
        case QUITAR_SUPLENTE: {
            return {
                ...state,
                suplentes: state.suplentes.filter(suplente => suplente.id !== payload.suplente.id),
                jugadores: state.jugadores.concat(payload.suplente) 
            }
        }

        default:
            return state;
    }
    
}

export default reducer;