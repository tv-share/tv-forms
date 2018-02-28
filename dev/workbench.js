import React from "react";
import ReactDOM from "react-dom";

import { SelectInput } from "../src/index";

class Workbench extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            OPTION: ""
        };
    }

    render() {
        console.log(this.state.OPTION);
        const options = [{ key: "1", value: "1" }, { key: "2", value: "2" }, { key: "3", value: "3"}];
        return (
            <section className="test-area">
                <SelectInput 
                name="Select Input" 
                options={options} 
                selectAction={(e) => this.setState({OPTION: e.target.value})}
                disabled={false}/>
            </section>
        )
    }
}

ReactDOM.render(<Workbench />, document.querySelector("#app-container"));

