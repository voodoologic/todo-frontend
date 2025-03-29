import Service from '@ember/service';
import ENV from '../config/environment';
import { service } from '@ember/service';

export default class ApiAuthService extends Service {
  @service store;
  accessToken = null;
  refreshToken = null;

  async getClientTokens() {
    let { API_URL } = ENV;

    return fetch(`${API_URL}/api/v1/token`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch client tokens');
        }
        return response.json();
      })
      .catch((error) => {
        console.error('Error fetching client tokens:', error);
        return null;
      });
  }

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
        this.accessToken = data.access;
        this.refreshToken = data.refresh;
      })
      .catch((error) => {
        console.error('Error fetching user token:', error);
        return null;
      });
  }
  async invoke() {
    // const { client_id, client_secret } = await this.getClientTokens();
    await this.getUserToken();
  }
}
