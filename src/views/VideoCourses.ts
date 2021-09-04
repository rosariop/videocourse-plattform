import { css, html, LitElement } from "lit-element";
import { LoginPanel } from "../components/LoginPanel.js";

export class VideoCourses extends LitElement {

    static styles = css`
    .loginpanel{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 75%;
        max-width: 800px;
        
    }
    /* Css comes here */
    `;

    private loginpanel = new LoginPanel();

    render() {
        return html`
        <div class="loginpanel">
            ${this.loginpanel}
        </div>
    `
    }

}