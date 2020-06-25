var fs = require("fs");
var savedFilePath

function readFile(filepath) {
    fs.readFile(filepath, "utf-8", (err, data) => {
      if (err) {
        console.log("error");
        return;
      }
      console.log(data);
      content.value = data;
    });
}

async function openFile() {
    var content = document.getElementById("content").value;
    const paths = remote.dialog.showOpenDialogSync(WIN, {
      properties: ["openFile", "multiSelections"],
    });
    savedFilePath = paths[0];
    console.log(paths[0]);
    readFile(paths[0]);
}

async function saveFileAs(){
    var content = document.getElementById("content").value;
    console.log("Save button");
    let { filePath } = await remote.dialog.showSaveDialog({
      buttonlabel: "Save file",
    });
    
    savedFilePath = filePath
    fs.writeFile(filePath, content, () => console.log("we done fam"));
    console.log("saved sucessfully!");
    console.log(content);
}
  
async function saveFile(){
    var content = document.getElementById("content").value;
    fs.writeFile(savedFilePath, content, () => console.log("we done fam"));
}
  
