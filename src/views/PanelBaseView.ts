import { css, LitElement } from "lit-element";

export class PanelBaseView extends LitElement{
    static styles = css`
    .loginPanel{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 75%;
        max-width: 800px;
        
    }
    
    .loginButton{
        width: 12rem;
        height: 4rem;
        border-radius: 80px;
        border: 0;
        background: #133962;
        color: white;
        font-family: 'Roboto';
        font-size: 1rem;
        box-shadow: 4px 4px 4px 0px #000000;
        margin: 25px;
    }
    .loginButton:hover{
        cursor: pointer;
        background: #194a7e;
        border: 1.5px solid black;
    }
    `;
}