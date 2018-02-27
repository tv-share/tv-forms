import React from "react";
import PropTypes from "prop-types";

/**
* Renders the TextInput Component
* @param  {String}     	changeAction is the "on change" function (required)
* @param  {String}     	className is the name to be attached to the component's class name (optional)
* @param  {Boolean}    	disabled states if the input is disabled or enabled (optional)
* @param  {String}    	id is the id of the component (required)
* @param  {String}  	  label is the label of the input (optional)
* @param  {String}  	  placeholder is the placeholder of the input (optional)
* @param  {String}  	  value is the value of the input (required)
* @return {JSX}         TextInput Component
*/
const TextInput = (props) => {
	const { changeAction, className = "", disabled, id, label, placeholder, value } = props;
	return (
		<div className={`TextInput ${className}`} >
			<label> {label} </label>
			<input
				disabled={disabled}
				id={id}
				onChange={changeAction}
				placeholder={placeholder}
				type="text"
				value={value}/>
		</div>
	);
};

TextInput.propTypes = {
	changeAction: PropTypes.func.isRequired,
	className: PropTypes.string,
	disabled: PropTypes.boolean,
	id: PropTypes.string.isRequired,
	label: PropTypes.string,
	placeholder: PropTypes.string,
	value: PropTypes.string.isRequired,
};

export default TextInput;