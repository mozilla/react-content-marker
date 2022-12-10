import type { Parser } from '../index';

/**
 * Marks printf string formatting variables.
 *
 * See `man 3 printf` for documentation. Not everything is supported.
 *
 * Example matches:
 *
 *   %d
 *   %Id
 *   %33d
 *
 * Source:
 * https://github.com/translate/translate/blob/2.3.1/translate/storage/placeables/general.py#L154
 */
export const stringFormattingVariable = {
    rule: /(%(\d+\$)?[-+0#'I]?((\d+)|[*])?(\.\d+)?[hlI]?[cCdiouxXeEfgGnpsS])/,
    matchIndex: 0,
    tag: x => (
        <mark
            data-mark="stringFormattingVariable"
            title="String formatting variable"
        >
            {x}
        </mark>
    ),
} satisfies Parser;
