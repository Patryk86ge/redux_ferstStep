import types from "./types"

const add = item => ({
  type:types.ADD_MOVE,item});

const reset = item => ({
  type:types.RESET_MOVE,item
});

export default {
  add,
  reset
}