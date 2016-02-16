# Accordion

The `Accordion` layout is a layout that manages multiple Panels in an expandable
accordion style such that by default only one panel can be expanded at any given
time (set `multi`-config to have more open). Each Panel has built-in support for
expanding and collapsing.

> *Note:* Only panels and all subclasses of `Ext.panel.Panel` may be used in
          an accordion layout container.

## Exercise

* (Re-)open your `index.html` and update the code creating the `Ext.container.Viewport`
  component to match the following snippet:
  [include](../snippets/layout-accordion.js)
* Reload the page in the browser and take a look at the result:

![Accordion layout.](../assets/layout-accordion.png)
