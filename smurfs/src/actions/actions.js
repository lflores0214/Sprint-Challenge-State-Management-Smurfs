import axios from "axios";

export const GET_SMURF_LOADING = "GET_SMURF_LOADING";
export const GET_SMURF_SUCCESS = "GET_SMURF_SUCCESS";
export const GET_SMURF_FAILURE = "GET_SMURF_FAILURE";
export const POST_SMURF = "POST_SMURF";

export const smurfLoading = () => ({
  type: GET_SMURF_LOADING
});
export const smurfSuccess = data => ({
  type: GET_SMURF_SUCCESS,
  payload: data
});

export const smurFailure = error => ({
  type: GET_SMURF_FAILURE,
  payload: error
});

export const postSmurf = ()=>({
    
})
export const getSmurf = () => {
  return function(dispatch) {
    dispatch(smurfLoading());

    return axios
      .get("http://localhost:3333/smurfs")
      .then(response => dispatch(smurfSuccess(response.data)))
      .catch(error => dispatch(smurFailure(error)));
  };
};
