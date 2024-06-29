import React from "react";

export default function studentCard(props){
    return(
        <>
        
        <img src={props.studentImg} alt={props.studentName} />
        <h1>{props.studentName}</h1>
        <p>{props.studentClass}</p>

        </>
    )
}