const lexer = require("./lexer");
const parser = require("./parser");
const CodeGen = require("./code_generator");
const runner = require("./runner");

function compiler(input) {
  const tokens = lexer(input);
  const ast = parser(tokens);
  const executableCode = CodeGen(ast);
  return executableCode;
}

module.exports = { compiler, runner };
