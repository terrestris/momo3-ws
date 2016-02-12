# Column

The `Column` layout is the layout style of choice for creating structural
layouts in a multi-column format where the width of each column can be specified
as a percentage or fixed width, but the height is allowed to vary based on the
content.

The layout does not have any direct `config` options, but it does support a
specific `config` property of `columnWidth` that can be included in the `config`
of any panel added to it. The layout will use the `columnWidth` (if present) or
`width` of each panel during layout to determine how to size each panel. If
`width` or `columnWidth` is not specified for a given panel, its width will
default to the panel's `width` (or auto).

The `width` property is always evaluated as pixels and must be a number greater
than or equal to 1. The `columnWidth` property is always evaluated as a
percentage and must be a decimal value greater than 0 and less than 1 (e.g. .25).

## Exercise

* (Re-)open your `index.html` and update the code creating the `Ext.container.Viewport`
  component to match the following snippet:
  [include](../snippets/layout-column.js)
* Reload the page in the browser and take a look at the result:

![Column layout.](../assets/layout-column.png)
