import React from 'react'

type Props = {
    value: string
}

const ValueDisplay = (props: Props) => {
    return (
        <div className='h-24 text-white text-4xl flex justify-end'>{props.value}</div>
    )
}

export default ValueDisplay