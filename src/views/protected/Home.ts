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

    authenticatedDummy = false;

    public onBeforeEnter(
        location: RouterLocation,
        commands: PreventAndRedirectCommands
      ): Promise<unknown> | RedirectResult | undefined {
        if (this.authenticatedDummy) {
          console.log('OnBeforeEnter');
    
          return new Promise(resolve => {
            setTimeout(() => {
              resolve(commands.redirect('/home'));
            }, 2000);
          });
        }
        return undefined;
      }
}