import React from 'react';

function Header() {
    const LogoStyles = {
        width: '50px',
        height: '50px',
        marginLeft: '25px',
        marginTop: '25px',
        background: 'transparent'
    };
    const LinkStyles = {
        padding: '30px',
        textDecoration: 'none'
    };
    const NavStyles = {
        textAlign: 'right'
    }
    const OverBG = {
        position: 'absolute'
    }
    return(
        <div style={OverBG}>
            <nav>
                <img src="https://banner2.cleanpng.com/20180605/oot/kisspng-airbnb-logo-coupon-privately-held-company-airbnb-logo-5b167f0c6a7270.541603821528200972436.jpg" alt="" style = {LogoStyles}/>
                <div style = {NavStyles}>
                    <a href=""style = {LinkStyles}>English(US)</a>
                    <a href=""style = {LinkStyles}>$ USD</a>
                    <a href=""style = {LinkStyles}>Host a home</a>
                    <a href=""style = {LinkStyles}>Host an experience</a>
                    <a href=""style = {LinkStyles}>Help</a>
                    <a href=""style = {LinkStyles}>Sign up</a>
                    <a href=""style = {LinkStyles}>Log in</a>
                </div>
            </nav>
        </div>
    );
}


export default Header;