import React from 'react'

const SubQuestions = props => {
  let subcategories = props.subcategories
  let onChange = props.onChange
  return (
    <div>
      {subcategories.map(current => {
        return (
          <div key={current.name}>
            <label htmlFor={current.name}>{current.name}</label>
            <input
              name={current.name}
              type="number"
              value={current.monthly}
              onChange={onChange}
            />
          </div>
        )
      })}
    </div>
  )
}

export default SubQuestions
