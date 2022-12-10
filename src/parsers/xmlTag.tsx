import type { Parser } from '../index';

/**
 * Marks XML tags.
 *
 * Example matches:
 *
 *   <user>
 *   </user>
 *   <tag attr="foo" />
 *
 * Source:
 * https://github.com/translate/translate/blob/2.3.1/translate/storage/placeables/general.py#L301
 */
export const xmlTag = {
    rule: /(<[\w.:]+(\s([\w.:-]+=((".*?")|('.*?')))?)*\/?>|<\/[\w.]+>)/,
    matchIndex: 0,
    tag: x => (
        <mark data-mark="xmlTag" title="XML tag">
            {x}
        </mark>
    ),
} satisfies Parser;
