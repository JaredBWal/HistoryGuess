import React, {useState} from "react"

const TwoEventComp = ({event1, event2, score}) => {


 // get random 2 events
 // when butons pressed checkk if that is the correct answer
 // change the score
 // get new events

    const[eventTopName, eventTopId, eventBotName, eventBotId] = useState();


    return(
        <div className="event_container">
            <p className="score">Score: {score}</p>
            
            <h5 className="events">{event1[0]}</h5>

            
            <h5 className="events">Was</h5>

            <div className="eventBtnContainer">
                <button className="eventBtn">Before</button>
                <button className="eventBtn margin-right " >After</button>
            </div>
            
            
            
            <h5 className="events">{event2[0]}</h5>

        
        </div>
    )

    
}

export default TwoEventComp;