import * as React from 'react'
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send'
import Stack from '@mui/material/Stack'


interface IconLabelButtonsProps {
    handleClick?: () => void
}

export const IconLabelButtons = ({  handleClick }: IconLabelButtonsProps) => {
    return (
        <Stack direction="row" spacing={2}>
            <Button variant="contained" endIcon={<SendIcon />} onClick={handleClick}>
                Send
            </Button>
        </Stack>
    )
}
