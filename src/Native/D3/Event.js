Elm.Native.D3.Event = {};
Elm.Native.D3.Event.make = function(elm) {
  'use strict';

  elm.Native = elm.Native || {};
  elm.Native.D3 = elm.Native.D3 || {};
  elm.Native.D3.Event = elm.Native.D3.Event || {};

  if (elm.Native.D3.Selection.values) return elm.Native.D3.Selection.values;

  var JS = Elm.Native.JavaScript.make(elm);

  function mouse_event() {
    return JS.toRecord({
      altKey : d3.event.altKey,
      button : d3.event.button,
      ctrlKey : d3.event.ctrlKey,
      metaKey : d3.event.metaKey,
      shiftKey : d3.event.shiftKey
    });
  }

  function elm_handle_mouse(_event, signal, fn) {
    return function(k, selection) {
      return k(selection.on(_event, function(d, i) {
        return elm.notify(signal.id, A3(fn, mouse_event(), d, i));
      }));
    };
  }

  return elm.Native.D3.Event.values = {
    handleMouse : F3(elm_handle_mouse)
  };
};
