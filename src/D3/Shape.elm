module D3.Shape
    ( XAccessor
    , YAccessor
    , RadiusAccessor
    , AngleAccessor
    , PathGenerator
    , line
    , arc
    ) where
{-| Path generators in elm-d3.

# Make a path
@docs line, arc 

# Datum property accessors.
@docs XAccessor, YAccessor, RadiusAccessor, AngleAccessor

# Path generator
@docs PathGenerator
-}
import Native.D3.Shape

{-| Get x values. -}
type alias XAccessor a = a -> Float
{-| Get y values. -}
type alias YAccessor a = a -> Float
{-| Get radii. -}
type alias RadiusAccessor a = a -> Float
{-| Get angles. -}
type alias AngleAccessor a = a -> Float
{-| Generate a path as a string, for use as the /path@d attribute. -}
type alias PathGenerator a = a -> String

{-| Generate a path for an line. -}
line : XAccessor a -> YAccessor a -> String -> PathGenerator b
line = Native.D3.Shape.line

{-| Generate a path for an arc. -}
arc : RadiusAccessor a -> RadiusAccessor a -> AngleAccessor a -> AngleAccessor a -> PathGenerator b
arc = Native.D3.Shape.arc
