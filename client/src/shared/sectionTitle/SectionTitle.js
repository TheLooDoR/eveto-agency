import React from 'react'

const SectionTitle = props => {
    const cls = ['SectionTitle', props.className]
    return (
        <h2 className={cls.join(' ')}>
            {props.children}
        </h2>
    )
}

export default SectionTitle