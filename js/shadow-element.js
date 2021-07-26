class ShadowElement extends HTMLElement {
	constructor() {
		super();
		const root = this.attachShadow({ mode: 'open' });
		[...this.children].forEach(child => {
			this.removeChild(child);
			root.appendChild(child);
		});
	}
}
customElements.define('shadow-element', ShadowElement);
