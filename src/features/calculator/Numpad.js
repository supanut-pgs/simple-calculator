import { Button, Grid } from '@material-ui/core'
import React from 'react'
import { useCalculatorContext } from './CalculatorController'

const numpadItem = [
    {
        label: "AC", size: 3, background: '#bf1a1a'
    },
    {
        label: "C", size: 3
    },
    {
        label: "-/+", size: 3
    },
    {
        label: "÷", size: 3, color: 'orange'
    },
    {
        label: "7", size: 3
    },
    {
        label: "8", size: 3
    },
    {
        label: "9", size: 3
    },
    {
        label: "×", size: 3, color: 'orange'
    },
    {
        label: "4", size: 3
    },
    {
        label: "5", size: 3
    },
    {
        label: "6", size: 3
    },
    {
        label: "-", size: 3, color: 'orange'
    },
    {
        label: "1", size: 3
    },
    {
        label: "2", size: 3
    },
    {
        label: "3", size: 3
    },
    {
        label: "+", size: 3, color: 'orange'
    },
    {
        label: "0", size: 3
    },
    {
        label: ".", size: 3
    },
    {
        label: "=", size: 6, background: 'green'
    },
]

export default function NumPad() {

    const { onClickNumPad } = useCalculatorContext()
    return (
        <div>
            <Grid style={{ background: 'green' }} container>
                {
                    numpadItem.map((item, key) => {
                        return (
                            <Grid
                                item
                                key={key}
                                xs={item.size}
                                container>
                                <Button
                                    style={{
                                        height: 60,
                                        fontSize: 20,
                                        background: item.background ?? "#333333",
                                        borderRadius: 0,
                                        color: item.color ?? 'white'
                                    }}
                                    onClick={() => onClickNumPad(item.label)}
                                    fullWidth
                                >
                                    {item.label}
                                </Button>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </div>
    )
}