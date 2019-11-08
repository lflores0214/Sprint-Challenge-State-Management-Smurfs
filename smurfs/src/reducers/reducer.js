import {
  GET_SMURF_LOADING,
  GET_SMURF_SUCCESS,
  GET_SMURF_FAILURE,
  POST_SMURF_STARTED,
  POST_SMURF_SUCCESS,
  POST_SMURF_FAILURE
} from "../actions/actions";

const initialState = {
  smurfs: [],
  error: null,
  isLoading: false
};

function reducer(state = initialState, action) {
  console.log("reducer", action);
  switch (action.type) {
    case GET_SMURF_LOADING:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case GET_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isLoading: false,
        error: null
      };
    case GET_SMURF_FAILURE:
      return {
        ...state,
        smurfs: [],
        isLoading: false,
        error: action.payload
      };
    case POST_SMURF_STARTED:
      return {
        ...state,
        isLoading: true,
        smurfs: [...state.smurfs, {
            name: action.payload,
            age: action.payload,
            height: action.payload,
            id: Date.now()
        }]
      };
    case POST_SMURF_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        
      };
    case POST_SMURF_FAILURE:
      return {
        ...state,
        laoding: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}

export default reducer;
