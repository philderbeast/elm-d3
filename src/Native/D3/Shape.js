Elm.Native.D3 = Elm.Native.D3 || {};
Elm.Native.D3.Shape = {};
Elm.Native.D3.Shape.make = function(elm) {
    'use strict';

    elm.Native = elm.Native || {};
    elm.Native.D3 = elm.Native.D3 || {};
    elm.Native.D3.Shape = elm.Native.D3.Shape || {};
    if (elm.Native.D3.Shape.values) return elm.Native.D3.Shape.values;

    var JS = Elm.Native.D3.JavaScript.make(elm);

    function elm_line(props, data) {
        var line = d3.svg.line();
        var px = props["x"];
        var py = props["y"];
        var pi = props["interpolate"];

        if(px.ctor === "Just"){
            line.x(px._0);
        }

        if(py.ctor === "Just"){
            line.y(py._0);
        }

        if(pi.ctor === "Just"){
            line.interpolate(pi._0);
        }

        return line(JS.fromList(data));
    }

    function elm_arc(props, data) {
        var arc = d3.svg.arc();
        var psa = props["startAngle"];
        var pea = props["endAngle"];
        var pir = props["innerRadius"];
        var por = props["outerRadius"];

        if(psa.ctor === "Just"){
            arc.startAngle(psa._0);
        }

        if(pea.ctor === "Just"){
            arc.endAngle(pea._0);
        }

        if(pir.ctor === "Just"){
            arc.innerRadius(pir._0);
        }

        if(por.ctor === "Just"){
            arc.outerRadius(por._0);
        }

        return arc(data);
    }

    return elm.Native.D3.Shape.values = {
        line: F2(elm_line),
        arc: F2(elm_arc)
    };
};
