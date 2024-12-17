import React from 'react'

const Language = (props) => {

    const style = {
        backgroundColor: props.backgroundColor,
        color: props.color,
        borderRadius: "5px",
        padding: "7px"
    }
  return (
    <div>
        <button style={style}>
            {props.name}
        </button>
    </div>
  )
}

export default Language
