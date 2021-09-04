import { Router } from "@vaadin/router";
import { css, customElement, html, LitElement, property } from "lit-element";
import { Auth } from "../scripts/auth/auth.js";

@customElement("vid-loginpanel")
export class LoginPanel extends LitElement {

    @property({ type: String }) email = '';

    @property({ type: String }) password = '';

    static styles = css`
    /* TODO: Style button */
    .h1{
        margin: 0;
        color: white;
        font-weight: 100;
    }

    .panelwrapper{
        margin: auto auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .panel{
        background: #171717;
        border: 3px black solid;
        border-radius: 80px;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        box-shadow: 10px 10px 4px 0px #000000;
    }

    .logocontainer{
        max-width: 250px !important;
        margin-bottom: 0 !important;
    }

    .itemcontainer{
        display: flex;
        justify-content: center;
        margin: 10px;
        width: 75%
    }
    /* Css comes here */

    .inputfield {
        background: #121212;
        border-top: 0;
        border-right: 0;
        border-left: 0;
        border-color: #133962;
        height: 3rem;
        width: 75%;
        text-align: center;
        color: white;
        font-size: 1.5rem;
    }
    
    .inputfield::placeholder{
        color: #202020;
        font-size: 1.5rem;
    }
    .inputfield:not(:placeholder-shown) {
        background: #121212;
    }
`;

    private logo = new URL('../../../assets/MagisterMedia-logo.svg', import.meta.url).href;

    render() {
        return html`
        <div class="panelwrapper">
            <div class="panel">
                <div class="itemcontainer logocontainer">
                    <img src="${this.logo}" alt="logo">
                </div>
                <div class="itemcontainer">
                    <h1 class="h1">Videocourses</h1>
                </div>
                <div class="itemcontainer">
                    <input id="email" type="email" class="inputfield" @change="${this.updateEmail}" placeholder="E-Mail Address here..." />
                </div>
                <div class="itemcontainer">
                    <input id="password" type="password" class="inputfield" @change="${this.updatePassword}" placeholder="Password here..." />
                </div>
                <div class="itemcontainer">
                    <button @click=${()=> { this.login() }}>Login</button>
                </div>
            </div>
        </div>`;
    }

    updateEmail(e: { target: HTMLInputElement }): void {
        this.email = e.target.value
    }

    updatePassword(e: { target: HTMLInputElement }): void {
        this.password = e.target.value
    }

    async login(): Promise<void> {
        const auth: Auth = new Auth();
        auth.signInWithEmailAndPassword(this.email, this.password)
            .then(() => Router.go('/home'));
    }
}