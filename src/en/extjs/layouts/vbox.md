# VBox

The `VBox` layouts arranges items vertically across the container. This layout
optionally divides available vertical space between child items containing a
numeric `flex` configuration.

This layout may also be used to set the widths of child items by configuring
it with the `align` option. Additionally you can specify how the child items of
the container are packed together by setting the `pack` option.

## Exercise

* (Re-)open your `index.html` and update the code creating the `Ext.container.Viewport`
  component to match the following snippet:
  [include](../snippets/layout-vbox.js)
* Reload the page in the browser and take a look at the result:

![VBox layout.](../assets/layout-vbox.png)
