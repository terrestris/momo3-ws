# Events

In Ext JS `events` are signals from a class that are `fired` if anything happened
to a class. Events are fired globally in the Ext namespace so that every class
can `listen` to those. In our Ext JS application we can use these events to code
specific reponses that will be executed if a certain event is being fired. Nearly
all Ext JS components and classes fire different kinds of events at their
lifecycle. For example, each class inherited from `Ext.Component` fires the
event `added` after the component had been added to a container. We can listen
for that event by configuring a simple `listeners` object.

In this section we'll get to know three events fired by different components to
get a basic idea about the potential behind `events` and `listeners`.

* [Event click](./click.md)
* [Event afterrender](./afterrender.md)
* [Event change](./change.md)
