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
    viewport = Ext.getCmp('viewport')
    target = viewport.do
  },

  // The name of the initial view to create.
  mainView: "Youtube.view.main.Main",
  autoCreateViewport: true,
});
