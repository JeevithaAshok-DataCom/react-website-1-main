import React from "react";
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
    to,
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    const classNames = `btn ${checkButtonStyle} ${checkButtonSize}`;

    if (to) {
        // Render a Link styled as a button
        return (
            <Link to={to} className={classNames} onClick={onClick}>
                {children}
            </Link>
        );
    }

    // Render a regular button
    return (
        <button className={classNames} onClick={onClick} type={type}>
            {children}
        </button>
    );
};