import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="main-header">
                <div className="ui three item menu">
                    <span className="item">Personal Challenge</span>
                    <div className="ui floating labeled icon dropdown button item" id="categories">
                        <i className="filter icon"></i>
                        <span className="text">Filter</span>
                        <div className="menu">
                            <div className="item" data-value="all">
                                All
                            </div>
                            <div className="item" data-value="important">
                                Important
                            </div>
                            <div className="item" data-value="later">
                                Later
                            </div>
                            <div className="item" data-value="tomorrow">
                                Tomorrow
                            </div>
                        </div>
                    </div>
                    <a className="item" href="https://github.com/Naylin15/react-todolist">View it on GitHub</a>
                </div>
            </header>
        )
    }
}

export default Header