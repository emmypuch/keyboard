const keyboard = {
  elements: {
    main: null,
    keysContainer: null,
    keys: [],
  },

  eventHandlers: {
    oninput: null,
    onclose: null,
  },

  properties: {
    value: "",
    capslock: false,
  },

  init() {},

  _createKeys() {},

  _triggerEvent(handlerName) {
    console.log("Event triggered! Event Name: " + handlerName);
  },

  _toggleCapslock() {
    console.log("Caps Lock Toggled!");
  },

  open() {},

  close() {},
};
