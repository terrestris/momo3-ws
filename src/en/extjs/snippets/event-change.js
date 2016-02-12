{
    xtype: 'textfield',
    emptyText: 'Find by First name',
    listeners: {
        change: function(field, newValue, oldValue) {
            field.up('gridpanel').getStore().filter({
                property: 'firstName',
                value: newValue || '',
                anyMatch: true,
                caseSensitive: false
            });
        }
    }
}
