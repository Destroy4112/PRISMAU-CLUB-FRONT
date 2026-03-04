import { URL_BACK } from '@shared/constants/endpoints/Endpoints.model';
import axios from 'axios';

export const http = axios.create({ baseURL: `${URL_BACK}/api/` });