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
  store: [
    {
      name: "Jean Luc",
      email: "jeanluc.picard@enterprise.com",
      phone: "555-111-1111",
    },
    {
      name: "Worf",
      email: "worf.moghsson@enterprise.com",
      phone: "555-222-2222",
    },
    {
      name: "Deanna",
      email: "deanna.troi@enterprise.com",
      phone: "555-333-3333",
    },
    { name: "Data", email: "mr.data@enterprise.com", phone: "555-444-4444" },
  ],

  columns: [
    { text: "Name", dataIndex: "name" },
    { text: "Email", dataIndex: "email", flex: 1 },
    { text: "Phone", dataIndex: "phone", flex: 1 },
  ],
  height: 300,
  widht: 400,
});
