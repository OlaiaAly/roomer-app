import ReactDOM from 'react-dom/client';

import axios from 'axios';

import App from './App';
import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './contexts/Auth/AuthProvider';

// ---------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));
axios.defaults.withCredentials= true;

root.render(
        <AuthProvider>
                 <App />
        </AuthProvider>
);

// If you want to enable client cache, register instead.
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
 