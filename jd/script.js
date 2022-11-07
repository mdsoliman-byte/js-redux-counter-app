// Get UI  data 
const counter = document.getElementById("counter");
const Increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
// Action Creator 


// Action Identifier
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";


// Initialize State 
const InitialState = {
    counter: 0,
}

function createReducer(state = InitialState, action) {
    if (action.type === "INCREMENT") {
        return {
            ...state,
            counter: state.counter + action.payload.count
        }

    } else if (action.type === "DECREMENT") {
        return {
            ...state,
            counter: state.counter - action.payload.count
        }
    } else {
        return state;
    }
}


// Create Store
const store = Redux.createStore(createReducer);
const ui = () => {
    const state = store.getState();
    counter.innerText = state.counter
}
store.subscribe(ui)
// Increment Button
// Ui Update 
ui()
const increments = () => {
    return {
        type: INCREMENT,
        payload: {
            count: 5
        }
    }

}
const decrements = () => {
    return {
        type: DECREMENT,
        payload: {
            count: 5
        }

    }
}
Increment.addEventListener("click", () => {
    store.dispatch(increments())
})
// decrement Button

decrement.addEventListener("click", () => {
    store.dispatch(decrements())
})
