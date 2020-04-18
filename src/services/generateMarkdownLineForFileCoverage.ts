import { getFileCoverageStats } from "./getFileCoverageStats";
import { formatCoverageState } from "../lib/formatCoverageState";

export const generateMarkdownLineForFileCoverage = (filePath: string) => {
  const fileCoverage = getFileCoverageStats(filePath);
  const filePathWithoutFirstFolder = filePath.slice(filePath.indexOf("/") + 1);

  return [`↦ ${filePathWithoutFirstFolder}`].concat(
    fileCoverage.map(formatCoverageState)
  );
};
