import type { Parser } from '../index';

/**
 * Marks terms that look like an email address. Includes an eventual
 * "mailto:" scheme if found.
 *
 * Example matches:
 *
 *   lisa@example.org
 *   mailto:USER@example.me
 *
 * Source:
 * https://github.com/translate/translate/blob/2.3.1/translate/storage/placeables/general.py#L220
 */
export const emailPattern = {
    rule: /(((mailto:)|)[A-Za-z0-9]+[-a-zA-Z0-9._%]*@(([-A-Za-z0-9]+)\.)+[a-zA-Z]{2,4})/,
    matchIndex: 0,
    tag: x => (
        <mark data-mark="emailPattern" title="Email">
            {x}
        </mark>
    ),
} satisfies Parser;
