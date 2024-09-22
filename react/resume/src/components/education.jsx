
import { useRef, useEffect } from 'react';


function Education({
    institute,
    period,
    location,
    degree
}) {

  
  return (
    <div className="py-2 px-10">
        <div className="flex flex-row justify-between">
            <div className="flex-1 flex justify-start px-4">
                <b>{institute}</b>
            </div>
            <div className="flex-1 flex justify-end px-4">
                {period}
            </div>
        </div>
        <div className="flex flex-row justify-between">
            <div className="flex-1 flex justify-start px-4">
                {location}
            </div>
            <div className="flex-1 flex justify-end px-4">
                <i>{degree}</i>
            </div>
        </div>
    </div>
  );
}

export default Education;



