import { customElement, html } from "lit-element";
import { PanelBaseView } from "./PanelBaseView.js";
import "../components/Card.js";


@customElement("vid-playground")
export class Playground extends PanelBaseView {
    render(){
        return html`
        <vid-card .sale=${false} .price=${19.99} .title=${`SpringBoot 101`}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam  
        </vid-card>
        `
    }
}