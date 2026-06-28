export const parseBoldSegments = (text) => {
  const trimmed = text.trim();
  const singleWrap = trimmed.match(/^\*(.+)\*$/);

  if (singleWrap) {
    return [{ bold: true, text: singleWrap[1] }];
  }

  const segments = [];
  const regex = /\*\*([^*]+)\*\*/g;
  let lastIndex = 0;
  let match = regex.exec(text);

  while (match) {
    if (match.index > lastIndex) {
      segments.push({ bold: false, text: text.slice(lastIndex, match.index) });
    }

    segments.push({ bold: true, text: match[1] });
    lastIndex = match.index + match[0].length;
    match = regex.exec(text);
  }

  if (lastIndex < text.length) {
    segments.push({ bold: false, text: text.slice(lastIndex) });
  }

  if (!segments.length) {
    segments.push({ bold: false, text });
  }

  return segments;
};
