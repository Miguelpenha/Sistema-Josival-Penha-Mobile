import React from 'react'

export default function TextLimit({ children, component: Component, limit }) {
    let text = React.Children.toArray(children)[0]

    if (typeof text === 'string') {
        if (text.length > limit) {
            return <Component>{text.substring(0, limit).concat('...')}</Component>  
        } else {
            return <Component>{text}</Component>  
        }
    } else {
        return null
    }
}