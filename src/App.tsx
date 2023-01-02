import { useState } from "react"
import NumberButton from "./components/NumberButton"
import OperatorButton from "./components/OperatorButton"

function App() {

  const [firstValue, setFirstValue] = useState(0)
  const [secondValue, setSecondValue] = useState(0)
  const [operation, setOperation] = useState("")

  const updateValue = (newValue: number) => {
    if (operation === "=") {
      setFirstValue(newValue)
      setOperation("")
      return
    }
    if (operation === ".") {
      setFirstValue(parseFloat(firstValue.toString() + "." + newValue.toString()))
      return
    }
    if (firstValue === 0) {
      setFirstValue(newValue)
      return
    }
    else {
      setFirstValue(parseFloat(firstValue.toString() + newValue.toString()))
      return
    }
  }

  const applyOperator = (operator: string) => {
    console.log(operator)
    if (operator === "AC") {
      setFirstValue(0)
    }
    if (operator === "+") {
      setSecondValue(firstValue)
      setFirstValue(0)
      setOperation("+")
    }
    if (operator === "-") {
      setSecondValue(firstValue)
      setFirstValue(0)
      setOperation("-")
    }
    if (operator === "*") {
      setSecondValue(firstValue)
      setFirstValue(0)
      setOperation("*")
    }
    if (operator === "/") {
      setSecondValue(firstValue)
      setFirstValue(0)
      setOperation("/")
    }
    if (operator === ".") {
      setOperation(".")
    }
    if (operator === "=") {
      if (operation === "+") {
        setFirstValue(firstValue + secondValue)
      }
      if (operation === "-") {
        setFirstValue(secondValue - firstValue)
      }
      if (operation === "*") {
        setFirstValue(firstValue * secondValue)
      }
      if (operation === "/") {
        setFirstValue(secondValue / firstValue)
      }
      setOperation("=")
    }
  }

  return (
    <div className="App">
      <p>{firstValue}</p>
      <div>
        <OperatorButton value="AC" onClick={(() => applyOperator("AC"))} buttonSize={3} />
        <OperatorButton value="/" onClick={(() => applyOperator("/"))} buttonSize={1} />
      </div>
      <div>
        <NumberButton value={7} onClick={(() => updateValue(7))} buttonSize={1} />
        <NumberButton value={8} onClick={(() => updateValue(8))} buttonSize={1} />
        <NumberButton value={9} onClick={(() => updateValue(9))} buttonSize={1} />
        <OperatorButton value="*" onClick={(() => applyOperator("*"))} buttonSize={1} />
      </div>
      <div>
        <NumberButton value={4} onClick={(() => updateValue(4))} buttonSize={1} />
        <NumberButton value={5} onClick={(() => updateValue(5))} buttonSize={1} />
        <NumberButton value={6} onClick={(() => updateValue(6))} buttonSize={1} />
        <OperatorButton value="-" onClick={(() => applyOperator("-"))} buttonSize={1} />
      </div>
      <div>
        <NumberButton value={1} onClick={(() => updateValue(1))} buttonSize={1} />
        <NumberButton value={2} onClick={(() => updateValue(2))} buttonSize={1} />
        <NumberButton value={3} onClick={(() => updateValue(3))} buttonSize={1} />
        <OperatorButton value="+" onClick={(() => applyOperator("+"))} buttonSize={1} />
      </div>
      <div>
        <NumberButton value={0} onClick={(() => updateValue(0))} buttonSize={2} />
        <OperatorButton value="." onClick={(() => applyOperator("."))} buttonSize={1} />
        <OperatorButton value="=" onClick={(() => applyOperator("="))} buttonSize={1} />
      </div>
    </div>
  )
}

export default App
