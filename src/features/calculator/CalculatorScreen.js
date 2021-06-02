import React from 'react'
import { withController } from '../../hoc/withController'
import { CalculatorController } from './CalculatorController'
import Display from './Display'
import NumPad from './Numpad'

const CalculatorScreen = () => {


    return (
        <center>
            <div style={{ width: 350 }}>
                <Display />
                <NumPad />
            </div>
        </center>

    )
}

export default withController(CalculatorController)(CalculatorScreen)
