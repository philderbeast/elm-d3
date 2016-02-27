module D3.Shape
    ( AccFloat
    , LineProps
    , ArcProps
    , PathGenerator
    , line
    , arc
    ) where
{-| Path generators in elm-d3.

# Make a path
@docs line, arc 

# Datum property accessors.
@docs AccFloat

# Generator properties
@docs LineProps ArcProps

# Path generator
@docs PathGenerator
-}
import Native.D3.Shape

{-| Get a float value. -}
type alias AccFloat a = a -> Float
{-| Generate a path as a string, for use as the /path@d attribute. -}
type alias PathGenerator a = a -> String

{-| The input properties for a line. -}
type alias LineProps a =
    { x : Maybe (AccFloat a)
    , y : Maybe (AccFloat a)
    , interpolate : Maybe String
    }
    
{-| Generate a path for a line. -}
line : LineProps a -> PathGenerator b
line = Native.D3.Shape.line

{-| The input properties for an arc. -}
type alias ArcProps a =
    { startAngle : Maybe (AccFloat a)
    , endAngle : Maybe (AccFloat a)
    , innerRadius : Maybe (AccFloat a)
    , outerRadius : Maybe (AccFloat a)
    }

{-| Generate a path for an arc. -}
arc : ArcProps a -> PathGenerator b
arc = Native.D3.Shape.arc
