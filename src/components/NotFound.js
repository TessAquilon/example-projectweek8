import React from 'react';
import { useNavigate } from 'react-router';

export const NotFound = () => {
    const navigate = useNavigate();
    const onHomeButtonClick = () => {
        navigate('/');
    };
    return(
        <div>
            <p>Sorry Pokemon Master, nothing here.</p>
            <button type="button" onClick={onHomeButtonClick}>Return to Home</button>
        </div>
    )
}