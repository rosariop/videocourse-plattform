import { css, customElement, html, LitElement, property } from "lit-element"
import { Router } from "@vaadin/router";
import { Auth } from "../scripts/auth/auth.js";

@customElement("vid-login-panel-button")
export class LoginPanelButton extends LitElement {

    @property({type: Boolean}) loginButton = false

    @property({ type: String }) email = '';

    @property({ type: String }) password = '';
    
    @property({ type: String }) passwordRetype = '';

    static styles = css`
    .loginbutton{
        width: 12rem;
        height: 4rem;
        border-radius: 80px;
        border: 0;
        background: #133962;
        color: white;
        font-family: 'Roboto';
        font-size: 1rem;
        box-shadow: 4px 4px 4px 0px #000000;
        margin: 25px;
    }
    .loginbutton:hover{
        cursor: pointer;
        background: #194a7e;
        border: 1.5px solid black;
    }
    `;

    render(){
        return html`
            <button class="loginbutton" @click=${() => { 
                if(this.loginButton){
                    this.login();
                } else{
                    this.register();
                }
             }}>${this.loginButton? 'Login' : 'Register'}</button>
        `
    };

    async login(): Promise<void> {
        const auth: Auth = new Auth();
        auth.signInWithEmailAndPassword(this.email, this.password)
            .then(() => Router.go('/home'));
    }

    register(): void {
        // eslint-disable-next-line no-debugger
        debugger;
        if(this.password === this.passwordRetype && this.password !== ''){
            const auth: Auth = new Auth();
            auth.createUserWithEmailAndPassword(this.email, this.password);
        } else{
            const event = new CustomEvent('passwords-not-matching');
            this.dispatchEvent(event);
        }
       }
}

