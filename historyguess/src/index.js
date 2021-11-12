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
        //this.getEvents();
        //this.pickTwoEvents()
        
    }


    pickTwoEvents(){
        var randNum = Math.floor(Math.random() * (historyEvents.length - 1 + 1)) + 0;
        console.log(randNum);
        const event1 = historyEvents[randNum][0];
        this.setState({
            topEvent: event1
        })

        console.log(historyEvents[randNum][0]);

        console.log(this.state.topEvent);
    }



    render(){
        return(
            <div className="container">
                <div className="title">HISTORY GUESS</div>
                <TwoEventComp event1={this.state.eventBank[0][0]} event2={this.state.eventBank[0][1]} score={this.state.score}></TwoEventComp>
                
            </div>
        )
    }

}

ReactDOM.render(<HistoryGuess />, document.getElementById("root"));
