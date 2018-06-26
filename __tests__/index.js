const { CLIEngine } = require("eslint");
const eslintrc = require("../");
const getRuleFinder = require("eslint-find-rules");

const validCode = `const message = "Hello, World!";

if (message !== "") {
  console.log(message);
}
`;

const invalidCode = `var message = "Hello, World!";

if (message !== "") {
  console.log(message);
}
`;

const cli = new CLIEngine({
  useEslintrc: false,
  baseConfig: eslintrc,
  envs: ["browser"],
  rules: {
    "no-console": 0,
    "prettier/prettier": [
      "error",
      {
        parser: "babylon"
      }
    ]
  }
});

describe("no warnings with valid code", () => {
  let result;

  beforeEach(() => {
    result = cli.executeOnText(validCode).results[0];
  });

  it("did not warning", () => {
    expect(result.warningCount).toBeFalsy();
  });

  it("did not error", () => {
    expect(result.errorCount).toBeFalsy();
  });

  it("no messages in results", () => {
    expect(result.messages).toHaveLength(0);
  });
});

describe("a warning with invalid code", () => {
  let result;

  beforeEach(() => {
    result = cli.executeOnText(invalidCode).results[0];
  });

  it("did error", () => {
    expect(result.errorCount).toBeTruthy();
  });

  it("correct rule flagged", () => {
    expect(result.messages[0].ruleId).toBe("no-var");
  });
});

describe("unused rules", () => {
  it("browser", () => {
    const ruleFinder = getRuleFinder("./browser.js");
    expect(ruleFinder.getUnusedRules()).toHaveLength(0);
  });

  it("index", () => {
    const ruleFinder = getRuleFinder("./index.js");
    expect(ruleFinder.getUnusedRules()).toHaveLength(0);
  });

  it("legacy", () => {
    const ruleFinder = getRuleFinder("./legacy.js");
    expect(ruleFinder.getUnusedRules()).toHaveLength(0);
  });

  it("node", () => {
    const ruleFinder = getRuleFinder("./node.js");
    expect(ruleFinder.getUnusedRules()).toHaveLength(0);
  });
});
