// tsconfig paths in build

const tsConfig = require('./tsconfig.json');
const tsConfigPaths = require('tsconfig-paths');

const baseUrl = __dirname + '/build/server/'

let { paths, rootDir = '' } = tsConfig.compilerOptions
for (let key in paths) {
    paths[key] = paths[key].map(o => {
        if (o.substr(0, rootDir.length) == rootDir) {
            return o.substr(rootDir.length)
        }
        return o
    })
}

const cleanup = tsConfigPaths.register({
    baseUrl,
    paths,
})