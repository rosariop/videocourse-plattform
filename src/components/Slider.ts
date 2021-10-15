import { LitElement, html, css } from "lit-element";
import { state, customElement, property } from "lit-element/lib/decorators";

@customElement("vid-slider")
export class Slider extends LitElement {
    
    // JAVASCRIPT 
    @state()
    private imageIndex = 0;

    // Interval in ms
    @property({type: Number}) interval = 0

    
    private images = [
        "../../../assets/banner.png",
        "https://kinsta.com/wp-content/uploads/2018/07/social-media-image-sizes-1.png"
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
        .slider__figure{
            margin: 0;
        }

        .slider__size{
            max-height: 300px;
            max-width: 100%;
        }
    `;

    // HTML
    render() {
        return html`
            <div>
                <div>
                    <figure class="slider__figure">
                        <img class="slider__size" src="${this.imageLink(this.imageIndex)}" alt="course-logo">
                    </figure>
                </div>
            </div>
        `;
    }

}