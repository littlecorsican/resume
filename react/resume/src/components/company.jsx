
import { useRef, useEffect } from 'react';


function Company({
    name,
    title,
    location,
    period,
    responsibilities
}) {

  
  return (
    <div className="py-2 px-10">
        <div className="flex flex-row justify-between">
            <div className="flex-1 flex justify-start px-4">
                <b>{name}</b>
            </div>
            <div className="flex-1 flex justify-end px-4">
                {period}
            </div>
        </div>
        <div className="flex flex-row justify-between">
            <div className="flex-1 flex justify-start px-4">
                {title}
            </div>
            <div className="flex-1 flex justify-end px-4">
                {location}
            </div>
        </div>
        <ul className="px-10 list-disc">
            {
                responsibilities.map((value)=>{
                    return <li className="">
                        {value}
                    </li>
                })
            } 
        </ul>
    </div>
  );
}

export default Company;



