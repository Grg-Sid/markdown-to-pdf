export default function extractBlocks(
  markdown: string
): { block: string; line: number }[] {
  const blocks: { block: string; line: number }[] = [];
  const lines = markdown.split("\n");
  let currentBlock: string[] = [];
  let startLine = 0;
  let insideBlock = false;

  lines.forEach((line, index) => {
    if (line.startsWith("```")) {
      if (!insideBlock) {
        startLine = index;
        currentBlock = [line];
        insideBlock = true;
      } else {
        currentBlock.push(line);
        blocks.push({
          block: currentBlock.join("\n"),
          line: startLine,
        });
        currentBlock = [];
        insideBlock = false;
      }
    } else if (insideBlock) {
      currentBlock.push(line);
    } else if (line.trim() === "") {
      if (currentBlock.length > 0) {
        blocks.push({
          block: currentBlock.join("\n"),
          line: startLine,
        });
        currentBlock = [];
      }
      blocks.push({
        block: "",
        line: index,
      });
    } else {
      if (currentBlock.length === 0) {
        startLine = index;
      }
      currentBlock.push(line);
    }
  });

  if (currentBlock.length > 0) {
    blocks.push({
      block: currentBlock.join("\n"),
      line: startLine,
    });
  }

  return blocks;
}
