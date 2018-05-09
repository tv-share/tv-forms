import React from "react";
import ReactDOM from "react-dom";

import Select from "../src/lib/Select";
import "../src/styles/select.styl";

class Workbench extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selected: null
        };
    }

    render() {

        const { selected } = this.state;

        console.log(selected);
        
        return (
            <section className="test-area">
                <Select selected={selected} placeholder="Escolha uma opção">
                    {[1,2,3,4,5].map(n =>
                        <div
                            style={{
                                "box-sizing": "border-box",
                                "font-size": "1.3em",
                                "line-height": "2em",
                                "padding": "10px"
                            }}
                            id={n} 
                            onClick={e => {
                                this.setState({ selected: e.target.id })
                            }}>
                            {`Opção ${n}`}
                        </div>
                    )}
                </Select>
            </section>
        )
    }
}

ReactDOM.render(<Workbench />, document.querySelector("#app-container"));