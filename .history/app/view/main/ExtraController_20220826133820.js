Ext.define("Youtube.view.main.ExtraController", {
  extends: "Ext.app.ViewController",
  alias: 'controller.extra',
  intt: function(){
   this.controll({
      '#callController': {
         click: 'callOnClick'
      }
   })
  },
  callOnClick:function(){
   alert("hello from controller")
  }
});
