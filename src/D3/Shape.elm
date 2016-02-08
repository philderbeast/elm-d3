module D3.Shape
    ( XAccessor
    , YAccessor
    , PathGenerator
    , line
    ) where

import Native.D3.Shape

type alias XAccessor a = a -> Float
type alias YAccessor a = a -> Float
type alias PathGenerator a = a -> String

line : XAccessor a -> YAccessor a -> String -> PathGenerator b
line = Native.D3.Shape.line
