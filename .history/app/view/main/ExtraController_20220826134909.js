Ext.define("Youtube.view.main.ExtraController", {
  extends: "Ext.app.ViewController",
  alias: "controller.extra",

  init: function () {
    this.control({
      "#callController": {
        click: "callOnClick",
      },
    });
  },

  callOnClick: function () {
    alert("hello from controller");
  },
});
