import { css, html, LitElement, customElement } from "lit-element";
import {
    PreventAndRedirectCommands,
    RedirectResult,
    RouterLocation,
  } from '@vaadin/router'
import { Auth } from "../../scripts/auth/auth.js";

@customElement("vid-home")
export class Home extends LitElement {

    static styles = css`
        /* Css comes here */
    `;

    render(){
        return html`
        <!-- Html goes here -->
        <h1>Vaadin works</h1>
        `
    }

    private isAuthorized(){
      return Auth.isTokenValid("TODO Here comes the token saved in the local storage");
    }

    public onBeforeEnter(
        location: RouterLocation,
        commands: PreventAndRedirectCommands
      ): Promise<unknown> | RedirectResult | undefined {
        if (!this.isAuthorized()) {
          return new Promise((resolve) => {
              resolve(commands.redirect('/'));
          });
        }
        return undefined;
      }
}