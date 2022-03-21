import { Stack, Button, Snackbar, Alert } from '@mui/material'
import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const Code = ({ children, ...others }) => {
  const [open, setOpen] = React.useState(false)
  const handleClose = () => {
    setOpen(!open)
  }
  return (
    <Stack
      sx={{
        background: '#00000011',
        px: 2,
        py: 2,
        my: 2
      }}
      direction={'row'}
      alignItems={'center'}
      justifyContent={'space-between'}
      {...others}
    >
      <code style={{ flexGrow: 1 }}>{children}</code>
      <CopyToClipboard text={children} onCopy={handleClose}>
        <Button variant={'contained'} size={'small'}>
          COPY
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
