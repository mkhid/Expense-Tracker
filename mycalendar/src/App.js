import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import styled from 'styled-components';
import HomeComponent from './modules/home';
import axios from 'axios';

const Container = styled.div`
  background-color: white;
  color: #0d1d2c;
  // display: flex;
  // flex-direction: column;
  // margin: 0 10px;
  // align-items: center;
  // height: 100vh;
  // width: 98%;
  padding-top: 30px;
  font-family: Montserrat;
`;

const Header = styled.div`
  background-color: white;
  color: #0d1d2c;
  align-items: center;
  justify-content: center;
  padding: 22px;
  font-size: 25px;
  font-weight: bold;
`;

function App() {
  const [expenseCalendar, setExpenseCalendar] = useState(false);
  const [events, setEvents] = useState([]);

  const toggleCalendar = () => {
    setExpenseCalendar(!expenseCalendar);
  };

  // Fetch events from the server when the component mounts
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:3000/events');
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

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
          events={events}
        />
      )}
    </Container>
  );
}

export default App;
