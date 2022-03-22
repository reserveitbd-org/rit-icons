import { Stack, Button, Snackbar, Alert } from '@mui/material'
import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const Code = ({ children, ...others }) => {
  const [open, setOpen] = React.useState(false)
  const [btnText, setBtnText] = React.useState('COPY')
  const handleClose = () => {
    setOpen(!open)
    setBtnText('COPIED!!')
  }
  return (
    <Stack
      sx={{
        background: '#00000011',
        p: 2,
        // py: 2,
        my: 2
      }}
      direction={'row'}
      alignItems={'flex-start'}
      justifyContent={'space-between'}
      {...others}
    >
      <code style={{ flexGrow: 1 }}>
        <pre style={{ margin: 0 }}>{children}</pre>
      </code>
      <CopyToClipboard text={children} onCopy={handleClose}>
        <Button variant={'contained'} size={'small'}>
          {btnText}
        </Button>
      </CopyToClipboard>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity='success' sx={{ width: '100%' }}>
          code copied!!
        </Alert>
      </Snackbar>
    </Stack>
  )
}

export default Code
