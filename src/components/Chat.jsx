import {useState, useRef} from 'react';
import Search from "./Search"
import Message from "./Message";
import MessageList from "./MessageList";

const Chat = (props) => {
    let star = useRef();
    function starHandler(){
        if(star.current.getAttribute("fill")==="none"){
            star.current.setAttribute("fill", "#FAFF00");
            star.current.setAttribute("stroke", "#FAFF00");
        } else {
            star.current.setAttribute("fill", "none");
            star.current.setAttribute("stroke", "#999");
        }

    }
    const [message, setMessage] = useState([])
    return (
        <main className="chat">
            <div className="chat__header">
                <h1 className="chat__header-title">#{props.chat}
                    <svg onClick={starHandler} className="star-icon" width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path ref={star} d="M10.3178 1.8534L10 1.16437L9.68218 1.8534L7.50714 6.56888L2.35034 7.1803L1.59682 7.26964L2.15391 7.78483L5.96647 11.3106L4.95443 16.4039L4.80655 17.1482L5.46867 16.7775L10 14.2411L14.5313 16.7775L15.1935 17.1482L15.0456 16.4039L14.0335 11.3106L17.8461 7.78483L18.4032 7.26964L17.6497 7.1803L12.4929 6.56888L10.3178 1.8534Z"
                              fill="none" stroke="#999999" strokeWidth="0.7"/>
                    </svg>
                </h1>
                <div className="chat__header-right">
                    <svg className="people-icon" width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.4" d="M7.40905 13.5002H3.09086C1.66001 13.5002 0.500021 12.4089 0.500021 11.0626V9.43768C0.500021 8.37057 1.23359 7.4734 2.24855 7.14324C1.69572 6.44152 1.3636 5.54268 1.3636 4.56274C1.3636 2.31903 3.10363 0.500128 5.25004 0.500128C7.39637 0.500128 9.13631 2.31903 9.13631 4.56274C9.13631 5.54268 8.8042 6.44152 8.25145 7.14324C9.26641 7.4734 9.99998 8.37057 9.99998 9.43768V11.0626C9.99998 12.4089 8.83999 13.5002 7.40905 13.5002ZM8.27272 4.56274C8.27272 2.76774 6.91947 1.31266 5.25004 1.31266C3.58062 1.31266 2.22735 2.76774 2.22735 4.56274C2.22735 6.3576 3.58062 7.81267 5.25004 7.81267C6.91947 7.81267 8.27272 6.3576 8.27272 4.56274ZM9.13631 9.64086C9.13631 8.77726 8.4397 8.05771 7.50594 7.8664C6.86949 8.34225 6.09218 8.62515 5.25004 8.62515C4.4079 8.62515 3.63051 8.34225 2.99406 7.8664C2.06038 8.05771 1.3636 8.77726 1.3636 9.64086V10.8596C1.3636 11.8692 2.31272 12.6877 3.48348 12.6877H7.01652C8.18735 12.6877 9.13631 11.8692 9.13631 10.8596V9.64086Z" fill="black"/>
                    </svg>
                    <h2 className="chat_header-people">1000</h2>
                    <Search/>
                    <svg className="bell-icon" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.4" d="M9.27469 12.1336C9.05948 13.1985 8.12304 14.0001 7.00002 14.0001C5.877 14.0001 4.94056 13.1985 4.72543 12.1336H0.500032L2.35713 8.40017V4.66678C2.35713 2.08952 4.43587 0.000165582 7.00002 0.000165582C9.56424 0.000165582 11.6429 2.08952 11.6429 4.66678V8.40017L13.5 12.1336H9.27469ZM7.00002 13.0669C7.6056 13.0669 8.11569 12.6761 8.30763 12.1336H5.6925C5.88435 12.6761 6.39444 13.0669 7.00002 13.0669ZM10.7143 8.40017V4.66678C10.7143 2.60508 9.05138 0.933529 7.00002 0.933529C4.94865 0.933529 3.28573 2.60508 3.28573 4.66678V8.40017L1.89284 11.2002H12.1071L10.7143 8.40017Z" fill="black"/>
                    </svg>
                    <svg className="burger-icon" width="6" height="17" viewBox="0 0 6 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.3">
                            <path d="M3.25001 7.00019C4.21649 7.00019 4.99997 7.78368 4.99997 8.75018C4.99997 9.71668 4.21649 10.5002 3.25001 10.5002C2.28353 10.5002 1.49997 9.71668 1.49997 8.75018C1.49997 7.78368 2.28353 7.00019 3.25001 7.00019Z" fill="black"/>
                            <path d="M3.25 1.00019C4.21648 1.00019 4.99996 1.78368 4.99996 2.75018C4.99996 3.71668 4.21648 4.50018 3.25 4.50018C2.28353 4.50018 1.49997 3.71668 1.49997 2.75018C1.49997 1.78368 2.28353 1.00019 3.25 1.00019Z" fill="black"/>
                            <path d="M3.25 13.0002C4.21648 13.0002 4.99996 13.7837 4.99996 14.7502C4.99996 15.7167 4.21648 16.5002 3.25 16.5002C2.28353 16.5002 1.49997 15.7167 1.49997 14.7502C1.49997 13.7837 2.28353 13.0002 3.25 13.0002Z" fill="black"/>
                        </g>
                    </svg>
                </div>
            </div>
            <div className="message">
                <MessageList message={message}/>
                <Message previousMessage={message} newMessage={setMessage}/>
            </div>
        </main>
    );
};

export default Chat;