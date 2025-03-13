const fs = require("fs");
const path = require("path");

const dataDir = path.join(__dirname, "../data/assemblee-nationale/acteur");
const outputFile = path.join(
  __dirname,
  "../src/modules/politics/data/combinedActors.json"
);

const outputDir = path.dirname(outputFile);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function combineJsonFiles() {
  try {
    if (!fs.existsSync(dataDir)) {
      return;
    }

    const files = fs.readdirSync(dataDir);
    const jsonFiles = files.filter((file) => file.endsWith(".json"));

    if (jsonFiles.length === 0) {
      return;
    }

    console.log(`Found ${jsonFiles.length} JSON files to process`);

    const allActors = [];

    for (const file of jsonFiles) {
      const filePath = path.join(dataDir, file);
      const fileContent = fs.readFileSync(filePath, "utf8");

      try {
        const data = JSON.parse(fileContent);
        if (data && data.acteur) {
          allActors.push(data.acteur);
        }
      } catch {}
    }

    fs.writeFileSync(outputFile, JSON.stringify(allActors, null, 2));
    console.log(
      `Successfully combined ${allActors.length} actors into ${outputFile}`
    );
  } catch {}
}

combineJsonFiles();
