function stringTruncate(string) {
  const maxChar = 60;
  const truncatedString = string.substring(0, maxChar);
  return `${truncatedString} ...`;
}

export default stringTruncate;
