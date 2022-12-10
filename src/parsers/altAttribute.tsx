import type { Parser } from '../index';

/**
 * Marks `alt` attributes and their values inside XML tags.
 *
 * Example matches:
 *
 *   alt="image description"
 *   ALT=""
 *
 * Source:
 * https://github.com/translate/translate/blob/2.3.1/translate/storage/placeables/general.py#L55
 */
export const altAttribute = {
    rule: /(alt=".*?")/i,
    tag: x => (
        <mark data-mark="altAttribute" title="'alt' attribute inside XML tag">
            {x}
        </mark>
    ),
} satisfies Parser;
