import VisibilityIcon from '@mui/icons-material/Visibility'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

const Icon = () => {
  return (
    <div>
      <table className='mx-4'>
        <th className='bg-sky-300'>
          <VisibilityIcon />
        </th>
        <th className='bg-sky-400'>
          <EditIcon />
        </th>
        <th className='bg-red-500'>
          <DeleteIcon />
        </th>
      </table>
    </div>
  )
}

export default Icon
