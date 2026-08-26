import { URL_BACK } from '@core/constants/endpoints';
import axios from 'axios';

export const http = axios.create({ baseURL: `${URL_BACK}/api/` });
export const http2 = axios.create({ baseURL: `${URL_BACK}/api/` });