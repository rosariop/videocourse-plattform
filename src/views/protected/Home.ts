/* eslint-disable import/no-extraneous-dependencies */
import { css, html, LitElement, customElement } from "lit-element";
import {
  PreventAndRedirectCommands,
  RedirectResult,
  RouterLocation,
} from '@vaadin/router'
import { getAuth } from "@firebase/auth";
import { Auth } from "../../scripts/auth/auth.js";
import "../../components/Navigation.js";

@customElement("vid-home")
export class Home extends LitElement {

  static styles = css`
        /* Css comes here */
    `;

  render() {
    return html`
        <link rel="stylesheet" href="./assets/bootstrap-grid.css">
        <!-- Html goes here -->
        <div class="container">
          <vid-navigation></vid-navigation>
          <h1>Vaadin works</h1>
          <button @click=${()=> { Auth.logout() }}>logout</button>
        </div>
        `;
  }

  public onBeforeEnter(
    location: RouterLocation,
    commands: PreventAndRedirectCommands
  ): Promise<unknown> | RedirectResult | undefined {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      return new Promise((resolve) => {
        // TODO: remove guarded
        console.warn('Guarded')
        resolve(commands.redirect('/'));
      });
    }
    return undefined;
  }
}