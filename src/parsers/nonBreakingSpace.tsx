import type { Parser } from '../index';

/**
 * Marks the no-break space character (Unicode U+00A0).
 */
export const nonBreakingSpace = {
    rule: '\u00A0',
    tag: x => (
        <mark data-mark="nonBreakingSpace" title="Non-breaking space">
            {x}
        </mark>
    ),
} satisfies Parser;
