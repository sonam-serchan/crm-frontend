import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Login } from '../../components/login/Login.comp';

import './entry.style.css';

export const Entry = () => {
    return <div className="entry-page bg-info">
        <Jumbotron><Login /></Jumbotron>
    </div>
};