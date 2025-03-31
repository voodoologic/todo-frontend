import Service from '@ember/service';
import ENV from '../config/environment';
import { service } from '@ember/service';

export default class ApiAuthService extends Service {
  @service store;
  accessToken = null;
  refreshToken = null;

  async getUserToken() {
    let { API_URL, API_USERNAME, API_PASSWORD } = ENV;

    return fetch(`${API_URL}/api/v1/token/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `username=${API_USERNAME}&password=${API_PASSWORD}`,
    })
      .then((response) => {
        if (!response.ok) {
          if (response.status === 401) {
            return this.refreshToken().then(() => {
              // After successfully refreshing the token, retry the original request
              return this.getUserToken(clientId, clientSecret);
            });
          }
          throw new Error('Failed to fetch user token');
        }
        return response.json();
      })
      .then((data) => {
        this.accessToken = data.data.access;
        this.refreshToken = data.data.refresh;
      })
      .catch((error) => {
        console.error('Error fetching user token:', error);
        return null;
      });
  }
  async invoke() {
    await this.getUserToken();
  }
}
