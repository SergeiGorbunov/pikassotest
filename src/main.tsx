import ReactDOM from 'react-dom/client';
import App from './pages/App.tsx';
import { Provider } from 'react-redux';
import { store } from './features/redux/store.ts';
import { BrowserRouter as Router } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);
