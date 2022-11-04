import axios from "axios";
import React, { useEffect, useReducer } from "react";

const initialState = {
  loading: true,
  post: {},
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading : false,
        error : "",
        post : action.payload
      }
      case "FETCH_FAIL":
        return {
            loading :false,
            post:{},
            error : "Something went wrong"
        }

    default:
      return state;
  }
};
function DataFetching2() {
const [state, dispatch] = useReducer(reducer, initialState)

useEffect(() => {
  axios
    .get("https://jsonplaceholder.typicode.com/posts/2")
    .then((response) => {
       dispatch({type : "FETCH_SUCCESS", payload : response.data})
    })
    .catch((error) => {
      dispatch({type : "FETCH_FAIL"})
    });
}, []);

  return (
    <div>
      {state.loading ? "Loading" :state.post.title}
      {state.error ? state.error : null}
    </div>
  );
}

export default DataFetching2;
