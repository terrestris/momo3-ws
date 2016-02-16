Ext.create('Ext.container.Viewport', {
    layout: 'border',
    defaults: {
        bodyPadding: 15,
        collapsible: true,
        split: true
    },
    items: [{
        title: 'Item 1',
        region: 'north',
        height: 100,
        html: 'Content 1'
    }, {
        title: 'Item 2',
        region: 'east',
        width: 150,
        html: 'Content 2'
    }, {
        title: 'Item 3',
        region: 'west',
        width: 150,
        html: 'Content 3'
    }, {
        title: 'Item 4',
        region: 'center',
        html: 'Content 4'
    }]
});
