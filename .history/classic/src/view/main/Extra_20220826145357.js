// Ext.define("Youtube.view.main.Extra", {
//   extend: "Ext.container.Container",
//   xtype: "Extra",
//   // viewModel: "main",
//   controller: "extra",
//   items: [
//     // {
//     //   title: "Users",
//     //   iconCls: "fa-user",
//     //   bind: {
//     //     html: "{name}",
//     //   },
//     // },
//     {
//       title: "Extra view",
//       html: "dom will be here",
//     },
//     {
//       xtype: "button",
//       name: "click",
//       text: "Call Controller",
//       itemId: "callController",
//     },
//   ],
// });

Ext.define("Youtube.view.main.Extra", {
  extend: "Ext.grid.Panel",
  xtype: "Extra",
  title: "grid video",
  store: {
    type: "Extra",
  },

  columns: [
    { text: "Name", dataIndex: "name", flex: 1 },
    { text: "Email", dataIndex: "email", flex: 1 },
    { text: "Phone", dataIndex: "phone", flex: 1 },
  ],
  height: 300,
  widht: 400,
});
