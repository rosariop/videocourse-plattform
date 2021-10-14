import { LitElement, html, css } from "lit-element";
import { state, customElement, property } from "lit-element/lib/decorators";

@customElement("vid-slider")
export class Slider extends LitElement {
    
    // JAVASCRIPT 
    @state()
    private imageIndex = 0;

    @property({type: Number}) interval = 0

    
    private images = [
        "../../../assets/MagisterMedia-logo.svg", "../../../assets/open-wc-logo.svg", "../../../assets/MagisterMedia-logo2.svg"
    ]

    private imageLink(i: number): string {
        return new URL(this.images[i], import.meta.url).href;
    }

    private setIndex(pivot: number): void {
                setTimeout(()=> {
                    if (this.imageIndex === this.images.length-1 && pivot === 1) {
                        this.imageIndex = 0;
                    } else {
                        this.imageIndex += pivot;
                    }
                }, 1000);
    }

    
    firstUpdated(){
        // TODO: slider speed interval set here
        setInterval(() => this.setIndex(1), this.interval);
    }

    // Style
    static styles= css`
        .slider__height{
            max-height: 300px;
        }
    `;

    // HTML
    render() {
        return html`
            <div>
                <div>
                    <figure>
                        <img class="slider__height" src="${this.imageLink(this.imageIndex)}" alt="course-logo">
                    </figure>
                </div>
            </div>
        `;
    }

}