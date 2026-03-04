import { axiosInterceptor } from '@core/http/axios.interceptor.ts';
import '@shared/assets/css/index.css';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

axiosInterceptor();
createRoot(document.getElementById('root')!).render(<App />);