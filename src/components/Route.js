import React from 'react';
import Moment from 'react-moment';

function convertHMS(value) {
 return new Date(value * 1000).toISOString().substr(11, 8); // Return is HH : MM : SS
}

const Route = ({route}) => (
    <tr key={route.id}>
        <td>{Math.round(route.walkDistance)}</td>
        <td>{convertHMS(route.duration)}</td>
        {route.fares.map((fare,i) => (
          <td>{(fare.cents/100)}{fare.currency}</td>          
         ))}   
               <thead>
                 <tr className="table100-head">
                   <th>Mode</th>
                   <th>From</th>
                   <th>To</th>
                   <th>Distance(m)</th>
                   <th>Start</th>
                   <th>End</th>
                   <th>Duration</th>
                 </tr>
               </thead>
              
            {route.legs.map((leg,i) => (
                <tbody> 
                  <td>{leg.mode}{leg.trip&&leg.trip.routeShortName}</td>
                  <td>{leg.from.name}{" "}{leg.from.stop&&leg.from.stop.code}</td>
                  <td>{leg.to.name}{leg.to.stop&&leg.to.stop.code}</td>
                  <td>{Math.round(leg.distance)}</td>
                  <td><Moment unix format="HH:mm" >{leg.startTime / 1000}</Moment></td>
                  <td><Moment unix format="HH:mm">{leg.endTime / 1000}</Moment></td>  
                  <td>{convertHMS(leg.duration)}</td>
                </tbody>
            ))}           
    </tr>
);
export default Route;


