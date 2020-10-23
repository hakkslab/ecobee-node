import * as request from 'request-promise-native';
import * as qs from 'querystring';
import { CoreOptions } from 'request';

const API_URL = 'https://www.ecobee.com/api/1/';

type Dictionary = { [key: string]: any };

enum HTTP_METHOD {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE'
};

class Ecobee {
  private clientId: string;
  private refreshToken?: string;

  constructor(clientId: string, refreshToken?: string) {
    this.clientId = clientId;
    this.refreshToken = refreshToken;
  }

  async getAuthPin() {
    return this._request({
      endpoint: '/home/authorize',
      body: {
        response_type: 'ecobeePin',
        scope: 'smartWrite',
        client_id: this.clientId
      }
    });
  }

  async authorize() {

  }

  private async _request(
    {
      endpoint,
      method = HTTP_METHOD.GET,
      body = {},
      headers
    }: {
      endpoint: string,
      method?: HTTP_METHOD,
      body?: Dictionary,
      headers?: Headers
    }
  ): Promise<any> {
    let url = `${API_URL}${endpoint}`;
    const requestHeaders = { ...headers, Accept: 'application/json' };

    if (method === HTTP_METHOD.GET && body) {
      url += `?${qs.stringify(body)}`;
    }

    let retVal = null;
    try {
      const response = await request(
        url,
        {
          method,
          body,
          headers: requestHeaders
        }
      );
      retVal = JSON.parse(response);
    } catch (err) {
      console.error('Error making ecobee API request', err);
      throw err;
    }

    return retVal;
  }
}

async function main() {
  const ecobee: Ecobee = new Ecobee('Rvo6540P51QZMFQNVoTkaVA6XLErPOXG');
  const pinResponse = await ecobee.getAuthPin();
  console.log(pinResponse);
}

main();
