import { LitElement, html, css } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';

class TodoListItem extends LitElement {
    static styles = styles();

    static get properties() {
        return {
            checked: {type: Boolean},
            itemId: {type: Number}
        };
    }

    constructor() {
        super();
    }

    checkItem = (domEvent) => {
        domEvent.stopImmediatePropagation();
        window.dispatchEvent(new CustomEvent('toggle-item', {detail: {id: this.itemId}}));
    };

    deleteItem = (domEvent) => {
        domEvent.stopImmediatePropagation();
        window.dispatchEvent(new CustomEvent('delete-item', {detail: {id: this.itemId}}));
    };

    render() {
        return html`
            <div @click="${this.checkItem}" class="${classMap({"todo-list-item": true, "checked": this.checked})}">
                <input type="checkbox" ?checked="${this.checked}" />
                <span><slot></slot></span>
                <button @click="${this.deleteItem}">Delete</button>
            </div>
        `;
    }
}


window.customElements.define('todo-list-item', TodoListItem);


function styles() {
    return css`
        :host {
            display: block;
        }
         
        .todo-list-item {
            border: 1px solid #ddd;
            padding: 10px;
            display: flex;
            font-family: sans-serif;
            align-items: center;
        }
        
        button {
            background: red;
            padding: 5px;
            margin: 5px;
            color: white;
            border: none;
        }
        
        span {
            flex-grow: 1;
            margin-left: 10px;
        }
        
        .checked span {
            text-decoration: line-through;
        }
    `;
}