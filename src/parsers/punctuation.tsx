import type { Parser } from '../index';

/**
 * Marks individual punctuation characters.
 *
 * Source:
 * https://github.com/translate/translate/blob/2.3.1/translate/storage/placeables/general.py#L229
 */
export const punctuation = {
    rule: new RegExp(
        '(' +
            '(' +
            /[™©®]|/.source + // Marks
            /[℃℉°]|/.source + // Degree related
            /[±πθ×÷−√∞∆Σ′″]|/.source + // Maths
            /[‘’ʼ‚‛“”„‟]|/.source + // Quote characters
            /[«»]|/.source + // Guillemets
            /[£¥€]|/.source + // Currencies
            /…|/.source + // U2026 - horizontal ellipsis
            /—|/.source + // U2014 - em dash
            /–|/.source + // U2013 - en dash
            /[\u202F]/.source + // U202F - narrow no-break space
            ')+' +
            ')'
    ),
    matchIndex: 0,
    tag: x => (
        <mark data-mark="punctuation" title="Punctuation">
            {x}
        </mark>
    ),
} satisfies Parser;
