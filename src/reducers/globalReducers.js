const initialState = {
  selectedFromListMenu: 'home'
}
export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SELECTED_MENU': 
      return {
        ...state,
        selectedFromListMenu: action.selectedFromListMenu
      }
    case 'SET_INPUT_VALUE': 
      return {
        ...state,
        inputNameValue: action.inputNameValue
      }
    case 'SET_POST_DATA':
      return {
        ...state,
        postData: action.postData
      }
    default:
      return state
  }
}