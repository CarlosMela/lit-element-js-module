import { LitElement, html, css } from 'lit-element';

class TodoListPlaceholder extends LitElement {
    static styles = styles();

    render() {
        return html`
            <div class="todo-list-placeholder">
                <div class="todo-list-header-placeholder">
                    <slot name="header"></slot>
                </div>
                <div class="todo-list-content-placeholder">
                    <slot name="content"></slot>
                </div>
            </div>
        `;
    }
}

window.customElements.define('todo-list-placeholder', TodoListPlaceholder);

function styles() {
    return css`
            .todo-list-placeholder {
                border: 1px solid #ddd;
                padding: 10px;
            }
    `;
}