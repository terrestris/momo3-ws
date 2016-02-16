listeners: {
    click: function(btn) {
        var gridpanel = btn.up('gridpanel');
        gridpanel.getStore().load();
    }
}
