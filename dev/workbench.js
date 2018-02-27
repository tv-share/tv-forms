import React from "react";
import ReactDOM from "react-dom";

import { TextInput } from "../src/index";

class Workbench extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            CPF: "",
            id: ""
        };
    }


    render() {
        console.log(this.state.CPF);
        return (
            <section className="test-area">
                <TextInput label="CPF" id="CPF" value={this.state.CPF} changeAction={(e) => this.setState({CPF: e.target.value})}/>
            </section>
        )
    }
}

ReactDOM.render(<Workbench />, document.querySelector("#app-container"));

