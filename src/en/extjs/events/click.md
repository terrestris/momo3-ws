# Event `click`

The `click` event is being fired when e.g. a button or a menu entry is clicked.

In the following exercise we'll use the `click` event of the button rendered
to the toolbar in the centered panel to load the remote data if the button is
clicked by the user.

## Exercise

* (Re-)open your `index.html` and find the instantiation of the store
  `formerMembers` (line ~29) we introduced in the former module.
* Set ```autoLoad: false``` in the store.

After reloading the page you should notice that the grid contains no data
anymore. Can you explain why?

In the next few steps we're going to fetch back our missing data by reusing the
already existing button in the toolbar as a `Load data` button:

* Find the button declaration within the panel in the center region and rename
  it accordingly (<code>text: &#39;Load data&#39;</code>).
* Register a new listener to the `click`-event and pass an anonymous function
  to it. This function will be called if the `click` event is fired by the
  button class:
[include](../snippets/event-click.js)
* Again, reload the page in the browser and click the updated `Load data`
  button.

![Load remote data `onClick`.](../assets/event-click.png)

## Dissecting the example

Let's have a more detailed look at the function we passed to the `click`
listener:

* ```javascript
function(btn) {...}
```
Every event can be fired with optional arguments passed to the listener. Here,
our anonymous handler function receives the argument `btn`, whereat the
variable `bt` holds a reference to the button instance firing the `click` event
("the clicked button").

* ```javascript
var gridpanel = this.up('gridpanel');
```
Remember, we are dealing with hierarchically structured components. Ext JS
(internally) registers all instantiated components in its `Ext.ComponentManager`.
Within this manager we can navigate across and search the application component
composition. The explanation of the manager and the corresponding
`Ext.ComponentQuery` singleton is far beyond the goals of this workshop, but it's
very recommended to have a look at the very detailed [documentation](http://docs.sencha.com/extjs/6.0/6.0.0-classic/#!/api/Ext.ComponentQuery).
Long story short: Each component provides us the method `up()` and each container
the methods `up()`, `down()` and `query()` to simply navigate across the component
hierarchy by the use of very simple filter expressions. The easiest way one can
think of is build a filter that returns *the first xtype in the lower/upper
hierarchy level* of a given component. Having this in mind, the upper method
will return the first component of xtype `gridpanel` in the upper direction based
on the pressed button.

* ```javascript
gridpanel.getStore().load();
```
Now we got the gridpanel, we can access the underlying store by using the
`getStore()` method and directly execute the method `load()` to load any
local or remote data associated with the store.
