import { Route, Routes } from 'react-router-dom';
import LoginPage from './views/LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/now-ui-kit.css';
import './assets/demo/nucleo-icons-page-styles.css?v=1.5.0';

export function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
