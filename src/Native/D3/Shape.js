Elm.Native.D3 = Elm.Native.D3 || {};
Elm.Native.D3.Shape = {};
Elm.Native.D3.Shape.make = function(elm) {
    'use strict';

    elm.Native = elm.Native || {};
    elm.Native.D3 = elm.Native.D3 || {};
    elm.Native.D3.Shape = elm.Native.D3.Shape || {};
    if (elm.Native.D3.Shape.values) return elm.Native.D3.Shape.values;

    var JS = Elm.Native.D3.JavaScript.make(elm);

    function elm_line(fx, fy, interpolation, data) {
        var line = d3.svg.line()
            .x(fx)
            .y(fy)
            .interpolate(interpolation);

        return line(JS.fromList(data));
    }

    return elm.Native.D3.Shape.values = {
        line: F4(elm_line)
    };
};