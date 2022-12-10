import type { Parser } from '../index';

/**
 * Marks 2-letters-long terms containing a combination of a capital letter and
 * a number.
 *
 * Example matches:
 *
 *   3D
 *   A4
 */
export const shortCapitalNumberString = {
    rule: /(\b([A-Z][0-9])|([0-9][A-Z])\b)/,
    tag: x => (
        <mark
            data-mark="shortCapitalNumberString"
            title="Short capital letter and number string"
        >
            {x}
        </mark>
    ),
} satisfies Parser;
