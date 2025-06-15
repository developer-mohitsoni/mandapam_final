import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { isWeekend } from 'date-fns';

const ReactDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const filterWeekends = (date) => {
    return !isWeekend(date); // Allow only weekdays
  };

  return (
    <div className='flex flex-col items-center justify-center h-auto p-5'>
      <h1 className='mb-4 text-2xl font-semibold'>Select a Date</h1>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy hh:mm aa"
        filterDate={filterWeekends}
        showTimeSelect
        timeIntervals={30} // Set time intervals to 30 minutes
        timeFormat="hh:mm aa"
        placeholderText="Choose a date"
        className='p-2 border rounded-md'
      />
    </div>
  );
};

export default ReactDatePicker;
