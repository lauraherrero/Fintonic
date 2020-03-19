import React from 'react';


const Header = () => {
    return <div className="header__container">
        <button className="btn"><i className="fas fa-bars"></i> BROWSE</button>
        <button className="btn"><i className="fas fa-plus-square"></i> ADD NEW QUESTIONS</button>
        <button className="btn"><i className="fas fa-cogs"></i> API</button>
        <button className="btn"><i className="fas fa-comments"></i> DISCUSS</button>
        <button className="btn"><i className="fas fa-sign-out-alt"></i> LOGIN</button>
    </div>
}


export default Header;