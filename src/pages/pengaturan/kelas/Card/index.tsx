import KelasService from 'src/services/kelas.service'
import Icon from './icon'
import { useEffect, useState } from 'react'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

const Card = () => {
  const kelasService = new KelasService()

  const [dataContent, setDataContent] = useState()

  useEffect(() => {
    kelasService
      .filter({
        year: '',
        q: '',
        sort: 'name,asc'
      })
      .then(res => {
        console.log(res)
        setDataContent(res.content)
      })
  }, [])

  return (
    <>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>Kode</TableCell>
                <TableCell>Nama Kelas</TableCell>
                <TableCell align='right'>Tingkat</TableCell>
                <TableCell align='right'>Kapasitas</TableCell>
                <TableCell align='center'>
                  <button type='button'>+Baru</button>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dataContent?.map(row => (
                <TableRow
                  key={row.id}
                  sx={{
                    '&:last-of-type td, &:last-of-type th': {
                      border: 0
                    }
                  }}
                >
                  <TableCell component='th' scope='row'>
                    {row.code}
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell align='right'>{row.level}</TableCell>
                  <TableCell align='right'>{row.capacity}</TableCell>
                  <TableCell align='center'>
                    <Icon />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  )
}

export default Card
