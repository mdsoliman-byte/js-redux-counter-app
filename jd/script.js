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
            counter: state.counter + action.payload
        }

    } else if (action.type === "DECREMENT") {
        if (state.counter <= 0) {
            return {
                ...state,
                counter: 0
            }
        } else {
            return {
                ...state,
                counter: state.counter - action.payload
            }
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
const increments = (count) => {
    return {
        type: INCREMENT,
        payload: count
    }

}
const decrements = (count) => {
    return {
        type: DECREMENT,
        payload: count

    }
}
Increment.addEventListener("click", () => {
    store.dispatch(increments(2))
})
// decrement Button

decrement.addEventListener("click", () => {
    store.dispatch(decrements(5))
})
