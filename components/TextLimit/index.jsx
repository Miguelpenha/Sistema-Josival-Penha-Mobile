import React from 'react'

export default function TextLimit({ children, component: Component, limit }) {
    let novo = ''

    for (let letra in children) {
        if (letra >= limit) {
            if (!novo.includes('...')) {
                novo += '...'
            }
        } else {
            novo += children[letra]
        }
    }

    return <Component>{novo}</Component>
}