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

    trigger: function(eventTarget, eventName, ...args) {
      if (process.env.NODE_ENV !== 'production') {
        console.log(`emitted: server::${eventTarget}:${eventName}\n`, ...args) 
      } else {
        mp.trigger(eventTarget, eventName, JSON.stringify(...args)) // eslint-disable-line
      }
    }
  };
  
  window.EventManager = EventManager;
  export default EventManager;
  