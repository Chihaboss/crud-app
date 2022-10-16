import React from 'react'

export const Form = (props) => {
  return (
    <div>
        <form onSubmit={props.addCourse}>
            <input type="text" onChange={props.updateCourse} placeholder="Enter course" value={props.current}></input>
            <button type='submit'>Add</button>
        </form>
    </div>
  )
}
