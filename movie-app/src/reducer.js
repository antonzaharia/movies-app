export default function reducer(
  state = { movies: [], loading: false },
  action
) {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true };
    case "LOAD_MOVIES":
      return { ...state, loading: false, movies: action.payload };
    case "ASCENDING_ORDER":
      let ascOrder = state.movies.sort(
        (a, b) => a.vote_average - b.vote_average
      );
      return { ...state, loading: false, movies: [...ascOrder] };
    case "DESCENDING_ORDER":
      let descOrder = state.movies.sort(
        (a, b) => b.vote_average - a.vote_average
      );
      return { ...state, loading: false, movies: [...descOrder] };
    default:
      return state;
  }
}
