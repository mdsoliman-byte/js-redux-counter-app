// Get UI  data 
const counter = document.getElementById("counter");
const Increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");


// Initialize State 
const InitialState = {
    counter: 0,
}

function createReducer(state = InitialState, action) {
    if (action.type === "INCREMENT") {
        return {
            ...state,
            counter: state.counter + 1
        }

    } else if (action.type === "DECREMENT") {
        return {
            ...state,
            counter: state.counter - 1
        }
    } else {
        return state;
    }
}


// Create Store

const store = createStore(createReducer,);

// Increment
Increment.addEventListener("click", () => {
    store.dispatch({
        type: "INCREMENT"

    })
    
}
)
