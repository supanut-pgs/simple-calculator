import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import { useCalculatorContext } from './CalculatorController'

export default function Display() {
    const { result, carryResult } = useCalculatorContext()
    return (
        <div>
            <Grid
                style={{ background: '#3c3c3c', padding: 10, height: 120, color: 'white' }}
                direction="column"
                justify="flex-end"
                alignItems="flex-end"
                container>
                <Typography variant="h4">{carryResult}</Typography>
                <Typography variant="h3">{result}</Typography>
            </Grid>
        </div>
    )
}