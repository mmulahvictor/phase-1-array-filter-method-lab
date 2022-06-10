// Code your solution here
function findMatching(source, sort) {
    return source.filter(
      possibleMatch => possibleMatch.toLowerCase() === sort.toLowerCase()
    );
  }
  const fuzzyMatch = (source, testString) => {
    return source.filter(
      (possibleMatch) =>
        possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
    );
  }
  
  const matchName = (source, sortName) => {
    return source.filter((record) => record.name === sortName);
  }
