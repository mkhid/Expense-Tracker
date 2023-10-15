import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import styled from "styled-components";
import HomeComponent from "./modules/home";
import myEvents from './events.json'; 


const Container = styled.div`
  background-color: white;
  color: #0d1d2c;
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  align-items: center;
  height: 100vh;
  width: 98%;
  padding-top: 30px ;
  font-family: Montserrat;
`;

const Header = styled.div`
  background-color: white;
  color: #0d1d2c;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 22px;
  font-size: 25px;
  font-weight: bold;
`;


function App() {
  const [expenseCalendar, setexpenseCalendar] = useState(false);

  const toggleCalendar = () => {
    setexpenseCalendar(!expenseCalendar);
  };

  return (

    <Container>
      <Header>Expense Tracker</Header>
      <HomeComponent />
      <button onClick={toggleCalendar} style={{ margin: '10px' }}>
        {expenseCalendar ? 'Hide Calendar' : 'Expense Calendar'}
      </button>
      {expenseCalendar && (
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay',
          }}
          selectable={true}
          dateClick={(info) => alert(`You clicked on: ${info.dateStr}`)}
          events= {myEvents}
        />
      )}
    </Container>
  );
}

export default App;
