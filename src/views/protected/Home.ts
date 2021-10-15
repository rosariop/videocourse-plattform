/* eslint-disable import/no-extraneous-dependencies */
import { html, LitElement, customElement, css } from "lit-element";
import {
  PreventAndRedirectCommands,
  RedirectResult,
  RouterLocation,
} from '@vaadin/router'
import { getAuth } from "@firebase/auth";
import "../../components/Navigation.js";
import "../../components/Card.js"

@customElement("vid-home")
export class Home extends LitElement {

  static styles= css`
    h3{
      color: white;
      margin: 0;
      padding: 15px 0 15px 0;
    }
  `;

  private courses = [{}, {}, {}, {}];

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

  render() {
    return html`
        <link rel="stylesheet" href="./assets/css/bootstrap.css">
        <!-- Html goes here -->
        <div class="container">
          <vid-navigation></vid-navigation>
          <vid-slider .interval=${10000}></vid-slider>
          <h3>Resume Watching: </h3>
          <div class="row">
            ${
              // TODO: Element in Lambda
              this.courses.map(() => html`
                    <div class="col-3">
                      <vid-card .purchased=${true} .sale=${false} .price=${19.99} .title=${`SpringBoot 101`}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam
                      </vid-card>
                    </div>
                    `)
                
                }
          </div>

          <h3>Other Courses:</h3>
          <div class="row">
          ${
              // TODO: Element in Lambda
              this.courses.map(() => html`
                    <div class="col-3">
                      <vid-card .sale=${false} .price=${19.99} .title=${`SpringBoot 101`}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam
                      </vid-card>
                    </div>
                    `)
                }
          </div>
        </div>
        `;
  }
}