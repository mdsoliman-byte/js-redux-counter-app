const myAction = [
    { type: "increment", payload: 1 },
    { type: "increment", payload: 1 },
    { type: "increment", payload: 1 },
    { type: "increment", payload: 1 },
    { type: "increment", payload: 1 },
    { type: "increment", payload: 1 },
    { type: "increment", payload: 1 },
    { type: "increment", payload: 1 },
    { type: "decrement", payload: 5 }
    ,
]

const counterReducer = (state, myAction) => {
    if (myAction.type === "increment") {
        return {
            ...state,
            counter: state.counter + myAction.payload
        }
    } else if (myAction.type === "decrement") {
        return {
            ...state,
            counter: state.counter - myAction.payload
        }
    } else {
        return state
    }
}

const InitialValue = {
    counter: 0
}
const data = myAction.reduce(counterReducer, InitialValue)


console.log(data)