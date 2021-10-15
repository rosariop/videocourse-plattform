import { css, customElement, html, LitElement, property } from "lit-element";
import { Auth } from "../scripts/auth/auth.js";

@customElement("vid-navigation")
export class Navigation extends LitElement {

    @property({ type: String }) title = '';

    @property({ type: Boolean }) purchased = false;

    @property({ type: Boolean }) sale = false;

    @property({ type: String }) imageLink = '';

    @property({ type: Number }) price = 999.99;

    private profilePicture = new URL('../../../assets/MagisterMedia-logo.svg', import.meta.url).href;

    static styles = css`
        @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

        button{
            font-family: 'Roboto', sans-serif;
        }

        .flex-row{
            display: flex;
            flex-direction: row;
        }

        .logout-row{
            align-items: center;
            height: 25px;
        }

        .pointer{
            cursor: pointer;
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

        .nav-item-logout {
            background: 0;
            color: rgb(168,168,168);
            border: 0.25rem solid rgb(55, 0, 179);
            border-radius: 25px;
            margin: 0 1rem 0 0;
            padding: 6px 10px 6px 10px;
        }

        .nav-item-logout:hover {
            color: white;
            border: 0.3rem solid rgb(70, 0, 230);
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
                <div class="flex-row justify-content-between logout-row">
                    <button class="nav-item-logout pointer" @click=${() => { Auth.logout() }}>logout</button>
                    <p class="link__inactive">Your Name</p>
                    <figure class="profile-picture">
                        <img src="${this.profilePicture}" alt="course-logo">
                    </figure>
                </div>
            </div>
        `;
    }
}