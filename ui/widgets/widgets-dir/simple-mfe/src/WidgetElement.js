import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const ATTRIBUTES = {
    name: 'name'
};

class WidgetElement extends HTMLElement {

    static get observedAttributes() {
        return Object.values(ATTRIBUTES);
    }

    connectedCallback() {
        this.mountPoint = document.createElement('div');
        this.appendChild(this.mountPoint);

        this.root = createRoot(this.mountPoint);
        this.render();
    }

    attributeChangedCallback(attribute, oldValue, newValue) {
        if (!WidgetElement.observedAttributes.includes(attribute)) {
            throw new Error(`Untracked changed attributes: ${attribute}`)
        }
        if (this.mountPoint && newValue !== oldValue) {
            this.render();
        }
    }

    render() {
        const name = this.getAttribute(ATTRIBUTES.name);

        this.root.render(
            <App name={name} />
        );
    }
}

customElements.define('simple-mfe', WidgetElement);
