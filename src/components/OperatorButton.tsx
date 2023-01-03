import React from 'react'

type Props = {
    value: string,
    onClick: () => void,
    buttonSize: number
}

const RenderButton = (buttonSize: number, value: string, onClick: () => void): JSX.Element => {
    if (buttonSize === 3) {
        return <button className='col-span-3 rounded-full bg-gray-300 h-20' onClick={() => onClick()}>{value}</button>
    }
    if (buttonSize === 2) {
        return <button className='col-span-2 rounded-full bg-gray-300 h-20' onClick={() => onClick()}>{value}</button>
    }
    return <button className='col-span-1 rounded-full bg-gray-300 h-20' onClick={() => onClick()}>{value}</button>
}

const OperatorButton = (props: Props) => {
    return (
        RenderButton(props.buttonSize, props.value, props.onClick)
    )
}

export default OperatorButton