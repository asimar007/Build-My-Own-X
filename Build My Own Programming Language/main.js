const { compiler, runner } = require("./compiler");

const code = `
ye x=10
ye y=20

ye sum= x*y

bol sum
`;

const exec = compiler(code);

runner(exec);
