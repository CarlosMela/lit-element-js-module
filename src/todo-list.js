import {html, LitElement} from 'lit-element';

class TodoList extends LitElement {
    static get properties() {
        return {items: {type: Array}};
    }

    constructor() {
        super();
        this.items = [];
    }

    addItem = (customEvent) => {
        this.items = [...this.items, customEvent.detail];
    }

    deleteItem = (customEvent) => {
        this.items = this.items.filter(item => item.id !== customEvent.detail.id);
    }

    toggleItem = (customEvent) => {
        this.items = this.items
            .map(item => {
                item.checked = item.id === customEvent.detail.id ? !item.checked : item.checked;
                return item;
            });
    }

    connectedCallback() {
        super.connectedCallback();
        window.addEventListener('add-item', this.addItem);
        window.addEventListener('delete-item', this.deleteItem);
        window.addEventListener('toggle-item', this.toggleItem);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        window.removeEventListener('add-item', this.addItem);
        window.removeEventListener('delete-item', this.deleteItem);
        window.removeEventListener('toggle-item', this.toggleItem);
    }

    render() {
        return html`
            <div class="todo-list">
                <todo-list-placeholder>
                    <todo-list-header slot="header"></todo-list-header>
                    <todo-list-content slot="content" .items="${this.items}"></todo-list-content>
                </todo-list-placeholder>
            </div>
        `;
    }
}

window.customElements.define('todo-list', TodoList);