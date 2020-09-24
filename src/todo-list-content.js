import { LitElement, html, css } from 'lit-element';

class TodoListContent extends LitElement {
    static styles = styles();

    static get properties() {
        return {items: {type: Object, reflect: true}};
    }

    constructor() {
        super();
        this.items = [];
    }

    render() {
        return html`
            <div class="todo-list-content">
                ${this.items.map(item => (
            html`<todo-list-item ?checked="${item.checked}" itemId="${item.id}">${item.value}</todo-list-item>`
        ))}
            </div>
        `;
    }
}

window.customElements.define('todo-list-content', TodoListContent);

function styles() {
    return css`
        todo-list-item {
            margin-bottom: 10px;
        }
        
        todo-list-item:last-of-type {
            margin-bottom: 0;
        }
    `;
}