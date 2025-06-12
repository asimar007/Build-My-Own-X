function lexer(input) {
  const tokens = [];
  let cursor = 0;

  while (cursor < input.length) {
    let char = input[cursor];

    // Skip whitespaces
    if (/\s/.test(char)) {
      cursor++;
      continue;
    }

    // Alphabets
    if (/[a-zA-Z]/.test(char)) {
      let words = "";
      while (/[a-zA-Z]/.test(char)) {
        words += char;
        char = input[++cursor];
      }
      if (words === "ye" || words === "bol") {
        tokens.push({ type: "keyword", value: words });
      } else {
        tokens.push({ type: "identifier", value: words });
      }
      continue;
    }

    // Numbers
    if (/[0-9]/.test(char)) {
      let nums = "";
      while (/[0-9]/.test(char)) {
        nums += char;
        char = input[++cursor];
      }
      tokens.push({ type: "number", value: parseInt(nums) });
      continue;
    }

    // Operators
    if (/[\+\-\*\/=]/.test(char)) {
      tokens.push({ type: "operator", value: char });
      cursor++;
      continue;
    }

    // Unknown character
    throw new Error(`Unexpected character: '${char}' at position ${cursor}`);
  }

  return tokens;
}

module.exports = lexer;
