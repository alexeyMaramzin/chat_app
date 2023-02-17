import React from 'react';
import object from '../images/icons/object.png';
import object1 from '../images/icons/object1.png';
import object2 from '../images/icons/object2.png';
import object3 from '../images/icons/object3.png';
import MacosDots from "./MacosDots";
import {NavLink} from "react-router-dom";
const LeftSidebar = () => {
    return (
        <nav className="left_sidebar">
            <MacosDots/>
            <div className="navigation">
                <NavLink className='nonactive__link' to='/general'>
                    <img src={object} alt="" className="sidebar_icon"/>
                </NavLink>
                <NavLink className='nonactive__link' to='support'>
                    <img src={object1} alt="" className="sidebar_icon"/>
                </NavLink>
                <NavLink className='nonactive__link' to='/thailand'>
                    <img src={object2} alt="" className="sidebar_icon"/>
                </NavLink>
                <NavLink className='nonactive__link' to='italy'>
                    <img src={object3} alt="" className="sidebar_icon"/>
                </NavLink>
            </div>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="sidebar_plus" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.4"  d="M13 7.99987H7.99998V13.0002C7.99998 13.5521 7.5523 14 7.00005 14C6.4478 14 6.00003 13.5521 6.00003 13.0002V7.99987H1.00007C0.447747 7.99987 -3.3021e-05 7.55225 -3.3021e-05 7.00003C-3.3021e-05 6.44785 0.447747 6.0001 1.00007 6.0001H6.00003V0.99994C6.00003 0.447715 6.4478 1.00136e-05 7.00005 1.00136e-05C7.5523 1.00136e-05 7.99998 0.447715 7.99998 0.99994V6.0001H13C13.5523 6.0001 14 6.44785 14 7.00003C14 7.55225 13.5523 7.99987 13 7.99987Z" fill="white"/>
            </svg>
        </nav>
    );
};

export default LeftSidebar;