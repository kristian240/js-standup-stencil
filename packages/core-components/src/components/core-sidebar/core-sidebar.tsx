import { Component, Host, h, Element, Prop, Method, State } from '@stencil/core';

@Component({
  tag: 'core-sidebar',
  styleUrl: 'core-sidebar.css',
  shadow: true,
})
export class CoreSidebar {
  static _id = 0;
  @Element()
  el!: HTMLCoreSidebarElement;

  /**
   * Prop to define if sidebar is expanded or not
   */
  @Prop({
    mutable: true,
    reflect: true,
  })
  expanded: boolean = false;

  @Method()
  async toggle() {
    this.expanded = !this.expanded;
  }

  @Method()
  async expand() {
    this.expanded = true;
  }

  @Method()
  async collapse() {
    this.expanded = false;
  }

  @State()
  counter = 0;

  componentWillLoad() {
    this.el.id ||= `sidebar-${CoreSidebar._id++}`;
  }

  render() {
    const sidebarHeaderEl = this.el.querySelector('[slot=header]');
    const sidebarHeaderId = sidebarHeaderEl?.id || `${this.el.id}-header`;

    const sidebarContentEl = this.el.querySelector('[slot=content]');
    const sidebarContentId = sidebarContentEl?.id || `${this.el.id}-content`;

    return (
      <Host aria-labelledby={sidebarHeaderId} aria-describedby={sidebarContentId} aria-expanded={this.expanded}>
        <slot name="header"></slot>
        <slot name="content"></slot>

        <div style={{ display: 'flex' }}>
          <button style={{ marginRight: '4px' }} onClick={() => (this.counter += 1)}>
            +
          </button>
          <pre>{this.counter}</pre>
        </div>

        <slot name="footer"></slot>
      </Host>
    );
  }
}
