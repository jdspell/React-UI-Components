import React from 'react';
import './Header.css';

import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';


function HeaderContainer() {
    return (
        <header>
            <HeaderTitle/>
            <HeaderContent/>
        </header>
    );
}

export default HeaderContainer;