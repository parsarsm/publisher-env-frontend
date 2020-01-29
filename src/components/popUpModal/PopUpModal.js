import React from "react";
import "./popUpModal.css"

export default function (props) {
    return (
        <div className={'popUpModalWrapper' + ' ' + (props.show ? '' : 'hidden')}>
            {props.children}
        </div>
    )
}