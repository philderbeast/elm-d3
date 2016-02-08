import Development.Shake
import Development.Shake.Command
import Development.Shake.FilePath
import Development.Shake.Util
import System.Console.GetOpt

distDir = "__dist"
flags = []
opts = shakeOptions{shakeFiles="__build/", shakeVerbosity=Loud}

main :: IO ()
main = shakeArgsWith opts flags $ \flags targets -> return $ Just $ do
    want targets
    phony "npm" $ cmd "npm-install.bat"
    "node_modules/*/package.json" %> \_ -> need ["npm"]
    phony "clean" $ cmd "rimraf-node-modules.bat"
    phony "examples" $ do
        need [ "node_modules/elm-webpack-loader/package.json"]
        cmd "webpack.cmd"

