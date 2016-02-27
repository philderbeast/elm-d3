module D3.Shape
    ( AccFloat
    , LineProps
    , ArcProps
    , PathGenerator
    , line
    , arc
    ) where

import Native.D3.Shape

type alias AccFloat a = a -> Float
type alias PathGenerator a = a -> String

type alias LineProps a =
    { x : Maybe (AccFloat a)
    , y : Maybe (AccFloat a)
    , interpolate : Maybe String
    }

line : LineProps a -> PathGenerator b
line = Native.D3.Shape.line

type alias ArcProps a =
    { startAngle : Maybe (AccFloat a)
    , endAngle : Maybe (AccFloat a)
    , innerRadius : Maybe (AccFloat a)
    , outerRadius : Maybe (AccFloat a)
    }

arc : ArcProps a -> PathGenerator b
arc = Native.D3.Shape.arc
