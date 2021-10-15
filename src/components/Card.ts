import { customElement, LitElement, css, html, property } from "lit-element";

@customElement("vid-card")
export class Card extends LitElement {

    @property({ type: String }) title = '';

    @property({ type: Boolean }) purchased = false;

    @property({ type: Boolean }) sale = false;

    @property({ type: String }) imageLink = '';

    @property({ type: Number }) price = 999.99;

    static styles = css`

    *{
        color: white
    }

    .card:hover{
        cursor: pointer;
    }

    .card{
        width: 100%;
        border: black solid 4px;
        border-radius: 25px;
        display: flex;
        flex-direction: column;
        background: rgb(23, 23, 23);
        box-shadow: 10px 10px 4px rgba(0, 0, 0, 0.5); 
    }
    .card--image{
        display: block;
        height: 15rem;
        margin: 0;
        overflow: hidden;
    }

    .card--banner{
        display: flex;
        align-content: center;
        justify-content: center;
    }

    .card--price{
        background-color: #EBFF00;
        color: black;
        height: 2rem
    }

    .card--sale{
        background-color: #D90000;
        height: 2rem
    }

    .card--body{
        padding: 0 1rem 0 1rem;
    }

    .card--body__text{
        padding: 0 0 0 1rem;
    }

    .card--pricing--sale{
        color: white
    }
    
    .card--pricing--price{
        color: black;
    }

    .card--pricing__text{
        font-weight: bold;
    }

    .card--title{
        color: #FFF;
    }

    .card--body__text{
        color: #FFF;
    }

    .align-self-center{
        align-self: center;
    }

    .button{
        width: 10rem;
        height: 3rem;
        border-radius: 15px;
        border: none;
        background: #3700B3;
        box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5); 
    }

    button:hover{
        cursor: pointer;
        color: #EBFF00;
    }

    .button-container{
        display: flex;
        margin: 2rem 0;
        justify-content: center;
    }

    `;

    // private courseImage = new URL(`../../../assets/${this.imageLink}`, import.meta.url).href;

    private courseImage = new URL('../../../assets/MagisterMedia-logo.svg', import.meta.url).href;

    render() {
        return html`
            <!-- dummy container -->
            <div class="card">
                <figure class="card--image">
                    <img src="${this.courseImage}" alt="course-logo">
                </figure>
        
                ${this.purchased ? `` : html`
                <div class="card--banner ${this.sale ? `card--sale` : `card--price`}">
                    <p class="align-self-center card--pricing__text card--pricing--${this.sale ? `sale` : `price`}">
                        ${this.sale ? `SALE` : ``} ${this.price}€
                    </p>
                </div>`
            }
                <div class="card--body">
                    <h3 class="card--title">
                        ${this.title}
                    </h3>
                    <p class="card--body__text">
                        <slot></slot>
                    </p>
                </div>
                <div class="button-container">
                    ${this.purchased ? html`
                    <button class="button" onclick="console.log('works')">
                        watch now
                    </button>` : html`
                    <button class="button" onclick="console.log('works')">
                        enroll now
                    </button>
                    `}
                </div>
            </div>
        `;
    }
}