import React from 'react';
import './App.css';
import EmailTemplatesPage from './components/EmailTemplatesPage';
import SendEmailPage from './components/SendEmailPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Система розсилки повідомлень</h1>
      </header>
      <main>
        <EmailTemplatesPage />
        <SendEmailPage />
      </main>
    </div>
  );
}

export default App;
