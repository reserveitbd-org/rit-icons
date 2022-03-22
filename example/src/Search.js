import {
  AppBar,
  Box,
  Fab,
  Grid,
  InputBase,
  Stack,
  Toolbar,
  Typography
} from '@mui/material'
import React from 'react'
import allIcons from './components/icons'
import IconHere from './components/IconHere'
import { Reserveit } from 'rit-icons'
import { BsGithub } from 'react-icons/bs'
import { FaNpm } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'
import Code from './components/Code'

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
  const [searchText, setSearchText] = React.useState('')

  React.useEffect(() => {
    if (searchText !== '') {
      var newArray = allIcons.filter(function (el) {
        return el.label.toLowerCase().includes(searchText.toLowerCase())
      })
      newArray.sort(dynamicSort('label'))
      setIconList(newArray)
    } else {
      var tempList = allIcons
      tempList.sort(dynamicSort('label'))
      setIconList(tempList)
    }
  }, [searchText])

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
              // color={'white'}
              size={'small'}
              // variant='extended'
              component={'a'}
              href={'https://www.npmjs.com/package/rit-icons'}
              target={'_blank'}
            >
              <FaNpm style={{ fontSize: '1.3rem', color: 'red' }} />
            </Fab>
            <Fab
              // color={'white'}
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
        <Box sx={{ p: 2, color: '#fff', py: 5 }}>
          <Typography>Install Library from NPM:</Typography>
          <Code>{`npm install rit-icons`}</Code>
          <Typography>Usage:</Typography>
          <Code>{`import React from 'react'
import { Signout } from 'rit-icons'

const App = () => {
  return (
    <>
      <div style={{ fontSize: '2rem' }}>
        <Signout />
      </div>
    </>
  )
}

export default App;`}</Code>
          <Stack
            direction='column'
            alignItems={'center'}
            maxWidth={'600px'}
            width={'95vw'}
            mx={'auto'}
            mt={5}
          >
            <InputBase
              sx={{
                bgcolor: '#00000011',
                // border: '1px solid #000',
                borderRadius: '100px',
                color: '#fff',
                p: 1,
                px: 2
              }}
              placeholder={'Search Icon'}
              startAdornment={
                <FiSearch style={{ fontSize: '1.5rem', marginRight: 10 }} />
              }
              onChange={(event) => {
                setSearchText(event.target.value)
              }}
              fullWidth
            />
            {/* {searchText && (
              <Typography variant='h4' sx={{ py: 5, pb: 2 }}>
                Results for: {searchText}
              </Typography>
            )} */}
          </Stack>
        </Box>
        <Grid container spacing={2} p={1}>
          {iconList.length ? (
            iconList?.map((i, index) => (
              <React.Fragment key={index}>
                <IconHere i={i} />
              </React.Fragment>
            ))
          ) : (
            <Typography
              variant={'h4'}
              sx={{ color: '#fff', mx: 'auto', width: 'fit-content', my: 10 }}
            >
              No Icon Found
            </Typography>
          )}
        </Grid>
        <Typography
          sx={{ color: '#fff', mx: 'auto', width: 'fit-content', mt: 4 }}
          variant={'h6'}
        >
          Author:{' '}
          <Typography
            sx={{ color: 'unset' }}
            component={'a'}
            href={'https://github.com/tam11a'}
            variant={'h6'}
          >
            tam11a
          </Typography>
        </Typography>
        <Typography
          sx={{ color: '#fff', mx: 'auto', width: 'fit-content' }}
          variant={'h6'}
        >
          Icon Design:{' '}
          <Typography
            sx={{ color: 'unset' }}
            component={'a'}
            href={'https://www.behance.net/abdussatter833'}
            variant={'h6'}
          >
            Abdus Satter
          </Typography>
        </Typography>
        <Typography
          sx={{ color: '#fff', mx: 'auto', width: 'fit-content', mb: 5 }}
          variant={'h6'}
        >
          Owned:{' '}
          <Typography
            sx={{ color: 'unset' }}
            component={'a'}
            href={'https://www.reserveitbd.com'}
            variant={'h6'}
          >
            Reserveitbd
          </Typography>
        </Typography>
      </Box>
    </>
  )
}

export default Search
