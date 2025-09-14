import type { ReactElement } from "react";
import confetti from 'canvas-confetti';

import type { IButton } from "../../interfaces/IButton";

const handleClick = () => {
    confetti({
        particleCount: 100,
        startVelocity: 30,
        spread: 360,
        origin: {
            x: Math.random(),
            y: Math.random() - 0.2
        }
    });
};

const Button = ({text='Some text', icon, size='medium', variant='primary', fullWidth=false, isDisabled=false}: IButton): ReactElement => {
    return (
        <button 
        disabled={isDisabled}
        className={`button ${variant} ${size} ${fullWidth ? 'full-width' : ''}`}
        onClick = {handleClick}
        >
            {icon && <span className="button-icon">{icon}</span>}
            {text}
        </button>
    )
}

export default Button;

// ${isDisabled ? 'disabled' : ''}