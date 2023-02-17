import React from 'react';
const Channel = (props) => {
    return (
        <li className={`channels__item`} >
            # {props.name}
        </li>
    );
};
export default Channel;