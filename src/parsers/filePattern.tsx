import type { Parser } from '../index';

/**
 * Marks terms that look like a path to a folder or a file.
 *
 * Example matches:
 *
 *   /home/lisa
 *   /home/homer/budget.md
 *   ~/recipies.txt
 *
 * Source:
 * https://github.com/translate/translate/blob/2.3.1/translate/storage/placeables/general.py#L208
 */
export const filePattern = {
    rule: /(^|\s)((~\/|\/|\.\/)([-A-Za-z0-9_$.+!*(),;:@&=?/~#%]|\\){3,})/,
    matchIndex: 2,
    tag: x => (
        <mark data-mark="filePattern" title="File location">
            {x}
        </mark>
    ),
} satisfies Parser;
