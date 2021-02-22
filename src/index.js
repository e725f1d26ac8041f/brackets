module.exports = function check(str, bracketsConfig) {
  const openingBrackets = bracketsConfig.map(bracketsPair => bracketsPair[0]);
  const closingBrackets = bracketsConfig.map(bracketsPair => bracketsPair[1]);
  
  const bracketsSequence = str.split('');
  const openingBracketsStack = new Array();
  for (let currentBracket of bracketsSequence) {
    let lastOpeningBracket = openingBracketsStack[openingBracketsStack.length - 1];
    if (openingBrackets.indexOf(currentBracket) === closingBrackets.indexOf(currentBracket)) {
      if (currentBracket === lastOpeningBracket) {
        openingBracketsStack.pop();
      } else {
        openingBracketsStack.push(currentBracket);
      }
      continue;
    }

    if (openingBrackets.includes(currentBracket)) {
      openingBracketsStack.push(currentBracket);
    } else {
      const currentClosingBracket = currentBracket;
      if (closingBrackets.indexOf(currentClosingBracket) === openingBrackets.indexOf(lastOpeningBracket)) {
        openingBracketsStack.pop();
      } else {
        return false;
      }
    }
  }

  return openingBracketsStack.length === 0;
}
