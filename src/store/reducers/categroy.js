function categroy_list(state = [], action) {
  switch (action.type) {
    case 'REVELVE_CATEGROIES':
      return action.data
    default:
      return state
  }

}

export default {
  categroy
}