import React, {FC} from 'react';
import {IconLabelButtons} from "../Button/Button";
import styles from '../../styles/Message.module.scss';
import {useTypedDispatch} from "../../hooks/useTypedDispatch";
import {addMess} from "../../redux/Messages/MessagesSlice";


interface FormProps {
    text: string
    setText: (a: string) => void
    chatId?: string
    messageId: string
}

export const Form:FC<FormProps> = ({text,setText,chatId,messageId}: FormProps) => {
    const dispatch = useTypedDispatch()
    const nine = 9;

    const handleClick = () => {
        if(text.trim().length){
            if(nine && chatId){
                dispatch(addMess({
                    id:+messageId + 1,
                    message:text,
                    user_id:nine,
                    recipient_id:+chatId,
                    timestamp:new Date().toISOString(),
                }))
                setText("")
            }
        }
        window.location.reload()
    };

    return (
        <div className={styles.collab}>
            <input
                placeholder="Write a message..."
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <IconLabelButtons handleClick={handleClick}/>
        </div>
    )
}