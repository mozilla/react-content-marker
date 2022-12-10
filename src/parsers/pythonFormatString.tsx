import type { Parser } from '../index';

/**
 * Marks Python new string formatting variables.
 *
 * Documentation:
 * https://docs.python.org/3/library/string.html#formatstrings
 *
 * Example matches:
 *
 *   {0}
 *   {number}
 *   {foo[42]}
 */
export const pythonFormatString = {
    rule: /(\{{?[\w\d!.,[\]%:$<>+-= ]*\}?})/,
    tag: x => (
        <mark data-mark="pythonFormatString" title="Python format string">
            {x}
        </mark>
    ),
} satisfies Parser;
