Ext.define('Youtube.store.Extra', {
   extend: "Ext.data.Store",
   alias: 'store.Extra',
   proxy: {
      type: 'memory',
      reader: {
         type: 'json',
         
      }
   }
})