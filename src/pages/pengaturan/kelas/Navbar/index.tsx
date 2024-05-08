import MenuIcon from '@mui/icons-material/Menu'
import styles from './Navbar.module.css'
const Navbar = () => {
  return (
    <>
      <div className={styles.navbar}>
        <MenuIcon />
        <div className='px-2'>Kelas</div>
      </div>
    </>
  )
}

export default Navbar
