import type { Root, Heading } from "mdast";
import { visit } from "unist-util-visit";

export const fixHeadingLevels = () => (tree: Root) => {
  const all: Array<Heading> = [];
  let first: Heading | undefined = undefined;

  visit(tree, "heading", function (node) {
    all.push(node);

    if (!first || first.depth > node.depth) {
      first = node;
    }

    if (all.length > 1) {
      const heading = all[all.length - 1];

      const expectedDepth = first.depth + 1;
      if (heading.depth > expectedDepth) {
        heading.depth = expectedDepth as 1 | 2 | 3 | 4 | 5 | 6;
      }
    }
  });
};
