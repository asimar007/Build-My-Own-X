// Build My Own Programming Language/parser.js
function parser(tokens) {
  const ast = {
    type: "Program",
    body: [],
  };
  while (tokens.length > 0) {
    let token = tokens.shift();

    if (token.type === "keyword" && token.value === "ye") {
      let declaration = {
        type: "Declaration",
        name: tokens.shift().value,
        value: null,
      };
      // Check for Assignment
      if (tokens[0].type === "operator" && tokens[0].value === "=") {
        tokens.shift();
        let expression = "";
        while (tokens.length > 0 && tokens[0].type !== "keyword") {
          expression += tokens.shift().value;
        }
        declaration.value = expression.trim();
      }
      ast.body.push(declaration);
    }
    // Print Statement
    if (token.type === "keyword" && token.value === "bol") {
      ast.body.push({
        type: "Print",
        expression: tokens.shift().value,
      });
    }
  }
  return ast;
}

module.exports = parser;
