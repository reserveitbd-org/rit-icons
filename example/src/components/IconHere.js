import React from 'react'
import {
  Alert,
  AppBar,
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Fab,
  Grid,
  IconButton,
  Paper,
  Snackbar,
  Stack,
  Toolbar,
  Typography
} from '@mui/material'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { MdClose, MdUnfoldMore } from 'react-icons/md'
import Code from './Code'

const IconHere = ({ i }) => {
  const [open, setOpen] = React.useState(false)
  const [expand, setExpand] = React.useState(false)
  const handleClose = () => {
    setOpen(!open)
  }
  const handleExpand = () => {
    setExpand(!expand)
  }
  return (
    <Grid
      item
      xs={6}
      sm={4}
      md={3}
      lg={2}
      xl={1.5}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <CopyToClipboard text={i.label} onCopy={handleClose}>
        <Paper
          component={Button}
          color={'white'}
          // disableRipple
          sx={{
            position: 'relative',
            minWidth: '150px',
            width: '100%',
            aspectRatio: '1/1',
            background: '#191C23',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            '&:hover': {
              background: '#0E0F13'
            }
          }}
        >
          <IconButton
            color={'white'}
            sx={{
              position: 'absolute',
              top: 0,
              right: 0,
              transform: 'rotateZ(45deg)'
            }}
            onClick={handleExpand}
          >
            <MdUnfoldMore />
          </IconButton>
          <IconButton sx={{ fontSize: '3rem' }}>{<i.icon />}</IconButton>
          <Typography sx={{ color: '#fff', textTransform: 'none' }} noWrap>
            {i.label}
          </Typography>
        </Paper>
      </CopyToClipboard>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity='success'
          sx={{ width: '100%' }}
          icon={<i.icon />}
        >
          {i.label} copied!!
        </Alert>
      </Snackbar>
      <Dialog
        open={expand}
        onClose={handleExpand}
        scroll={'body'}
        PaperProps={{
          sx: {
            width: '100vw',
            // maxWidth: '1080px',
            mx: 'auto',
            '&.MuiDialog-paperScrollBody': {
              maxWidth: { xs: '95vw', md: '1080px' }
            }
          }
        }}
      >
        <DialogTitle>
          <Stack
            direction={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
          >
            <IconButton fontSize={'1.5rem'} disableRipple>
              {<i.icon />}
            </IconButton>
            <Typography noWrap flexGrow={1}>
              {i.label}
            </Typography>
            <IconButton size={'small'} onClick={handleExpand}>
              <MdClose />
            </IconButton>
          </Stack>
        </DialogTitle>
        <Divider />
        <DialogContent>
          <Typography>Import the icon:</Typography>
          <Code>{`import { ${i.label} } from "rit-icons";`}</Code>
          <Typography>Use as a Component:</Typography>
          <Code>{`<${i.label} />`}</Code>
          <Typography>Preview:</Typography>
          <Stack
            mt={2}
            direction={'row'}
            alignItems={'center'}
            justifyContent={'space-evenly'}
            spacing={3}
          >
            <Paper sx={{ flexGrow: 1 }}>
              <Button sx={{ fontSize: '8rem', p: 2, py: 4 }} fullWidth>
                {<i.icon />}
              </Button>
            </Paper>
            <Paper sx={{ flexGrow: 1, bgcolor: '#191C23' }}>
              <Button sx={{ fontSize: '8rem', p: 2, py: 4 }} fullWidth>
                {<i.icon />}
              </Button>
            </Paper>
          </Stack>
          <Stack
            mt={3}
            direction={'row'}
            alignItems={'center'}
            justifyContent={'space-evenly'}
            spacing={3}
          >
            <Paper sx={{ flexGrow: 1 }} elevation={0}>
              <Typography textAlign={'center'}>Light Mode</Typography>
            </Paper>
            <Paper sx={{ flexGrow: 1 }} elevation={0}>
              <Typography textAlign={'center'}>Dark Mode</Typography>
            </Paper>
          </Stack>
        </DialogContent>
      </Dialog>
    </Grid>
  )
}

export default IconHere
