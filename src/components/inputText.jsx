import React, { Component, Fragment } from 'react';

class InputText extends Component {	
	render() { 
		return ( 
		<Fragment>
			<label htmlFor="inputText">{this.props.label}</label>
			<p>{this.props.text}</p>
		</Fragment> );
	}
}


export default InputText;
