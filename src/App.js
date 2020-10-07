import React from 'react';
import './App.css';
import { DefaultLayout } from './layout/DefaultLayout';
// import { Dashboard } from './pages/dashboard/Dashboard.page';
// import { AddTicket } from './pages/new-ticket/AddTicket.page';
import { TicketLists } from './pages/ticket-list/TicketLists.page';

function App() {
  return (
    <div className="App">
      <DefaultLayout>
        {/* <Dashboard /> */}
        {/* <AddTicket /> */}
        <TicketLists />
      </DefaultLayout>
    </div>
  );
}

export default App;
