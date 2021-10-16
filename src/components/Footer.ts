import { css, customElement, html, LitElement } from "lit-element";

@customElement("vid-footer")
export class Footer extends LitElement {

    static styles = css `
        *{
            background-color: black;
            color: white;
        }

        a{
            color: white;
            text-decoration: none;
            cursor: pointer;
        }

        .footer{
            margin: 30px 0 0 0 ;
        }

        .flex-center{
            display: flex;
            justify-content: center;
        }

        .column{
            flex-direction: column;
        }

        .p-20__top{
            padding: 20px 0 0 0;
        }
    `;

    render() {
        return html`
        <link rel="stylesheet" href="./assets/css/bootstrap.css">
            <footer class="footer">
                <div class="row p-20__top">
                    <div class="col-4">
                        <h4 class="flex-center">Follow us on</h4>
                        <ul class="flex-center column">
                            <li class="flex-center">
                                <a href="https://google.com">YouTube</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-4">
                        <ul class="flex-center column">
                            <li class="flex-center">
                                <a href="https://google.com">YouTube</a>
                            </li>
                            <li class="flex-center">
                                <a href="https://google.com">YouTube</a>
                            </li>
                            <li class="flex-center">
                                <a href="https://google.com">YouTube</a>
                            </li>
                            <li class="flex-center">Magister Media &copy;2021</li>
                        </ul>
                    </div>
                    <div class="col-4">
                        <figure class="flex-center">
                            <img width="100px" src="../../assets/MagisterMedia-logo.svg" alt="course-logo">
                        </figure>
                    </div>
                </div>
            </footer>
        `
    }
}