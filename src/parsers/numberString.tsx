import type { Parser } from '../index';

/**
 * Marks numbers.
 *
 * Example matches:
 *
 *   42
 *   42.0
 *   4,200.00
 *   4 200.00 (with no-break space)
 *
 * Source:
 * https://github.com/translate/translate/blob/2.3.1/translate/storage/placeables/general.py#L72
 */
export const numberString = {
    rule: /([-+]?[0-9]+([\u00A0.,][0-9]+)*)\b/u,
    matchIndex: 0,
    tag: x => (
        <mark data-mark="numberString" title="Number">
            {x}
        </mark>
    ),
} satisfies Parser;
