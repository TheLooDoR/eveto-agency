import React from 'react'

const MainButton = props => {

    let clsBtn = ['MainButton', props.btnClass]
    let clstxt = ['MainButton__text', props.txtClass]


    return (
        <button
            onClick={props.onClick}
            className={clsBtn.join(' ')}
        >
            <span className={clstxt.join(' ')}>{props.children}</span>
        </button>
    )
}

export default MainButton