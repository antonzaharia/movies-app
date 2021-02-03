export default function reducer(state = { movies: [] }, action) {
  switch (action.type) {
    case "LOAD_MOVIES":
      return { ...state, movies: action.payload };
    case "ASCENDING_ORDER":
      let ascOrder = state.movies.sort(
        (a, b) => a.vote_average - b.vote_average
      );
      return { ...state, movies: [...ascOrder] };
    case "DESCENDING_ORDER":
      let descOrder = state.movies.sort(
        (a, b) => b.vote_average - a.vote_average
      );
      return { ...state, movies: [...descOrder] };
    default:
      return state;
  }
}
