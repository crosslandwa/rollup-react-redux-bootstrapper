import { countSelector } from './selectors'

const rootReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNT':
      return { ...state, count: countSelector(state) + 1}
    case 'DECREMENT_COUNT':
      return { ...state, count: countSelector(state) - 1}
  }

  return state
}

export default rootReducer
