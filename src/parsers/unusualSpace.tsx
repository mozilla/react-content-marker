import type { Parser } from '../index';

/**
 * Marks unusually placed spaces:
 * - at the end of a line
 * - after a newline or tab
 * - multiple spaces
 *
 * Example matches:
 *
 *   "hello world "
 *   "hello\t world"
 *   "hello  world"
 */
export const unusualSpace = {
    rule: /( +$|[\r\n\t]( +)| {2,})/,
    tag: x => (
        <mark data-mark="unusualSpace" title="Unusual space">
            {x}
        </mark>
    ),
} satisfies Parser;
