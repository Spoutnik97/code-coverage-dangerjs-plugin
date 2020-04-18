// @ts-ignore
import parseCoverage from "byzantine";
import * as path from "path";
import { keyBy } from "lodash";

const rootDir = process.cwd();

const getFileAbsolutePath = (filePath: string): string =>
  path.join(rootDir, filePath);

const coverageFilePath = getFileAbsolutePath("coverage/coverage-final.json");

const coverageJson = require(coverageFilePath);

const coverages = parseCoverage(coverageJson);

const coverageByPath = keyBy(
  coverages,
  (coverage: { path: string }) => coverage.path
);

export const getCoverageForFile = (filePath: string) =>
  coverageByPath[getFileAbsolutePath(filePath)];
