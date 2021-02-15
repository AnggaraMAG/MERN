import { Provider } from 'react-redux';
import { Routes } from '../config';
import store from '../config/Redux/store'
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes />
      </Provider>
    </div>
  );
}

export default App;
