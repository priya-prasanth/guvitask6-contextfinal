import React from 'react';
import Notes from './Notes';
import { UserProvider } from './Provider/UserProvider';
import 'bootstrap/dist/css/bootstrap.min.css'
import "./index.css";

const App = () => {
  return (
    <UserProvider>
    
      <Notes />
    </UserProvider>
  );
};

export default App;
