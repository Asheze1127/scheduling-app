import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import jaLocale from '@fullcalendar/core/locales/ja';
import './App.css';

function App() {
  return (
    <div className="calendar">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
        initialView="dayGridMonth"
        locales={[jaLocale]}
        locale='ja'
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek listWeek',
        }}
        events={[
          {title:'eventを', start: '2025-03-14'},
          {title:'こんな感じで追加できます', start: '2025-03-15T10:30:00', end: '2025-03-17T14:30:00'},
          {title:'こんな感じで追加できます', start: '2025-03-14T14:30:00', end: '2025-03-17T14:30:00'}
        ]}
      />
    </div>
  );
}

export default App;
