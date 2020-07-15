import React from 'react'

const InputComponent = props => {
    const cls = ['InputComponent', props.className]
    return (
        <input
            type={props.type}
            onChange={props.onChange}
            placeholder={props.placeholder}
            className={cls.join(' ')}
        />
    )
}

export default InputComponent