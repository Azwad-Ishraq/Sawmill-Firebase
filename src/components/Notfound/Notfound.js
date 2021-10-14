import React from 'react';
import notfoundImg from '../../404.svg'

const Notfound = () => {
    return (
        <div>
            <h1>Opps!! 404 Error!!</h1>
            <h2>Page Not Found!!</h2>
            <img src={notfoundImg} alt=""/>
        </div>
    );
};

export default Notfound;