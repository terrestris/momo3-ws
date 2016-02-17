{
    xtype: 'form',
    title: 'FormPanel',
    region: 'east',
    width: '20%',
    autoScroll: true,
    defaults: {
        anchor: '100%'
    },
    items: [{
        xtype: 'textfield',
        name: 'text',
        fieldLabel: 'Text',
        emptyText: 'Enter a text'
    }, {
        xtype: 'displayfield',
        name: 'status',
        fieldLabel: 'Status',
        value: '<span style="color:green;">OK</span>'
    }, {
        xtype: 'numberfield',
        name: 'number',
        fieldLabel: 'Number',
        emptyText: 'Enter a number',
        minValue: 0,
        maxValue: 99
    }, {
        xtype: 'combo',
        name: 'combo',
        fieldLabel: 'Combo',
        emptyText: 'Select from list',
        minValue: 0,
        maxValue: 99,
        store: [
            'Entry 1',
            'Entry 2',
            'Entry 3'
        ]
    }, {
        xtype: 'checkbox',
        name: 'check',
        fieldLabel: 'Check'
    }, {
        xtype: 'datefield',
        name: 'dateField',
        fieldLabel: 'Date Field'
    }, {
        xtype: 'slider',
        name: 'slider',
        fieldLabel: 'Slider',
        minValue: 0,
        maxValue: 100,
        value: 25
    }, {
        xtype: 'filefield',
        name: 'upload',
        fieldLabel: 'Upload'
    }]
}
