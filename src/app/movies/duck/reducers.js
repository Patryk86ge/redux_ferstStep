import types from './types'
const initialMoves = {
  listName:'Faforyte',
  list: [
    'rambo II','bambo','kucyki pony'
  ]
};

function moviesReducer(state =  initialMoves , action) {
  switch (action.type) {
    case types.ADD_MOVE:
      return {
        ...state, list: [ ...state.list, action.item],
      };
    case types.RESET_MOVE:
      return {
        ...state, list: []
      }
    default:
      return  state
  }
}
export default moviesReducer;