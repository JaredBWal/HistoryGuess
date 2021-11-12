import React, {useState} from "react"

const TwoEventComp = ({event1, event2, score}) => {


 // get random 2 events
 // when butons pressed checkk if that is the correct answer
 // change the score
 // get new events

    return(
        <div className="event_container">
            <p className="score">Score: {score}</p>
            
            <h5 className="events">{event1[0]}</h5>

            <h3 className="events">V.S</h3>
            
            <h5 className="events">{event2[0]}</h5>

        
        </div>
    )

    
}

export default TwoEventComp;