import guestIcon from "../images/main/guest.png"
import {useRef, useEffect} from 'react'
const MessageList = (props) => {
    let anchor = useRef();
    function render(mes, index){
        return(
            <li key={index} className="message__list-item">
                <img className="message__guest-icon" alt="" src={guestIcon}/>
                <div>
                    <p style={{fontWeight: 1000}}>Guest</p>
                    {mes}
                </div>
            </li>
        )
    }
    useEffect(()=>scrollTo());
    function scrollTo(){
        anchor.current.scrollIntoView();
    }
    return (
            <ul id="message__list">
                {props.message.map((mes, index)=>{
                    return render(mes, index);
                })}
                <div ref={anchor}></div>
            </ul>
    );
};

export default MessageList;