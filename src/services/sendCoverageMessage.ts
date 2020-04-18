import { message, danger } from "danger";
// @ts-ignore
import * as generateMarkdownTable from "markdown-table";
import { generateCoverageTable } from "./generateCoverageTable";

const filterFiles = (file: string) => {
  if (file.includes(".test.") || file.includes(".snap")) return false;
  return true;
};

const coverageTable = [["File", "Branches", "Statements"]]
  .concat([[], [":heavy_plus_sign: **NEW FILES**"], []])
  .concat(generateCoverageTable(danger.git.created_files.filter(filterFiles)))
  .concat([[], [":pencil2: **MODIFIED FILES**"], []])
  .concat(generateCoverageTable(danger.git.modified_files.filter(filterFiles)));

export const sendCoverageMessage = () => {
  message(
    `# Coverage
      
      ${generateMarkdownTable(coverageTable)}`
  );
};
