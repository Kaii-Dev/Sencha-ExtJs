Ext.define("Youtube.view.main.Extra", {
  extend: "Ext.container.Container",
  xtype: "extra",
  // viewModel: "main",
  controller: "extra",
  items: [
    // {
    //   title: "Users",
    //   iconCls: "fa-user",
    //   bind: {
    //     html: "{name}",
    //   },
    // },
    {
      title: "Extra view",
      html: "dom will be here",
    },
    {
      xtype: "button",
      name: "clikc",
      text: "Call Controller",
      itemId: "callController",
    },
  ],
});
