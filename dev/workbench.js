import React from "react";
import ReactDOM from "react-dom";

import Select from "./src/lib/Select";

class Workbench extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <section className="test-area">
                <Select />
            </section>
        )
    }
}

ReactDOM.render(<Workbench />, document.querySelector("#app-container"));