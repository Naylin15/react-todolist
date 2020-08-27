import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';


class Header extends Component {
    render() {
        return (
            <header className="main-header">
                <div className="ui three item menu">
                    <span className="item">Personal Challenge</span>
                    <div className="ui floating labeled icon dropdown button item" id="categories">
                        <Dropdown text='Filter by categories'>
                            <Dropdown.Menu>
                                <Dropdown.Item text='All'/>
                                <Dropdown.Item text='Important' />
                                <Dropdown.Item text='Tomorrow' />
                                <Dropdown.Item text='Later' />
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <a className="item" href="https://github.com/Naylin15/react-todolist">View it on GitHub</a>
                </div>
            </header>
        )
    }
}

export default Header