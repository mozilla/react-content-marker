import type { Parser } from '../index';

/**
 * Marks command line options.
 *
 * Example matches:
 *
 *   --help
 *   -i
 *
 * Source:
 * https://github.com/translate/translate/blob/2.3.1/translate/storage/placeables/general.py#L317
 */
export const optionPattern = {
    rule: /(\B(-[a-zA-Z]|--[a-z-]+)\b)/,
    matchIndex: 0,
    tag: x => (
        <mark data-mark="optionPattern" title="Command line option">
            {x}
        </mark>
    ),
} satisfies Parser;
