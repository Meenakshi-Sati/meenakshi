function APIReducer(action,state){
switch(action.type){
    case "LOADING":
        return {
            ...state,
            loading: true,
          };
          case "DATA":
            return {
                ...state,
                loading: false,
                data:action.payload
              };
              default:
                return state
}
}
export default APIReducer