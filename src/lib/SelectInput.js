import React from "react";
import PropTypes from "prop-types";

/**
* Renders the Header Component
* @param  {String}    	className is a string that will be attached to the select input's className (optional)
* @param  {Boolean}     disabled specifies if the drop-down should be disabled
* @param  {String}    	name defines a name for the drop-down list
* @param  {Array}       options is the array of options to be displayed on the select menu
* @param  {Boolean}     required specifies that the user is required to select a value before submitting the form
* @param  {Function}    selectAction defines a function to be called whenever an option is selected
* @param  {Number}      size specifies the number of options to be displayed at once
* @return {JSX}         SelectInput Component
*/
const SelectInput = ({ className, disabled = false, name, options, required, selectAction, size }) => {
	return (
		<select	className={`selectInput ${className ? className : ""}`} 
		disabled={disabled} 
		name={name} 
		onChange={selectAction}
		options={options}
		required={required}
		size={size}>
				{
					name ? <option className={"selectName"} key={"selectInputName"} disabled={true} >{name}</option>
					: null
				}
				{
					options.map((option)=>{
						return <option key={option.key}>{option.value}</option>
					})
				}
		</select> 
	);
};

const option = PropTypes.shape({
	key: PropTypes.string,
	value: PropTypes.string
})

SelectInput.propTypes = {
	className: PropTypes.string,
	disabled: PropTypes.bool,
	name: PropTypes.string,
	selectAction: PropTypes.func.isRequired,
	options: PropTypes.arrayOf(option).isRequired,
	required: PropTypes.bool,
	size: PropTypes.number
};

export default SelectInput;