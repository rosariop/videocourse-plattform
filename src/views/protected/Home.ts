import { css, html, LitElement, customElement } from "lit-element";
import {
    PreventAndRedirectCommands,
    RedirectResult,
    RouterLocation,
  } from '@vaadin/router'

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

    // eslint-disable-next-line class-methods-use-this
    private isAuthorized(){
      return false;
    }

    public onBeforeEnter(
        location: RouterLocation,
        commands: PreventAndRedirectCommands
      ): Promise<unknown> | RedirectResult | undefined {
        if (!this.isAuthorized()) {
          console.log('Guarded!');
          return new Promise((resolve) => {
              resolve(commands.redirect('/'));
          });
        }
        return undefined;
      }
}