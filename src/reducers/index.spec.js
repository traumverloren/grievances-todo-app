import todos from './todos';
import filter from './filter'

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(
      todos(undefined, {})
    ).toEqual([])
  })

  it('should handle ADD_TODO', () => {
    expect(
      todos(undefined, {
        type: 'ADD_TODO',
        id: 0,
        text: 'blah blah'
      })
    ).toEqual(
      [
        {
          id: 0,
          text: 'blah blah',
          completed: false
        }
      ]
    )
  })

  it('should handle TOGGLE_TODO', () => {
    expect(
      todos([{
          id: 0,
          text: 'blah blah',
          completed: false
        }],
          {
            type: 'TOGGLE_TODO',
            id: 0
          })
        ).toEqual(
          [
            {
              id: 0,
              text: 'blah blah',
              completed: true
            }
          ]
        )
  })
})
