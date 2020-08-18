/* eslint-disable react/prop-types */
/* eslint-disable no-alert */
/* eslint-disable func-style */
import React from 'react';

function ProfilePage(props) {
    const showMessage = () => {
        alert(`Followed ${props.user}`);
    };

    const handleClick = () => {
        setTimeout(showMessage, 3000);
    };

    return <button onClick={handleClick}>Follow</button>;
}

export default ProfilePage;
