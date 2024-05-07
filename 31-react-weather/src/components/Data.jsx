import Form from "./Form.jsx";
import Weather from "./Weather.jsx";
import {Component} from "react";

class Data extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherInfo: null,
            message: null
        };
    }

    render() {
        return (
            <div>
                <Form />
                <Weather />
            </div>
        );
    }
}

export default Data;