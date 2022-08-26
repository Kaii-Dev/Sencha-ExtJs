Ext.define("Youtube.view.Viewport", {
  extend: "Ext.container.Viewport",

  id: "viewport",
  items: [
    {
      region: "north",
      html: "<h1>header part</h1>",
    },
    {
      region: "canter",
      html: "<h1>header part</h1>",
    },
  ],
});
