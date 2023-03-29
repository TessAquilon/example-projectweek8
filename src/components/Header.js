import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
    return(
        <Header>
            <nav>
                <Link to="/details">Details</Link>
                <Link to="/">List</Link>
            </nav>
        </Header>
    )
}