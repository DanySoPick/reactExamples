import { Component } from "react";
import { Bars } from "react-loader-spinner";

const API = process.env.REACT_APP_HTTP_API;
const POOLING_INTERVAL = 3000//process.env.REACT_APP_POOLING_INTERVAL;

export default class Widget extends Component {
    constructor(props){
        super(props);
        this.state = {
            rates: null
        };
    }
    componentDidMount(){
        this.mounted = true;
        this.intervalID = setInterval( () => this.tick(), POOLING_INTERVAL);
        this.tick();//execute right away
    }
    componentWillUnmount(){
        clearInterval(this.intervalID);
        this.mounted = false;
    }
    tick(){
        if(this.mounted)
        {
            console.log(API)
            fetch(API)
            .then( response => response.json() )
            .then( 
                data => this.setState({ rates: data['rates']} )
                );
                console.log(this.state)
            
        }
    }

    render(){
        const { rates } = this.state;
        console.log(rates);
        if(!rates)
        {
            return (<Bars
                height={50} 
                width={50}
                timeout={10000}
                />);
        }

        const items = Object.keys(rates).map((key) => <td>
            <div className="box">
                <div className="text">
                    {key}
                </div>
                <div className="value">
                    {rates[key]}
                </div>
            </div>
        </td>
        );

        return (
            <table>
                <tbody>
                    <tr>
                        {items}
                    </tr>
                </tbody>
            </table>
        );
        }
}