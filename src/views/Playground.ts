import { customElement, html } from "lit-element";
import { PanelBaseView } from "./PanelBaseView.js";
import "../components/Card.js";
import "../components/Slider.js";


@customElement("vid-playground")
export class Playground extends PanelBaseView {

    private courses = [{}, {}, {}, {}];

    render(){
        return html`
        <link rel="stylesheet" href="./assets/css/bootstrap.css">
        <!-- Html goes here -->
        <div class="container">
          <vid-navigation></vid-navigation>
        </div>
        <vid-card .sale=${false} .price=${19.99} .title=${`SpringBoot 101`}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam  
        </vid-card>

        <h1 style="color:white"> TESTROW </h1>
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
        `
    }
}