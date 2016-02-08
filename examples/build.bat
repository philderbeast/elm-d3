@mkdir __shake-build 2> nul
@ghc --make Build.hs -rtsopts -with-rtsopts=-I0 -outputdir=__shake-build -o __shake-build/build && __shake-build\build %*
