import React from 'react'

type Props = {
    value: number,
    onClick: () => void
    buttonSize: number
}

const RenderButton = (buttonSize: number, value: number, onClick: () => void): JSX.Element => {
    if (buttonSize === 3) {
        return <button className='col-span-3 bg-gray-300 rounded-full h-20' onClick={() => onClick()}>{value}</button>
    }
    if (buttonSize === 2) {
        return <button className='col-span-2 bg-gray-300 rounded-full h-20' onClick={() => onClick()}>{value}</button>
    }
    return <button className='col-span-1 bg-gray-300 rounded-full h-20' onClick={() => onClick()}>{value}</button>
}

const NumberButton = (props: Props) => {
    return (
        RenderButton(props.buttonSize, props.value, props.onClick)
    )
}

export default NumberButton