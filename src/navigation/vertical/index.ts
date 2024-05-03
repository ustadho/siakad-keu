// ** Icon imports
import Login from 'mdi-material-ui/Login'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/'
    },
    {
      sectionTitle: 'Pengaturan'
    },
    {
      title: 'Tahun Ajaran',
      icon: Login,
      path: '/pengaturan/tahun-ajaran',
      openInNewTab: false
    },
    {
      title: 'Kelas',
      icon: AccountPlusOutline,
      path: '/pengaturan/kelas',
      openInNewTab: false
    },
    {
      title: 'Level',
      icon: AlertCircleOutline,
      path: '/pengaturan/level',
      openInNewTab: false
    },
  ]
}

export default navigation
