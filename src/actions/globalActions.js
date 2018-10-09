export const setSelectedMenu = (payload) => {
  return {
    type: 'SET_SELECTED_MENU',
    selectedFromListMenu: payload
  }
}
export const setInputNameValue = (payload) => {
  return {
    type: 'SET_INPUT_VALUE',
    inputNameValue: payload
  }
}
export const setPostData = (payload) => {
  return {
    type: 'SET_POST_DATA',
    postData: payload
  }
}

