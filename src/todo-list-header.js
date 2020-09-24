import {html, LitElement, css} from 'lit-element';

class TodoListHeader extends LitElement {
    static styles = styles();

    get textfield() {
        return this.renderRoot.querySelector('input');
    }

    addItem = () => {
        const value = this.textfield.value;
        if(!value) return;

        window.dispatchEvent(new CustomEvent('add-item', {detail: {
                value: this.textfield.value,
                checked: false,
                id: new Date().getTime()
            }}));

        this.textfield.value = '';
    };

    shortcutListener = (e) => {
        if (e.key === 'Enter') {
            this.addItem();
        }
    };


    render() {
        return html`
            <div class="todo-list-header">
                <input type="text" placeholder="Add item..." @keyup="${this.shortcutListener}"/>
                <button @click="${this.addItem}">Add</button>
            </div>
        `;
    }
}

window.customElements.define('todo-list-header', TodoListHeader);


function styles() {
    return css`
        .todo-list-header {
            display: flex;
            margin-bottom: 10px;    
        }
        
        .todo-list-header input {
            flex-grow: 1;
            margin-right: 10px;
            padding: 10px;
        }
            
        .todo-list-header button {
            background: green;
            border: none;
            color: white;
            flex-basis: 100px;
        }
    `;
}