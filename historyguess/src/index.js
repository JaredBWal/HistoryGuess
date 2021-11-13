import React, {Component} from "react";
import ReactDOM from "react-dom";
import historyEvents from "./historyEvents/index.js";
import TwoEventComp from "./components/TwoEventComp.js";

import "./style/style.css";


class HistoryGuess extends Component{

    state = {
        eventBank: [historyEvents],
        score: 0,
        play: true,
        topEvent: null,
        botEvent: null
    }

    getEvents(){
        this.setState(this.state.eventBank = {historyEvents});
        
    }

    componentDidMount(){
        
        console.log(this.state.eventBank);
        this.pickTwoEvents();
        //this.getEvents();
        //this.pickTwoEvents()
        
    }

    checkBefore = () => {
        if (this.state.topEvent[1] >= this.state.botEvent[1]){
            console.log("Right");
            this.correctAnswer();

        }else{
            console.log("False");
        }



    };

    checkAfter = () => {
        if (this.state.topEvent[1] <= this.state.botEvent[1]){
            console.log("Right");
            this.correctAnswer();
        }else{
            console.log("False");
        }

    }

    increaseScore = (num = 1) => {
        this.setState({
            score: this.state.score + num
        })
    }


    // when the user clicks the right answer
    correctAnswer = () =>{
        // increases player's score
        this.increaseScore();
        this.pickTwoEvents();
        //Todo
        // move botton event up
        // get new botton event


    }

    pickTwoEvents=()=>{
        // picks random event for top event
        var randNum = Math.floor(Math.random() * (historyEvents.length - 1 + 1)) + 0;
        const event1 = this.state.eventBank[0][randNum];

        this.setState({
            topEvent: event1
        })

        
        // picks random event for bot event
        var randNum2 = Math.floor(Math.random() * (historyEvents.length - 1 + 1)) + 0;
        var event2 = this.state.eventBank[0][randNum2];
        console.log("ev1", event1[0]);
        console.log("ev2", event2[0]);


        while (event2 === event1){

            randNum2 = Math.floor(Math.random() * (historyEvents.length - 1 + 1)) + 0;
            event2 = this.state.eventBank[0][randNum2];
        }

        this.setState({
            botEvent: event2
        })



    }


    render(){
        
            
        return(

                
            <div className="container">
                <div className="title">HISTORY GUESS</div>
              
                {this.state.topEvent != null ? ( 
                <TwoEventComp event1={this.state.topEvent} event2={this.state.botEvent} score={this.state.score}></TwoEventComp>)
                : (null
                )}

                
                <h5 className="eventText">Was</h5>

                <div className="eventBtnContainer">
                    <button className="eventBtn" onClick={this.checkBefore}>Before</button>
                    <button className="eventBtn margin-right" onClick={this.checkAfter} >After</button>
                </div>



            </div>
        )
        
        
    }

}

ReactDOM.render(<HistoryGuess />, document.getElementById("root"));
