import axios from "axios";

export const GET_SMURF_LOADING = "GET_SMURF_LOADING";
export const GET_SMURF_SUCCESS = "GET_SMURF_SUCCESS";
export const GET_SMURF_FAILURE = "GET_SMURF_FAILURE";

export const POST_SMURF_SUCCESS = "POST_SMURF_SUCCESS";
export const POST_SMURF_FAILURE = "POST_SMURF_FAILURE";
export const POST_SMURF_STARTED = "POST_SMURF_STARTED";

//Get Smurf Actions
export const smurfLoading = () => ({
  type: GET_SMURF_LOADING
});
export const smurfSuccess = data => ({
  type: GET_SMURF_SUCCESS,
  payload: data
});

export const smurfFailure = error => ({
  type: GET_SMURF_FAILURE,
  payload: error
});

export const getSmurf = () => {
  return function(dispatch) {
    dispatch(smurfLoading());

    return axios
      .get("http://localhost:3333/smurfs")
      .then(response => dispatch(smurfSuccess(response.data)))
      .catch(error => dispatch(smurfFailure(error)));
  };
};
// end GetSmurfs

//Post Smurf Actions
export const postSmurfStarted = (smurf) => ({
  type: POST_SMURF_STARTED,
  payload: smurf
});

export const postSmurfSuccess = smurf => ({
  type: POST_SMURF_SUCCESS,
  payload: {
    ...smurf
  }
});

export const postSmurfFailure = error => ({
  type: POST_SMURF_FAILURE,
  payload: {
    error
  }
});

export const postSmurf = (name, age, height) => {
  console.log("POSTSMURF")
  return dispatch => {
    dispatch(postSmurfStarted());

    axios
      .post("http://localhost:3333/smurfs", {
        name,
        age,
        height
      })
      .then(response => {
        dispatch(postSmurfSuccess(response.data));
      })
      .catch(error => {
        dispatch(postSmurfFailure(error.response));
      });
  };
};
//End PostSmurfs
