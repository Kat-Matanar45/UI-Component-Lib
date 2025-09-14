import type { ReactElement } from "react";

const Footer = (): ReactElement => {
    return (
        <footer className="app-footer">
            <p>2025 UI Component Library. All rights reserved.</p>
            <div className="technologies-used">
            <strong>Technologies used:</strong> React, JSX, useState, Conditional Rendering, CSS Modules, Event Handling.
            </div>
        </footer>
    )
}

export default Footer;