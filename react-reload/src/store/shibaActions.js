import { shibaConstants } from './shibaActionTypes';

export const shibaActions = {
    fetchShibes,
    addOne,
    subOne
}

function fetchShibes(num) {
    return dispatch => {
        dispatch(shibesRequested())
        let url = `https://dog.ceo/api/breed/shiba/images/random/${num}`;
        fetch(url)
        .then(response => response.json())
        .then(
            response => {
                dispatch(success(response.message))
            },
            error => {
                dispatch(failure(error))
            }
        )
    }

    function shibesRequested() { return { type: shibaConstants.SHIBES_REQUESTED } }
    function success(result) { return { type: shibaConstants.SHIBES_FETCHED, payload: result } }
    function failure(error) { return { type: shibaConstants.SHIBE_FETCH_FAIL, payload: error } }
  }

  function addOne(num) {
      return dispatch => {
        let number = num + 1;
        dispatch(add(number))
      }

      function add(number)  { return { type: shibaConstants.ADD_ONE, payload: number } }
  }

  function subOne(num) {
      return dispatch => {
          let number = num - 1;
          dispatch(sub(number))
        }

        function sub(number) { return { type: shibaConstants.SUB_ONE, payload: number } }
      
  }