import {
  AppBar,
  Box,
  Fab,
  Grid,
  IconButton,
  Stack,
  Toolbar,
  Typography
} from '@mui/material'
import React from 'react'
import allIcons from './components/icons'
import IconHere from './components/IconHere'
import { Reserveit } from 'rit-icons'
import { BsGithub } from 'react-icons/bs'

function dynamicSort(property) {
  var sortOrder = 1
  if (property[0] === '-') {
    sortOrder = -1
    property = property.substr(1)
  }
  return function (a, b) {
    /* next line works with strings and numbers,
     * and you may want to customize it to your needs
     */
    var result =
      a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0
    return result * sortOrder
  }
}

const Search = () => {
  const [iconList, setIconList] = React.useState([])

  React.useEffect(() => {
    var tempList = allIcons
    tempList.sort(dynamicSort('label'))
    setIconList(tempList)
  }, [])

  React.useEffect(() => {
    console.log(iconList)
  }, [iconList])
  return (
    <>
      <AppBar sx={{ bgcolor: '#191C23' }}>
        <Toolbar disableGutters sx={{ px: 2 }}>
          <Stack direction={'row'} alignItems={'center'} spacing={1}>
            <Reserveit style={{ fontSize: '2rem' }} />
            <Typography fontSize={'1.2rem'}>Reserveit Icons</Typography>
          </Stack>
          <Stack flexGrow={1} />
          <Stack direction={'row'} alignItems={'center'} spacing={1}>
            <Fab
              color={'white'}
              size={'small'}
              variant='extended'
              component={'a'}
              href={'https://github.com/reserveitbd-org/rit-icons'}
              target={'_blank'}
            >
              Github Repo{' '}
              <BsGithub style={{ fontSize: '1.3rem', marginLeft: '10px' }} />
            </Fab>
          </Stack>
        </Toolbar>
      </AppBar>
      <Box
        // Maintain the Content Box
        minHeight={{ xs: 'calc(100vh - 60px)', sm: 'calc(100vh - 68px)' }}
        mt={{ xs: 7.5, sm: 8.5 }}
        sx={{ overflowX: 'hidden', overflowY: 'auto' }}
      >
        <Grid container spacing={2} p={1}>
          {iconList?.map((i, index) => (
            <React.Fragment key={index}>
              <IconHere i={i} />
            </React.Fragment>
          ))}
        </Grid>
      </Box>
    </>
  )
}

export default Search
