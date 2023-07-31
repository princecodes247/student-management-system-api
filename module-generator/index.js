var fs = require('fs').promises;


// console.log(process.argv.slice(2))

const moduleName = process.argv.slice(2)?.toString().toLowerCase()

const parentFolder = "src"

const subDirectories = ["model", 'controller', 'service', 'schema', 'route', 'middleware', 'util', 'type']

const createFolder = async (dir) => {
    // if (!await fs.existsSync(dir)) {
    await fs.mkdir(dir, {
        recursive: true
    });
    // }
}

const createFileWithContent = async (fileDir, content) => {
    return await fs.writeFile(fileDir, content)
}

const getFileContent = async (fileDir) => {
    return (await fs.readFile(fileDir))?.toString() || ''
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

subDirectories.forEach(async dirP => {
    try {

        const dirName = `${__dirname}/../src/${moduleName}/${dirP}`
        /** Creating directory */
        await createFolder(dirName);
        const studFile = `${__dirname}/studs/module/${dirP}/index.ts`
        const fileContent = await getFileContent(studFile)
        const replacedFiles = fileContent
            .replace(new RegExp(`User`, "g"), capitalizeFirstLetter(moduleName))
            .replace(new RegExp(`user`, "g"), moduleName)
        await createFileWithContent(`${dirName}/index.ts`, replacedFiles)
    } catch (error) {
        console.error(error.stack)
    }
})
// mkdir -p src/$npm_config_module/model src/$npm_config_module/controller src/$npm_config_module/service src/$npm_config_module/route src/$npm_config_module/schema src/$npm_config_module/middleware