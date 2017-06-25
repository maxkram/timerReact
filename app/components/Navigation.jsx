var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = () => {
    return (
        <div className="top-bar">
            <div className="top-bar-left">
                <ul className="menu">
                    <li className="menu-text">
                        Reactивные часы
                    </li>
                    <li>
                        <IndexLink to="/" activeClassName="active-link">Таймер</IndexLink>
                    </li>
                    <li>
                        <Link to="/countdown" activeClassName="active-link">Секундомер</Link>
                    </li>
                </ul>
            </div>
            <div className="top-bar-right">
                <ul className="menu">
                    <li className="menu-text">
                        Created by <a href="https://github.com/maxkram" target="_blank">maxkram</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

module.exports = Navigation;
