import React, { useEffect } from 'react'
import SearchBar from './components/layout/SearchBar.js'
import Logs from './components/logs/Logs.js'
import TechListModal from './components/techs/TechListModal.js'
import EditLogModal from './components/logs/EditLogModal.js'
import AddLogModal from './components/logs/AddLogModal.js'
import AddTechsModal from './components/techs/AddTechModal.js'
import { Provider } from 'react-redux'
import store from './store.js'

import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import AddBtn from './components/layout/AddBtn.js'
import './App.css';

const App = () => {
  useEffect(() => {
    // init materialize js for modals
    M.AutoInit()
  })
  return (
    <Provider store={store}>
      <>
        <SearchBar />
        <div className='container'>
          <AddBtn />
          <AddLogModal />
          <EditLogModal />
          <AddTechsModal />
          <TechListModal />
          <Logs />
        </div>
      </>
    </Provider>
  );
}

export default App;