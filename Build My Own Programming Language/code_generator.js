function CodeGen(node) {
  switch (node.type) {
    case "Program":
      return node.body.map(CodeGen).join("\n");
    case "Declaration":
      return `const ${node.name}=${node.value};`;
    case "Print":
      return `console.log(${node.expression})`;
    default:
      throw new Error(`Unknown node type: ${node.type}`);
  }
}

module.exports = CodeGen;
