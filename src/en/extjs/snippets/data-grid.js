{
    xtype: 'gridpanel',
    title: 'GridPanel with remote store',
    region: 'center',
    collapsible: false,
    bodyPadding: 0,
    columns: [{
        text: 'First name',
        dataIndex: 'firstName',
        flex: 1
    }, {
        text: 'Last name',
        dataIndex: 'lastName',
        flex: 1
    }, {
        text: 'Instruments',
        dataIndex: 'instruments',
        flex: 1
    }],
    store: null,
    tbar: [{
        xtype: 'button',
        text: 'Button 1',
        iconCls: 'fa fa-repeat'
    }]
}
