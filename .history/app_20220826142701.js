/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
  extend: "Youtube.Application",

  name: "Youtube",

  requires: [
    // This will automatically load all classes in the Youtube namespace
    // so that application classes do not need to require each other.
    "Youtube.*",
  ],
  launch: function () {
    viewport = Ext.getCmp("viewport");
    target = viewport.down("#viewport-target");
    view = Ext.create("Youtube.view.Extra");
    target.add(view);
  },

  mainView: "Youtube.view.Extra",
  autoCreateViewport: true,
});
