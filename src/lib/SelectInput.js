import React from "react";
import PropTypes from "prop-types";

/**
* Renders the Header Component
* @param  {String}    	className is a string that will be attached to the select input's className (optional)
* @param  {String}    	defaultLabel defines a name for the drop-down list
* @param  {Boolean}     disabled specifies if the drop-down should be disabled
* @param  {Array}       options is the array of options to be displayed on the select menu
* @param  {Boolean}     required specifies that the user is required to select a value before submitting the form
* @param  {Function}    selectAction defines a function to be called whenever an option is selected
* @param  {Number}      size specifies the number of options to be displayed at once
* @return {JSX}         SelectInput Component
*/
const SelectInput = ({ className, defaultLabel, disabled = false, options, required, selectAction, size }) => {
	return (
		<select	className={`selectInput ${className ? className : ""}`} 
		disabled={disabled} 
		onChange={selectAction}
		options={options}
		required={required}
		size={size}>
				{
					defaultLabel ? <option className={"selectName"} key={"selectInputName"} disabled={true} >{defaultLabel}</option>
					: null
				}
				{
					options.map((option)=>{
						return <option key={option.value} value={option.value}>{option.label}</option>
					})
				}
		</select> 
	);
};

const option = PropTypes.shape({
	label: PropTypes.string,
	value: PropTypes.string
})

SelectInput.propTypes = {
	className: PropTypes.string,
	defaultLabel: PropTypes.string,
	disabled: PropTypes.bool,
	selectAction: PropTypes.func.isRequired,
	options: PropTypes.arrayOf(option).isRequired,
	required: PropTypes.bool,
	size: PropTypes.number
};

export default SelectInput;