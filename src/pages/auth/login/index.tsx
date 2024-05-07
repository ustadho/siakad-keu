// ** React Imports
import { ChangeEvent, MouseEvent, ReactNode, useState } from 'react'

// ** Next Imports
import Link from 'next/link'
import { useRouter } from 'next/router'

// ** MUI Components
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled, useTheme } from '@mui/material/styles'
import MuiCard, { CardProps } from '@mui/material/Card'
import InputAdornment from '@mui/material/InputAdornment'
import MuiFormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel'

// ** Icons Imports
import Google from 'mdi-material-ui/Google'
import Github from 'mdi-material-ui/Github'
import Twitter from 'mdi-material-ui/Twitter'
import Facebook from 'mdi-material-ui/Facebook'
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Imports
// import FooterIllustrationsV1 from 'src/components/pages/auth/FooterIllustration'

import Image from 'next/image'

import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useSnackbarStore } from 'src/store/useSnackbarStore'
import { useAuthStore } from 'src/store/useAuthStore'
import { useTokenStore } from 'src/helper/ApiClient'
import AuthService from 'src/services/auth.service'
import Head from 'next/head'

interface State {
  password: string
  showPassword: boolean
}

// ** Styled Components
const Card = styled(MuiCard)<CardProps>(({ theme }) => ({
  [theme.breakpoints.up('sm')]: { width: '28rem' }
}))

const LinkStyled = styled('a')(({ theme }) => ({
  fontSize: '0.875rem',
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

const FormControlLabel = styled(MuiFormControlLabel)<FormControlLabelProps>(({ theme }) => ({
  '& .MuiFormControlLabel-label': {
    fontSize: '0.875rem',
    color: theme.palette.text.secondary
  }
}))

const LoginPage = () => {
  // ** State
  const [showPassword, setShowPassword] = useState(false)

  // ** Hook
  const theme = useTheme()
  const router = useRouter()

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  const authService = new AuthService()

  // zustand state
  const snackBarStore = useSnackbarStore()
  const authStore = useAuthStore()
  const tokenStore = useTokenStore()

  const handleLogin = async () => {
    authService
      .login(formik.values)
      .then(data => {
        console.log(data)
        if (data.id_token) {
          snackBarStore.openSnackbar({
            status: 'success',
            message: 'Selamat, Login akun berhasil!'
          })

          authStore.setIsLogin(true)

          // authStore.setAccount(data.data.user)
          tokenStore.setAccessToken(data.id_token)

          router.replace('/')

        } else {
          snackBarStore.openSnackbar({
            status: 'error',
            message: 'Username atau Password salah!'
          })
        }
      })
      .catch(error => {
        snackBarStore.openSnackbar({
          status: 'error',
          message: 'Gagal, ' + error
        })
      })

    return true
  }

  // Form
  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Email harus diisi'),
      password: Yup.string().min(8, 'Password minimal 8 huruf').required('Password harus diisi')
    }),
    onSubmit: handleLogin
  })

  return (
    <>
      <Head>
        <title>Login - Ayo Kurban Indonesia</title>
      </Head>
      <Box className='content-center'>
        <Card sx={{ zIndex: 1 }}>
          <CardContent sx={{ padding: theme => `${theme.spacing(12, 9, 7)} !important` }}>
          <Box sx={{ mb: 6 }}>
            <Typography variant='h5' sx={{ fontWeight: 600, marginBottom: 1.5 }}>
              Selamat datang di {themeConfig.templateName}! 👋🏻
            </Typography>
            <Typography variant='body2'>Silahkan masukkan username dan password anda!</Typography>
          </Box>
            <form
              noValidate
              onSubmit={e => {
                formik.handleSubmit(e)
                e.preventDefault()
              }}
            >
              <TextField
                autoFocus
                fullWidth
                id='username'
                label='Username'
                placeholder='Ex: account@ayokurban.id'
                sx={{ marginBottom: 4 }}
                variant='standard'
                InputLabelProps={{
                  shrink: true
                }}
                error={formik.errors.username ? true : false}
                helperText={formik.errors.username}
                value={formik.values.username}
                onChange={formik.handleChange}
              />
              <TextField
                fullWidth
                sx={{ mb: 8 }}
                variant='standard'
                id='password'
                label='Password'
                placeholder='********'
                InputLabelProps={{
                  shrink: true
                }}
                type={showPassword ? 'text' : 'password'}
                error={formik.errors.password ? true : false}
                helperText={formik.errors.password}
                value={formik.values.password}
                onChange={formik.handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        edge='end'
                        onClick={() => setShowPassword(!showPassword)}
                        onMouseDown={handleMouseDownPassword}
                        aria-label='toggle password visibility'
                      >
                        {showPassword ? <EyeOutline /> : <EyeOffOutline />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
              <Button
                fullWidth
                size='large'
                variant='contained'
                sx={{ mb: 2 }}
                type='submit'
                disabled={formik.isSubmitting}
              >
                {formik.isSubmitting ? 'Please wait...' : 'Login'}
              </Button>
            </form>
          </CardContent>
        </Card>
        {/* <FooterIllustrationsV1 /> */}
      </Box>
    </>
  )
}

LoginPage.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default LoginPage
