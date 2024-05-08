import { apiClient as axios } from 'src/helper/ApiClient'

export default class KelasService {
  filter(p: any): Promise<any> {
    return axios.get('/api/siakad/class-room', {params: p});
  }
}
