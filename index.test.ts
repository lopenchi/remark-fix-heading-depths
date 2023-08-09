import { remark } from "remark";
import { expect, test } from "vitest";
import {fixHeadingLevels} from "./index";

test("fixes heading levels, change h4 to h3", async () => {
    const markdown = "## Heading 2\nContent from heading 2\n#### Heading 4\n";
    const text = await remark().use(fixHeadingLevels).process(markdown);
    expect(String(text)).toBe("## Heading 2\n\nContent from heading 2\n\n### Heading 4\n");
});

test("fixes heading levels, change h5 to h3", async () => {
    const markdown2 = "## Heading 2\nContent from heading 2\n##### Heading 5\n";
    const text2 = await remark().use(fixHeadingLevels).process(markdown2);
    expect(String(text2)).toBe("## Heading 2\n\nContent from heading 2\n\n### Heading 5\n");
});