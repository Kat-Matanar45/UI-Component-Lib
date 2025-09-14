import type { ReactElement } from "react";

import Button from "../Button/Button";

const Main = (): ReactElement => {
    return (
        <main className="component-showcase">
            <section className="component-group">
            <h2>Variants</h2>
            <div className="component-card">
                <Button text='primary' variant="primary"/>
                <Button text='secondary' variant="secondary"/>
                <Button text="danger" variant="danger"/>
                <Button text="gradient" variant="gradient"/>
                <Button text="outline" variant="outline"/>
            </div>
            </section>

            <section className="component-group">
                <h2>Sizes</h2>
                <div className="component-card">
                    <Button text="small" size="small"/>
                    <Button text="medium"/>
                    <Button text="large" size="large"/>
                </div>
            </section>

            <section className="component-group">
                <h2>Button Icon</h2>
                <div className="component-card">
                    <Button text="music" icon='🎶'/>
                    <Button text="love" icon='❤'/>
                    <Button text="like" icon='👍'/>
                    <Button text="done" icon='✔'/>
                    <Button text="menu" icon='🍔'/>
                </div>
            </section>

            <section className="component-group">
                <h2>Button States</h2>
                <div className="component-card">
                    <Button text="Default" variant="primary"/>
                    <Button text="Disabled" variant="primary" isDisabled/>
                </div>
            </section>

            <section className="component-group">
                <h2>Full Width Button</h2>
                <div className="component-card">
                    <Button text="Full Width" variant="secondary" fullWidth/>
                </div>
            </section>

        </main>
    )
}

export default Main;