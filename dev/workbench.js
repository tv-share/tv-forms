import React from "react";
import ReactDOM from "react-dom";

import Select from "../src/lib/Select";
import "../src/styles/select.styl";

class Workbench extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <section className="test-area">
                <Select placeholder="Escolha uma opção">
                    <option id="opt1">Opção 1</option>
                    <option id="opt2">Opção 2</option>
                </Select>
            </section>
        )
    }
}

ReactDOM.render(<Workbench />, document.querySelector("#app-container"));