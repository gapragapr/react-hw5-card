import React from 'react'

export default function Card(props){

    return(
        <div className="card">
            {props.children}
            <div className="card-body">
                <div className="card-title">
                    <p>{props.title}</p>
                </div>
                <div className="card-content">
                    <p>{props.content}</p>
                </div>
                <button>{props.buttonContent}</button>
            </div>
        </div>
    )
}