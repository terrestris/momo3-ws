Ext.create('Ext.container.Viewport', {
    layout: 'border',
    defaults: {
        xtype: 'panel',
        bodyPadding: 15,
        collapsible: true,
        split: false,
        margin: 5
    },
    items: [{
        region: 'north',
        collapsible: false,
        height: 60,
        border: false,
        html: 'Content 1'
    }, {
        title: 'Item 2',
        region: 'east',
        width: '20%',
        html: 'Content 2'
    }, {
        title: 'Item 3',
        region: 'west',
        width: '20%',
        html: 'Content 3'
    }, {
        region: 'center',
        collapsible: false,
        html: 'Content 4'
    }, {
        title: 'Item 5',
        region: 'south',
        maxHeight: 350,
        collapsed: true,
        html: 'Content 5'
    }]
});
