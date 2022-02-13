const EventManager = window.EventManager || {
    events: {},
  
    addHandler: function (eventName, handler) {
      if (eventName in this.events) {
        this.events[eventName].push(handler);
      } else {
        this.events[eventName] = [handler];
      }
    },
  
    removeHandler: function (eventName,) {
      if (eventName in this.events) {
        this.events[eventName] = null;
        delete this.events[eventName];
      }
    },
  };
  
  window.EventManager = EventManager;
  export default EventManager;
  