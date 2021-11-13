import React, {useState} from "react"

const TwoEventComp = ({event1, event2, score}) => {


 // get random 2 events
 // when butons pressed checkk if that is the correct answer
 // change the score
 // get new events

    return(
        
        <div className="event_container">
            <div className="scoreCont">
                <p className="score">Score: {score}</p>
            </div>

            <div className="eventTop">
                <img className="eventImg" src={event1[2]}></img>
                <h5 className="events">{event1[0]}</h5>
            </div>


            <div className="eventBot">
                <img className="eventImg" src={event2[2]}></img>
                <h5 className="events">{event2[0]}</h5>
            </div>
        
        </div>
    )

    
}

export default TwoEventComp;