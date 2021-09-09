import { customElement, html, property } from "lit-element";
import { PanelBaseView } from "./PanelBaseView.js";

@customElement("vid-register")
export class Register extends PanelBaseView {

    @property({ type: String }) email = '';

    @property({ type: String }) password = '';

    @property({ type: String }) passwordRetype = '';
    
    @property({ type: Boolean }) showError = false;

    render() {
        return html`
        <div class="loginPanel">
            <vid-login-panel @updated-email="${(e: any) => this.updateMail(e)}"
                @updated-password="${(e: any) => this.updatePassword(e)}"
                @updated-password-retype="${(e: any) => this.updateRetype(e)}">
                <vid-login-panel-button .email="${this.email}" .password="${this.password}" .passwordRetype="${this.passwordRetype}" .loginButton="${false}"
                @passwords-not-matching="${() => {this.showError = true}}"></vid-login-panel-button>
            </vid-login-panel>
            ${this.showError ? html`<p style="color: red">Password does not match retype!</p>` : ``}
        </div>
    `
    }

    private updateMail(e: any) {
        this.email = e.detail.email;
    }

    private updatePassword(e: any) {
        this.password = e.detail.password;
    }

    private updateRetype(e: any) {
        this.passwordRetype = e.detail.passwordRetype;
    }
}