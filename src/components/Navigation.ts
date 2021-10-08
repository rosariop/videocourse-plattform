import { css, customElement, html, LitElement, property } from "lit-element";

@customElement("vid-navigation")
export class Navigation extends LitElement {

    @property({ type: String }) title = '';

    @property({ type: Boolean }) purchased = false;

    @property({ type: Boolean }) sale = false;

    @property({ type: String }) imageLink = '';

    @property({ type: Number }) price = 999.99;

    private profilePicture = new URL('../../../assets/MagisterMedia-logo.svg', import.meta.url).href;

    static styles = css`

        .flex-row{
            display: flex;
            flex-direction: row;
        }

        .justify-content-between {
            justify-content: space-between;
        }

        .align-center {
            align-items: center;
        }

        .profile-picture {
            width: 50px;
            margin: 0;
        }

        .nav-items {
            list-style: none;
        }

        .nav-item {
            padding: 0 1rem 0 1rem;
        }
        
        .nav-item > a {
            text-decoration: none; 
        }

        .link__active {
            color: #FFFFFF;
        }

        .link__inactive {
            color: #A8A8A8;
        }
    `;

    render() {
        return html`
            <div class="flex-row justify-content-between align-center">
                <div>
                    <h1 class="link__active">VideoCourses by Rosario</h1>
                </div>
                <div>
                    <ul class="flex-row nav-items">
                        <li class="nav-item">
                            <a href="http://google.com" class="link__active">Home</a>
                        </li>
                        <li class="nav-item">
                            <a href="http://google.com" class="link__inactive">Purchased</a>
                        </li>
                    </ul>
                </div>
                <div class="flex-row justify-content-between">
                    <p class="link__inactive">Your Name</p>
                    <figure class="profile-picture">
                        <img src="${this.profilePicture}" alt="course-logo">
                    </figure>
                </div>
            </div>
        `;
    }
}