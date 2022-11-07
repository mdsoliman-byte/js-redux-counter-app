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
            counter: state.counter + action.payload
        }

    } else if (action.type === "DECREMENT") {
        return {
            ...state,
            counter: state.counter - action.payload
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
Increment.addEventListener("click", () => {
    store.dispatch({
        type: "INCREMENT",
        payload: 10

    })
})
// decrement Button

decrement.addEventListener("click", () => {
    store.dispatch({
        type: "DECREMENT",
        payload: 5

    })
})