'use strict';

import React from 'react';

class Footer extends React.Component {

    constructor(props) {
        super(props);
    }

    _onSocialClick(e) {
        window.location.href = 'http://github.com/tcasey';
        event.stop(e);
    }

    render() {
        let footerStyle = {
            display: 'block',
            width: '100%',
            textAlign: 'center',
            marginTop: '15px'
        };
        let social = {
            cursor: 'pointer',
            color: 'rgb(0, 188, 212)'
        }
        return (
            <footer style={ footerStyle }>
              <span>{ 'made with ' }</span>
              <span>{ '\u2661 ' }</span>
              <span>{ ' by ' }</span>
              <span style={ social } onClick={ this._onSocialClick.bind(this) }>{' tcasey'}</span>
            </footer>
            );
    }
}

export default Footer;
