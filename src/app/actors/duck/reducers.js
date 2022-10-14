import types from "./types"

const initialActors = {
  listName:'Best',
  list:[
    'Jessica Alba','Julia Roberts','Angelina Jolie'
  ]
}

const actorsReducer = (state =  initialActors , action) => {
  switch (action.type) {
    case types.ADD_ACTOR:
      return {
        ...state, list: [ ...state.list, action.item],
      };
    case types.RESET_ACTOR:
      return {
        ...state, list: []
      }
    default:
      return  state
  }
}
export default actorsReducer;