import type { Parser } from '../index';

/**
 * Marks multiple consecutive spaces and replaces them with a middle dot.
 */
export const multipleSpaces = {
    rule: /(  +)/,
    tag: x => (
        <mark data-mark="multipleSpaces" data-match={x} title="Multiple spaces">
            <span aria-hidden> &middot; </span>
        </mark>
    ),
} satisfies Parser;
