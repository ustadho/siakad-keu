import Icon from './icon'

const Card = () => {
  return (
    <>
      <div>
        <table className='w-auto'>
          <thead>
            <tr>
              <th className='text-md px-10 py-3 shadow-md border-slate-700'>
                <select name='' id=''>
                  <option value=''>Kode</option>
                  <option value=''></option>
                  <option value=''></option>
                </select>
              </th>
              <th className='text-md px-6 py-3 shadow-md'>
                <select name='' id=''>
                  <option value=''>Nama Kelas</option>
                  <option value=''></option>
                  <option value=''></option>
                </select>
              </th>
              <th className='text-md px-6 py-1 shadow-md'>
                <select name='' id=''>
                  <option value=''>Tingkat</option>
                  <option value=''></option>
                  <option value=''></option>
                </select>
              </th>
              <th className='text-md px-6 py-3 shadow-md'>
                <select name='' id=''>
                  <option value=''>Kapasitas</option>
                  <option value=''></option>
                  <option value=''></option>
                </select>
              </th>
              <th className='text-md px-8 py-3 shadow-md bg-green-500'>
                <button type='button'>+Baru</button>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className='py-3 shadow-md'>1</th>
              <th className='py-3 shadow-md'>2</th>
              <th className='py-3 shadow-md'>3</th>
              <th className='py-3 shadow-md'>4</th>
              <th className='py-3 shadow-md'>
                <Icon />
              </th>
            </tr>
            <tr>
              <th className='py-3 shadow-md'>1</th>
              <th className='py-3 shadow-md'>2</th>
              <th className='py-3 shadow-md'>3</th>
              <th className='py-3 shadow-md'>4</th>
              <th className='py-3 shadow-md'>
                <Icon />
              </th>
            </tr>
            <tr>
              <th className='py-3 shadow-md'>1</th>
              <th className='py-3 shadow-md'>2</th>
              <th className='py-3 shadow-md'>3</th>
              <th className='py-3 shadow-md'>4</th>
              <th className='py-3 shadow-md'>
                <Icon />
              </th>
            </tr>
            <tr>
              <th className='py-3 shadow-md'>1</th>
              <th className='py-3 shadow-md'>2</th>
              <th className='py-3 shadow-md'>3</th>
              <th className='py-3 shadow-md'>4</th>
              <th className='py-3 shadow-md'>
                <Icon />
              </th>
            </tr>
            <tr>
              <th className='py-3 shadow-md'>1</th>
              <th className='py-3 shadow-md'>2</th>
              <th className='py-3 shadow-md'>3</th>
              <th className='py-3 shadow-md'>4</th>
              <th className='py-3 shadow-md'>
                <Icon />
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Card
