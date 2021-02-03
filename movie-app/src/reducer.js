export default function reducer(state = { movies: [] }, action) {
  switch (action.type) {
    case "LOAD_MOVIES":
      return { ...state, movies: action.payload };
    default:
      return state;
  }
}
