import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Add a null check to ensure TypeScript knows 'root' is not null
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Root element not found. Make sure there is an element with id 'root' in your HTML.");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: Measure performance in your app
reportWebVitals();
