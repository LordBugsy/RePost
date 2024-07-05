import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

//the provider is a "data tunnel" that will pass the database of users in our components. The state of the component will change after a user has been added to the database, hence why I created a new component to stock our users
import { UserProvider } from './RePost/UserContext'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);
