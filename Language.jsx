import React from 'react'

const Language = (props) => {

    const style = {
        backgroundColor: props.backgroundColor,
        color: props.color,
        borderRadius: "4px",
        padding: "4px 8px"
    }
  return (
    <div>
        <span style={style}>
            {props.name}
        </span>
    </div>
  )
}

export default Language
