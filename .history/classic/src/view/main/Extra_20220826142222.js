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
  store: [],
  columns: [
    { text: "Name", dataIndex: "name" },
    { text: "Email", dataIndex: "email" },
    { text: "Phone", dataIndex: "phone" },
  ],
  height: 300,
  widht: 400,
});

// Ext.define("Youtube.view.main.Extra", {
//  extend: "Ext.grid.Panel",
  xtype: "Extra",
  title: "grid video",
  store: [],
  columns: [
    { text: "Name", dataIndex: "name" },
    { text: "Email", dataIndex: "email" },
    { text: "Phone", dataIndex: "phone" },
  ],
  height: 300,
  widht: 400,
// });
