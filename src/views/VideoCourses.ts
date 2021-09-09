import { html, property } from "lit-element";
import "../components/LoginPanel.js";
import "../components/LoginPanelButton.js"
import { PanelBaseView } from "./PanelBaseView.js";

export class VideoCourses extends PanelBaseView {

    @property({ type: String }) email = '';

    @property({ type: String }) password = '';
    
    @property({ type: String }) passwordRetype = '';

    render() {
        return html`
        <div class="loginpanel">
            <vid-loginpanel .isLogin="${true}" @updated-email="${(e: any) => this.updateMail(e)}"
                @updated-password="${(e: any) => this.updatePassword(e)}">
                <vid-login-panel-button .email="${this.email}" .password="${this.password}" .loginButton="${true}"></vid-login-panel-button>
            </vid-loginpanel>
        </div>
    `
    }

    private updateMail(e: any) {
        this.email = e.detail.email;
    }

    private updatePassword(e: any) {
        this.password = e.detail.password;
    }
}