Ext.define("Youtube.store.Extra", {
  extend: "Ext.data.Store",
  alias: "store.Extra",
  data: '',
  proxy: {
    type: "memory",
    reader: {
      type: "json",
      rootProperty: "",
    },
  },
});
