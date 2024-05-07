import { apiClient as axios } from 'src/helper/ApiClient'

export default class AuthService {
  login(data: any): Promise<any> {
    return axios.post('/api/authenticate', data);
  }
  register(data: any): Promise<any> {
    return axios.post('/api/register', data);
  }
}
