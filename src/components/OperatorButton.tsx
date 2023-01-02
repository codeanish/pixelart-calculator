import React from 'react'

type Props = {
    value: string,
    onClick: () => void,
    buttonSize: number
}

const RenderButton = (buttonSize: number, value: string, onClick: () => void): JSX.Element => {
    if (buttonSize === 3) {
        return <button className='w-96 h-32 bg-gray-300 rounded-full' onClick={() => onClick()}>{value}</button>
    }
    if (buttonSize === 2) {
        return <button className='w-64 h-32 bg-gray-300 rounded-full' onClick={() => onClick()}>{value}</button>
    }
    return <button className='w-32 h-32 bg-gray-300 rounded-full' onClick={() => onClick()}>{value}</button>
}

const OperatorButton = (props: Props) => {
    return (
        RenderButton(props.buttonSize, props.value, props.onClick)
    )
}

export default OperatorButton