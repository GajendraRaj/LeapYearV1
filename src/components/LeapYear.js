import React, { useState } from 'react';

function LeapYear() {
    const [state, setState] = useState({ year: 0 });

    const handleInputChange = (e) => {
        const year = e.target.value;
        
        setState(prevState => {
            return { ...prevState, year: year }
          });
      }

    const checkLeapYear = (year) => {
        if(year && year.toString().length > 3 && year.toString().length < 5) {
            const isLeapYear = ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
            return isLeapYear ? 'Leap year' : 'Not a Leap year';
        }
        return year > 0 ? 'Plese enter valid year' : '';
    }

    return (
        <div>
            <div>
                Enter year : <input 
                    type='number'
                    placeholder='Enter a year' 
                    value={state.year}
                    onChange={handleInputChange} />
            </div>
            <label>{checkLeapYear(state.year)}</label>
        </div>
    );
}

export default LeapYear;