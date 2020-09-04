import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';


class Header extends Component {
    render() {
        return (
            <header className="main-header">
                <div className="ui two item menu">
                    <span className="item">Personal Challenge</span>
                    <a className="item" href="https://github.com/Naylin15/react-todolist">View it on GitHub</a>
                </div>
            </header>
        )
    }
}

export default Header