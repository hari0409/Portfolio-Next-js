import React from 'react'
import {RoughNotation} from "react-rough-notation";

const Stripe = ({color,children}) => {
    const animationDuration = Math.floor(30 * children.length);
    return (
        <RoughNotation 
            type="highlight"
            multiline={true}
            padding={[0, 2]}
            iterations={1}
            animationDuration={animationDuration}
            strokeWidth={5}
            color={color}
        >
            {children}
        </RoughNotation>
    )
}

export default Stripe
