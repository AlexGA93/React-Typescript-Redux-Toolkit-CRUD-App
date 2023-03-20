import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.scss';
import { NavbarComponent } from './components';
import { DashboardPage, FavsPage, UserPage } from './pages';
import { store } from './redux/store';

function App() {

  return (
    <Provider store={store}>
      {/* navbar */}
      <NavbarComponent />
      {/* Routes */}
      <Router>
        <Routes>
          <Route path='/' element={ <DashboardPage /> }/>
          <Route path='/favorites' element={ <FavsPage /> }/>
          <Route path='/user/:id' element={ <UserPage /> }/>
        </Routes>
      </Router>
    </Provider>
  )
}

export default App;