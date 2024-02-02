import React from "react"
import { useState } from "react";
import ReactCardFlip from 'react-card-flip';


export default function ProjCard(props) {

    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div className="card">
            <img src={`${props.img}`} className="card--image" />

        </div>

    )
}


