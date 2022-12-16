import type { Parser } from '../index';

/**
 * Marks the thin space character (Unicode U+2009).
 */
export const thinSpace = {
    rule: /([\u2009])/,
    tag: x => (
        <mark data-mark="thinSpace" title="Thin space">
            {x}
        </mark>
    ),
} satisfies Parser;
