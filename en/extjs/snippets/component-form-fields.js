{
    xtype: 'form',
    title: 'FormPanel',
    region: 'east',
    width: '20%',
    defaults: {
        anchor: '100%'
    },
    items: [{
        xtype: 'textfield',
        fieldLabel: 'Text',
        emptyText: 'Enter a text'
    }, {
        xtype: 'displayfield',
        fieldLabel: 'Status',
        value: '<span style="color:green;">OK</span>'
    }, {
        xtype: 'numberfield',
        fieldLabel: 'Number',
        emptyText: 'Enter a number',
        minValue: 0,
        maxValue: 99
    }, {
        xtype: 'combo',
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
        fieldLabel: 'Check'
    }, {
        xtype: 'datefield',
        fieldLabel: 'Date Field'
    }, {
        xtype: 'slider',
        fieldLabel: 'Slider',
        minValue: 0,
        maxValue: 100,
        value: 25
    }, {
        xtype: 'filefield',
        fieldLabel: 'Upload'
    }]
}
