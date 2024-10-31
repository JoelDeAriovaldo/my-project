import React from 'react';
import Layout from './components/layout/Layout';
import AppRoutes from './routes/index';
import './index.css';


function App() {
  return (
    <Layout>
      <AppRoutes />
    </Layout>
  );
}

export default App;