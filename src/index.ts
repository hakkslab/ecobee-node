import * as request from 'request-promise-native';
import * as qs from 'querystring';

import config from '../config';

const API_URL = 'https://api.ecobee.com/';

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
    console.log('get auth pin');
    return this._request({
      endpoint: 'authorize',
      urlParams: {
        response_type: 'ecobeePin',
        scope: 'smartWrite',
        client_id: this.clientId,
      }
    });
  }

  async getToken() {
    console.log('getting auth token');
    return this._request({
      endpoint: 'token',
      method: HTTP_METHOD.POST,
      urlParams: {
        grant_type: 'ecobeePin',
        code: '9nEOPxMqA37pLZumASHw0RKO',
        client_id: this.clientId,
        ecobee_type: 'jwt',
      }
    });
  }

  private async _request(
    {
      endpoint,
      method = HTTP_METHOD.GET,
      body = null,
      urlParams = {},
      headers
    }: {
      endpoint: string,
      method?: HTTP_METHOD,
      body?: Dictionary,
      urlParams?: Dictionary,
      headers?: Headers
    }
  ): Promise<any> {
    let url = `${API_URL}${endpoint}`;
    const requestHeaders = { ...headers, Accept: 'application/json' };
    if (urlParams) {
      url += `?${qs.stringify(urlParams)}`;
    }

    console.log(url);

    let retVal = null;
    try {
      const response = await request(
        url,
        {
          method,
          body,
          headers: requestHeaders,
        }
      );
      console.log(response);
      retVal = JSON.parse(response);
      console.log('no aspliode');
    } catch (err) {
      //console.error('err');
      console.error('Error making ecobee API request', err);
      throw err;
    }
    console.log('hey');
    return retVal;
  }
}

async function main() {
  const ecobee: Ecobee = new Ecobee(config.ecobeeClientId);
  try {
    const pinResponse = await ecobee.getToken();
    console.log(pinResponse);
  } catch (err) {

  }
}

main();
