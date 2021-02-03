const URL = "https://api.themoviedb.org/3/movie/now_playing";
const KEY = "1c51b3d9438e4ce630c6ac7a7bfcff83";

export function loadMovies() {
  return (dispatch) => {
    dispatch({ type: "LOADING" });
    fetch(`${URL}?api_key=${KEY}`)
      .then((resp) => resp.json())
      .then((result) =>
        dispatch({ type: "LOAD_MOVIES", payload: result.results })
      );
  };
}
export function ascendingOrder() {
  return (dispatch) => {
    dispatch({ type: "LOADING" });
    dispatch({ type: "ASCENDING_ORDER" });
  };
}
export function descendingOrder() {
  return (dispatch) => {
    dispatch({ type: "LOADING" });
    dispatch({ type: "DESCENDING_ORDER" });
  };
}
