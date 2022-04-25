const fs = require("fs");
const util = require("util");
const path = require("path");
const { writeFile } = require("fs/promises");
const readdir = util.promisify(fs.readdir);

const getFilesList = async () => {
  let names;
  try {
    names = await readdir("./htmlFiles");
  } catch (err) {
    console.log(err);
  }
  return names;
};

const writeIndexFile = async () => {
  const fileList = await getFilesList();
  const message =
    "// This file is generated automatically by `script.js`. Please, don't change it.";
  const importLines = fileList.map(
    (file) =>
      `import ${path.parse(file).name}File from '../htmlFiles/${
        path.parse(file).base
      }'`
  );

  const defaltExport = `export default {
  title: "Documentation",
}`;

  const exportLines = fileList.map(
    (file) =>
      `export const ${path.parse(file).name} = () => ${
        path.parse(file).name
      }File`
  );

  writeFile(
    "stories/index.stories.js",
    message +
      "\n" +
      importLines.join("\n") +
      "\n\n" +
      defaltExport +
      "\n\n" +
      exportLines.join("\n")
  );
};

writeIndexFile();
