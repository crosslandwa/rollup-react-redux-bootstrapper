import { incrementCount, decrementCount } from '../actions'
import { countSelector } from '../selectors'
import createStore from '../store'

describe('Count', () => {
  const store = createStore()

  it('can be incremented and decremented by one', () => {
    const currentCount = () => countSelector(store.getState())
    const initial = currentCount()

    store.dispatch(incrementCount())
    expect(currentCount()).toEqual(initial + 1)

    store.dispatch(decrementCount())
    expect(currentCount()).toContain(initial)
  })
})
