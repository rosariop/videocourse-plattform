import { css, customElement, html, LitElement, property } from "lit-element";
import { Auth } from "../scripts/auth/auth.js";

@customElement("vid-register")
export class Register extends LitElement {

    @property({ type: String }) email = '';

    @property({ type: String }) password = '';

    static styles = css`
    .mainWrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .inputWrapper{
        display: flex;
        flex-direction: column;
    }

    .input{
        margin: 5px
    }
    /* Css comes here */
`;

    render() {
        return html`
    <!-- Html goes here -->
    <main class="mainWrapper">
        <h1>Register</h1>
        <div class="inputWrapper">
        <input class="input" id="user-name" type="email" @change="${this.updateEmail}" placeholder="Your username is your email address!" required>
        <input class="input" id="password" type="password" @change="${this.updatePassword}" placeholder="Your password belongs here!"
          required>
      </div>
      <button @click=${() =>{this.register()}}>REGISTER</button>
    </main>
    `
    }

    updateEmail(e: { target: HTMLInputElement }): void {
        this.email = e.target.value
      }
    
      updatePassword(e: { target: HTMLInputElement }): void {
        this.password = e.target.value
      }
    
      register(): void {
        console.warn('wir sind drin!')
    
       const auth: Auth = new Auth();
        auth.createUserWithEmailAndPassword(this.email, this.password);
      }
}