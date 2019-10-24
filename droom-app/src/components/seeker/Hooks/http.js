import { useReducer, useCallback } from "react";

const httpReducer = (httpState, action) => {
  switch (action.type) {
    case "SEND":
      return { loading: true, error: null, data: null };
    case "RESPONSE":
      return { ...httpState, loading: false, data: action.responseData };
    case "ERROR":
      return { loading: false, error: action.ErrorMessage };
    case "CLEAR":
      return { ...httpState, error: null };
    default:
      throw new Error("Handle all actions!");
  } //switch
}; //httpReducer

const useHttp = () => {
  const [httpState, dispatchHttp] = useReducer(httpReducer, {
    loading: false,
    error: null,
    data: null,
    userData: null
    // seekerID: null
  });

  const sendRequest = useCallback((url, { type }) => {
    dispatchHttp({ type: "SEND" });
    fetch(url, {
      method: type,
      header: {
        "Content-type": "application/json",
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTU3MTcxMjA5NCwiZXhwIjoxNTcxNzk4NDk0fQ.XquXtHP9Sqo775a958Bq-ubr917Fazx7pSUor4TchpM"
      },
      body: JSON.stringify()
    })
      .then(response => {
        return response.json();
      })
      .then(responseData => {
        dispatchHttp({ type: "RESPONSE", responseData: responseData });
        console.log(responseData);
      })
      .catch(err => {
        dispatchHttp({ type: "ERROR", errorMessage: "Handle all Actions!" });
        console.log(err);
      }); //fetch
  }, []); //function useCallback is returning

  return {
    isLoading: httpState.loading,
    data: httpState.data,
    error: httpState.error,
    sendRequest: sendRequest
    // seekerID: httpState.data.id
  }; //return statement
}; //useHttp

export default useHttp;
