import React from 'react';

const Friend = (props) => {
    let circleIcon='circle-icon';
    if(props.icon){
        circleIcon+=' circle-icon__active';
    }
    return (
        <li className="friends__item">
            <div className={circleIcon}/>
            <img className="friends__item-img" src={props.img} alt=""/>
            <p className="friends__item-name">{props.name}</p>
        </li>
    );
};

export default Friend;