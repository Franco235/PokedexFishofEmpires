import React, { Component, Fragment } from "react";
import InputText from "./inputText";

class SearchBox extends Component {
    state = {};
    render() {
        return (
            <Fragment>
                <InputText label="What Pokemon are you looking for?" />
				<input type="text" name="" id="" placeholder="write a pokemon's name here"/>
				<button>Search</button>
            </Fragment>
        );
    }
}

export default SearchBox;
