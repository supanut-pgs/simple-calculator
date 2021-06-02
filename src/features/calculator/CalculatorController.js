import React, { useContext, useState } from 'react'

export const CalculatorContext = React.createContext()

export const useCalculatorContext = () => useContext(CalculatorContext)

export const CalculatorController = ({ children }) => {
    const [result, setResult] = useState(0)
    const [carryResult, setCarryResult] = useState();
    const [currentOperator, setCurrentOperator] = useState("")

    const handleCarry = (opt) => {
        setCarryResult(result)
        setCurrentOperator(opt)
        setResult(0)
    }
    const handleResult = () => {
        if (!carryResult) return
        let cal = 0
        switch (currentOperator) {
            case "+":
                cal = +carryResult + +result
                break;
            case "-":
                cal = +carryResult - +result
                break;
            case "×":
                cal = +carryResult * +result
                break;
            case "÷":
                cal = +carryResult / +result
                break;
            default:
                break;
        }
        setCurrentOperator()
        setCarryResult()
        setResult(cal)
    }
    const onClickNumPad = (value) => {
        switch (value) {
            case "AC":
                setResult(0)
                setCarryResult()
                break;
            case "C":
                setResult(0)
                break;
            case "-/+":
                setResult(result * -1)
                break;
            case "÷":

                if (!currentOperator) {
                    handleCarry(value)
                    break;
                }
                handleResult()
                break;
            case "×":
                if (!currentOperator) {
                    handleCarry(value)
                    break;
                }
                handleResult()
                break;
            case "-":
                if (!currentOperator) {
                    handleCarry(value)
                    break;
                }
                handleResult()
                break;
            case "+":
                if (!currentOperator) {
                    handleCarry(value)
                    break;
                }
                handleResult()
                break;
            case "=":
                handleResult()
                break;
            case ".":
                if (result.toString().includes(".")) break;
                setResult(
                    result
                        .toString()
                        .startsWith(0) ?
                        "0." : result + value
                )
                break;
            default:

                setResult(
                    result.toString().startsWith("0") &&
                        !result.toString().startsWith("0.") ?
                        value : result + value
                )
                break;
        }
    }

    return (
        <CalculatorContext.Provider value={{
            onClickNumPad,
            result,
            carryResult
        }}>
            {children}
        </CalculatorContext.Provider>
    )
}