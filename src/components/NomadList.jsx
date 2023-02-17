import Channel from "./Channel";
import Friend from "./Friend";
import React, {useState, useEffect, useRef} from 'react';
import {NavLink} from 'react-router-dom';
const NomadList = () => {
    let [channels, setChannels] = useState(0);
    let [friends, setFriends] = useState(0);
    let channelsCount = useRef();
    let friendsCount = useRef();
    useEffect(()=>{
        setChannels(channelsCount.current.childNodes.length);
        setFriends(friendsCount.current.childNodes.length);
    }, [channels, friends]);
    return (
        <section className="nomad_list">
            <h1 className="nomad_list__title">
                Nomad List
                <svg id="arrow-icon" width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.7" d="M9.33179 0.610008L5.26335 5.04369L1.195 0.610008C1.03995 0.455178 0.788448 0.455178 0.633405 0.610008C0.478109 0.76489 0.478109 1.01589 0.633405 1.17072L4.9626 5.88869C5.04539 5.97128 5.15512 6.00652 5.26335 6.00094C5.37166 6.00652 5.48148 5.97128 5.56418 5.88869L9.89355 1.17072C10.0488 1.01589 10.0488 0.76489 9.89355 0.610008C9.73842 0.455178 9.48699 0.455178 9.33179 0.610008Z" fill="white"/>
                </svg>
                <svg id="options-icon" width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.6"  d="M14.0369 5.34992L12.9531 5.98092C13.0139 6.31222 13.0538 6.65072 13.0538 7.00011C13.0538 7.34934 13.0139 7.68784 12.9531 8.01916L14.0369 8.65012C14.4796 8.90783 14.6312 9.47861 14.3757 9.92502L13.4501 11.5417C13.1945 11.988 12.6284 12.141 12.1857 11.8833L11.0907 11.2459C10.5792 11.6849 9.99763 12.0439 9.35126 12.2747V13.0666C9.35126 13.5821 8.93686 14 8.42558 14H6.57434C6.06322 14 5.64882 13.5821 5.64882 13.0666V12.2747C5.00245 12.0439 4.42091 11.6849 3.9093 11.2459L2.8144 11.8833C2.37163 12.141 1.80554 11.988 1.54994 11.5417L0.624336 9.92502C0.368752 9.47861 0.520448 8.90783 0.963136 8.65012L2.04694 8.01916C1.98619 7.68784 1.9463 7.34934 1.9463 7.00011C1.9463 6.65072 1.98619 6.31222 2.04694 5.98092L0.963136 5.34992C0.520448 5.09223 0.368752 4.52132 0.624336 4.07504L1.54994 2.45842C1.80554 2.01196 2.37163 1.85894 2.8144 2.11677L3.9093 2.75421C4.42091 2.31499 5.00245 1.95618 5.64882 1.72547V0.933409C5.64882 0.417987 6.06322 9.20296e-05 6.57434 9.20296e-05H8.42558C8.93686 9.20296e-05 9.35126 0.417987 9.35126 0.933409V1.72547C9.99763 1.95618 10.5792 2.31499 11.0907 2.75421L12.1857 2.11677C12.6284 1.85894 13.1945 2.01196 13.4501 2.45842L14.3757 4.07504C14.6312 4.52132 14.4796 5.09223 14.0369 5.34992ZM13.3427 4.13746L12.8799 3.32914C12.752 3.10606 12.469 3.02944 12.2477 3.15837L10.9618 3.90701C10.3091 3.16462 9.42702 2.63209 8.42558 2.4271V1.40004C8.42558 1.1423 8.21838 0.933409 7.9628 0.933409H7.0372C6.78152 0.933409 6.57434 1.1423 6.57434 1.40004V2.4271C5.57298 2.63209 4.69094 3.16462 4.0383 3.90701L2.7524 3.15837C2.53101 3.02944 2.24797 3.10606 2.12013 3.32914L1.65741 4.13746C1.52957 4.36068 1.60542 4.6462 1.82672 4.77499L3.11781 5.52659C2.96402 5.99078 2.87189 6.48356 2.87189 7.00011C2.87189 7.51652 2.96402 8.00924 3.11781 8.47354L1.82672 9.22507C1.60542 9.35402 1.52957 9.6394 1.65741 9.8626L2.12013 10.6708C2.24797 10.894 2.53101 10.9705 2.7524 10.8416L4.03822 10.0931C4.69094 10.8355 5.57298 11.368 6.57434 11.573V12.6001C6.57434 12.8578 6.78152 13.0666 7.0372 13.0666H7.9628C8.21838 13.0666 8.42558 12.8578 8.42558 12.6001V11.573C9.42702 11.368 10.3091 10.8355 10.9618 10.0931L12.2477 10.8416C12.469 10.9705 12.752 10.894 12.8799 10.6708L13.3427 9.8626C13.4705 9.6394 13.3946 9.35402 13.1733 9.22507L11.8822 8.47354C12.0361 8.00924 12.1281 7.51652 12.1281 7.00011C12.1281 6.48356 12.0361 5.99078 11.8822 5.52659L13.1733 4.77499C13.3946 4.6462 13.4705 4.36068 13.3427 4.13746ZM7.5 9.33328C6.22194 9.33328 5.18595 8.28867 5.18595 7.00011C5.18595 5.71127 6.22194 4.66666 7.5 4.66666C8.77798 4.66666 9.81405 5.71127 9.81405 7.00011C9.81405 8.28867 8.77798 9.33328 7.5 9.33328ZM7.5 5.60003C6.73322 5.60003 6.11162 6.22683 6.11162 7.00011C6.11162 7.7732 6.73322 8.39991 7.5 8.39991C8.26678 8.39991 8.88838 7.7732 8.88838 7.00011C8.88838 6.22683 8.26678 5.60003 7.5 5.60003Z" fill="white"/>
                </svg>
            </h1>
            <h2 className="nomad_list__treads">
                <svg id="message-icon" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.5" d="M8.5 13.9999C7.98839 13.9999 7.48962 13.9537 7.00472 13.8734L3.50005 16.0001V12.4596C1.67274 11.1767 0.49999 9.20951 0.49999 6.99994C0.49999 3.13404 4.08176 -2.80142e-05 8.5 -2.80142e-05C12.9183 -2.80142e-05 16.5 3.13404 16.5 6.99994C16.5 10.8661 12.9183 13.9999 8.5 13.9999ZM8.5 1.00014C4.63401 1.00014 1.5 3.68641 1.5 6.99994C1.5 9.03322 2.68285 10.8268 4.48764 11.9121L4.4561 14.2313L6.80987 12.8165C7.35203 12.932 7.91612 13 8.5 13C12.366 13 15.5001 10.3138 15.5001 6.99994C15.5001 3.68641 12.366 1.00014 8.5 1.00014ZM12 6.50002H5.00001C4.72387 6.50002 4.49999 6.27605 4.49999 6.00006C4.49999 5.72379 4.72387 5.5 5.00001 5.5H12C12.2761 5.5 12.5 5.72379 12.5 6.00006C12.5 6.27605 12.2761 6.50002 12 6.50002ZM6.00002 8.50002H11C11.2762 8.50002 11.5001 8.72385 11.5001 8.99999C11.5001 9.27627 11.2762 9.5001 11 9.5001H6.00002C5.72382 9.5001 5.50001 9.27627 5.50001 8.99999C5.50001 8.72385 5.72382 8.50002 6.00002 8.50002Z" fill="white"/>
                </svg>
                All treads
            </h2>
            <div className="nomad_list__channels">
                <h3 className="nomad_list__channels-title">
                    <span>Channels</span>
                    <span>{channels}</span>
                </h3>
                <ul className="channels" ref={channelsCount}>
                    <NavLink to='/general'>
                        <Channel name='general'/>
                    </NavLink>
                    <NavLink to='/support'>
                        <Channel name='support'/>
                    </NavLink>
                    <NavLink to='/marketing'>
                        <Channel name='marketing'/>
                    </NavLink>
                    <NavLink to='/thailand'>
                        <Channel name='thailand'/>
                    </NavLink>
                    <NavLink to='/italy'>
                        <Channel name='italy'/>
                    </NavLink>
                    <NavLink to='/jobs'>
                        <Channel name='general'/>
                    </NavLink>
                    <NavLink to='/startups'>
                        <Channel name='support'/>
                    </NavLink>
                    <NavLink to='/freelance'>
                        <Channel name='marketing'/>
                    </NavLink>
                    <NavLink to='/bali'>
                        <Channel name='thailand'/>
                    </NavLink>
                </ul>
            </div>
            <div className="nomad_list__friends">
                <h3 className="nomad_list__friend-title">
                    <span>Friends</span>
                    <span>{friends}</span>
                </h3>
                <ul className="friends" ref={friendsCount}>
                    <Friend icon="active" img={require("../images/friends/Shape.png")} name="Britney Cooper"/>
                    <Friend icon="active" img={require("../images/friends/Shape-1.png")} name="Orlando Diggs"/>
                    <Friend icon="active" img={require("../images/friends/Shape-2.png")} name='Alex Lee'/>
                    <Friend img={require("../images/friends/Shape-3.png")} name='Marie Jensen'/>
                    <Friend img={require("../images/friends/Shape-4.png")} name='John McClane'/>
                    <Friend img={require("../images/friends/Shape-5.png")} name='Chris Pedro'/>
                    <Friend img={require("../images/friends/Shape.png")} name="Britney Cooper"/>
                    <Friend img={require("../images/friends/Shape-1.png")} name="Orlando Diggs"/>
                    <Friend img={require("../images/friends/Shape-2.png")} name='Alex Lee'/>
                    <Friend img={require("../images/friends/Shape-3.png")} name='Marie Jensen'/>
                    <Friend img={require("../images/friends/Shape-4.png")} name='John McClane'/>
                    <Friend img={require("../images/friends/Shape-5.png")} name='Chris Pedro'/>
                </ul>
            </div>
        </section>
    );
};

export default NomadList;