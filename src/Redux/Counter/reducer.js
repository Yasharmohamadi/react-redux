import { counterDecrement, counterIncrement, counterReset } from "./actionType" 

export const reducer = (state = 0, action) => {
    switch(action.type) {
        case counterIncrement: {
            return state + 1
        }
        case counterReset: {
            return 0
        }
        case counterDecrement: {
            return state - 1
        }
        default : {
            return state
        }
    }

}