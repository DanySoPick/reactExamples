import { Component } from "react";

export default class Clock extends Component {
    constructor(props){
        super(props);
        this.state = {now: new Date().toLocaleString('sv-SE')};
    }
    componentDidMount(){
        this.mounted = true;
        this.intervalID = setInterval( () => this.tick(), 500);
        this.tick();
    }
    componentWillUnmount(){
        clearInterval(this.intervalID);
        this.mounted = false;
    }
    tick(){
        if(this.mounted)
        {
            this.setState({now: new Date().toLocaleString('sv-SE')})
        }
    }

    render(){
        return <div className="clock">{this.state.now}</div>
    }
}