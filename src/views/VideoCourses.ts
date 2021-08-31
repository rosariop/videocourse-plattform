import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';
import { Auth } from '../scripts/auth/auth';

const logo = new URL('../../../assets/open-wc-logo.svg', import.meta.url).href;

export class VideoCourses extends LitElement {
  @property({ type: String }) title = 'My app';

  @property({ type: String }) email = '';

  @property({ type: String }) password = '';

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--video-courses-background-color);
    }

    main {
      flex-grow: 1;
    }

    .logo {
      margin-top: 36px;
      animation: app-logo-spin infinite 20s linear;
    }

    @keyframes app-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    .app-footer {
      font-size: calc(12px + 0.5vmin);
      align-items: center;
    }

    .app-footer a {
      margin-left: 5px;
    }
  `;

  render() {
    return html`
      <main>
      
        <div class="logo"><img alt="open-wc logo" src=${logo} /></div>
        <h1>${this.title}</h1>
      
        <p>Edit <code>src/VideoCourses.ts</code> and save to reload.</p>
        <a class="app-link" href="https://open-wc.org/guides/developing-components/code-examples" target="_blank"
          rel="noopener noreferrer">
          Code examples
        </a>
      </main>
      
      <p class="app-footer">
        🚽 Made with love by
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/open-wc">open-wc</a>.
      </p>
      
      <div>
        <input id="user-name" type="email" @change="${this.updateEmail}" placeholder="Your username is your email address!" required>
        <input id="password" type="password" @change="${this.updatePassword}" placeholder="Your password belongs here!"
          required>
      </div>
      <button @click=${() =>{this.register()}}>REGISTER</button>
    `;
  }

  // 

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
