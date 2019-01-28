const initialState = {
    currentValue: 0
}

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

export const incrementNum = (num) => {
    return {
        type: INCREMENT,
        payload: num
    }
}

export const decrementNum = (num) => {
    return {
        type: DECREMENT,
        payload: num
    }
}

export default function counter(state = initialState, action){
    switch(action.type){
        case INCREMENT:
        return {
            currentValue: state.currentValue+action.payload
        }
        case DECREMENT:
        return {
            currentValue: state.currentValue-action.payload
        }
        default:
        return state
    }
}   