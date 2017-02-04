import * as actions from './index';

describe('actions', () => {
  it('should create an action to create a todo', () => {
    const text = "i'm grumpy at everyone"
    const expectedAction = {
      type: 'ADD_TODO',
      id: 0,
      text
    }
    expect(actions.addTodo(text)).toEqual(expectedAction)
  })

  it('should create an action to toggle a todo', () => {
    const id = 0
    const expectedAction = {
      type: 'TOGGLE_TODO',
      id: 0
    }
    expect(actions.toggleTodo(id)).toEqual(expectedAction)
  })

  it('should create an action to toggle a todo', () => {
    const filter = 'ALL'
    const expectedAction = {
      type: 'SET_FILTER',
      filter: 'ALL'
    }
    expect(actions.setFilter(filter)).toEqual(expectedAction)
  })
})
