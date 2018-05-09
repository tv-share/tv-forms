import React, { PureComponent } from 'react';
import PropTypes from "prop-types";

import ArrowIcon from '../misc/ArrowIcon';

class Select extends PureComponent {

    constructor(props) {
        super(props);
        
        this.state = {
            isOpen: false
        };

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }

    open() {
        this.refs.list.focus();
        this.setState({ isOpen: true });
    }

    close() {
        this.setState({ isOpen: false });
    }

    getListInfo() {
        const { placeholder, children } = this.props;
        const options = [];
        let selectedNode = null;

        if(placeholder) options.push(<li className="tv-placeholder">{placeholder}</li>);

        if(children) {
            children.forEach(child => {
                options.push(<li onClick={this.close}>{child}</li>);
                if(child.props.id == this.props.selected) selectedNode = child;
            });
        }

        const selected = (
            <div className="tv-selected-wrapper">
                {
                    selectedNode || 
                    <div className="tv-placeholder">{placeholder || "-"}</div>
                }
            </div>
        );
        
        return { options, selected };
    }

    render() {

        const { options, selected } = this.getListInfo();
        const { isOpen } = this.state;

        return (
            <div className="tv-select-wrapper">
                {selected}
                <input tabIndex="1" onFocus={this.open} type="text" readOnly="true" />
                <ArrowIcon />
                <ul tabIndex="1" ref="list" onBlur={this.close} className={isOpen ? "-open" : ""}>
                    {options}
                </ul>
            </div>
        );
    }
}

Select.propTypes = {
    placeholder: PropTypes.string,
    selected: PropTypes.string
};

export default Select;