import React, { Component } from 'react';
import PropTypes from "prop-types";

import ArrowIcon from '../misc/ArrowIcon';

class Select extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            open: false
        };

        this.toggleOpen = this.toggleOpen.bind(this);
    }

    toggleOpen() {
        this.setState({ open: !this.state.open });
    }

    getOptions() {
        const { placeholder, children } = this.props;
        const options = [];

        if(placeholder) options.push(<li>placeholder</li>);

        children.forEach(({ props: { children }}) => {
            options.push(<li>children</li>);
        });

        return options;
    }

    render() {

        const { placeholder } = this.props;
        const { open } = this.state;

        return (
            <div className="tv-select-wrapper" onClick={this.toggleOpen}>
                <input placeholder={placeholder} type="text" readOnly="true" />
                <ArrowIcon />
                <ul className={open ? "-open" : ""}>
                    {this.getOptions()}
                </ul>
            </div>
        );
    }
}

Select.propTypes = {
    placeholder: PropTypes.string,
};

export default Select;