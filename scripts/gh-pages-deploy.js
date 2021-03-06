const execa = require("execa");
const fs = require("fs");

(async () => {
  try {
    await execa("git", ["checkout", "--orphan", "gh-pages"]);
    console.log("Building...");
    await execa("npm", ["run", "build"]);    
    // Understand if it's dist or build folder
    const folderName = fs.existsSync("dist") ? "dist" : fs.existsSync("build") ? "build" : "out" ;
    await execa("cp", ["CNAME",folderName + "/CNAME"]);
    await execa("touch", [folderName + "/.nojekyll"]);
    await execa("git", ["--work-tree", folderName, "add", "--all"]);
    await execa("git", ["--work-tree", folderName, "commit", "-m", "gh-pages"]);
    console.log("Pushing to gh-pages...");
    await execa("git", ["push", "origin", "HEAD:gh-pages", "--force"]);
    await execa("rm", ["-r", folderName]);
    console.log("Successfully deployed");
  } catch (e) {
    console.log(e.message);
    process.exit(1);
  }
})();