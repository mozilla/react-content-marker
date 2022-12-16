import type { Parser } from '../index';

/**
 * Marks the narrow no-break space character (Unicode U+202F).
 */
export const narrowNonBreakingSpace = {
    rule: /([\u202F])/,
    tag: x => (
        <mark
            data-mark="narrowNonBreakingSpace"
            title="Narrow non-breaking space"
        >
            {x}
        </mark>
    ),
} satisfies Parser;
