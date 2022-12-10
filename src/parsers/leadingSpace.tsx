import type { Parser } from '../index';

/**
 * Marks spaces at the beginning of a string.
 *
 * Example matches:
 *
 *   " Hello, world"
 */
export const leadingSpace = {
    rule: /(^ +)/,
    tag: x => (
        <mark data-mark="leadingSpace" title="Leading space">
            {x}
        </mark>
    ),
} satisfies Parser;
