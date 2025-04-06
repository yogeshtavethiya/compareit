import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {initNavigation} from '@noriginmedia/react-spatial-navigation';

initNavigation();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <App />
  </>
);
