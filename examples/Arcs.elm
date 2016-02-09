module Arcs where

import D3 exposing (..)
import Graphics.Element exposing (Element)
import Mouse
import D3.Shape exposing
    ( RadiusAccessor
    , AngleAccessor
    , PathGenerator
    , arc 
    )

size   = 300
margin = { top = 10, left = 10, right = 10, bottom = 10 }
dims   = { height = size - margin.top - margin.bottom
         , width  = size - margin.left - margin.right }

type alias Dimensions = { height : Float, width : Float }
type alias Margins = { top : Float, left : Float, right : Float, bottom : Float }

svg : Dimensions -> Margins -> D3 a a
svg ds ms =
  static "svg"
  |. num attr "height" (ds.height + ms.top + ms.bottom)
  |. num attr "width"  (ds.width  + ms.left + ms.right)
  |. static "g"
     |. str attr "transform" (translate margin.left margin.top)

--arcs : D3 (List String) (String)
arcs =
    selectAll ".arc"
        |= identity
            |- enter <.> append "path"
                |. str attr "class" "arc"
                |. num attr "width"  100
                |. num attr "height" 100
            |- update
                |. fun attr "d" (\x _ -> x)
            |- exit
                |. remove

translate : number -> number -> String
translate x y = "translate(" ++ (toString x) ++ "," ++ (toString y) ++ ")"

vis dims margin =
  svg dims margin
  |. arcs 

main : Signal Element
main =
    let f = 
            render dims.height dims.width (vis dims margin)

        g : PathGenerator (Float, Float)
        g =
            D3.Shape.arc (fst >> ((+) 2)) fst snd (snd >> ((+) pi))

        ps : Signal (List String)
        ps =
            Mouse.position
            |> Signal.dropRepeats
            |> Signal.map (\(x, y) -> (toFloat x, toFloat y))
            |> Signal.map (\x -> [ g x ])

    in Signal.map f ps
