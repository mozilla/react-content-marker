import type { Parser } from '../index';

/**
 * Marks the tab character "\t".
 */
export const tabCharacter = {
    rule: '\t',
    tag: x => (
        <mark data-mark="tabCharacter" data-match={x} title="Tab character">
            <span aria-hidden>&rarr;</span>
        </mark>
    ),
} satisfies Parser;
