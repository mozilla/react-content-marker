import type { Parser } from '../index';

/**
 * Marks XML entities.
 *
 * Example matches:
 *
 *   &brandShortName;
 *   &#1234;
 *
 * Source:
 * https://github.com/translate/translate/blob/2.3.1/translate/storage/placeables/general.py#L254
 */
export const xmlEntity = {
    rule: /(&(([a-zA-Z][a-zA-Z0-9.-]*)|([#](\d{1,5}|x[a-fA-F0-9]{1,5})+));)/,
    matchIndex: 0,
    tag: x => (
        <mark data-mark="xmlEntity" title="XML entity">
            {x}
        </mark>
    ),
} satisfies Parser;
