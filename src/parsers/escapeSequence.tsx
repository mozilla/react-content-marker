import type { Parser } from '../index';

/**
 * Marks the escape character "\".
 */
export const escapeSequence = {
    rule: '\\',
    tag: x => (
        <mark data-mark="escapeSequence" title="Escape sequence">
            {x}
        </mark>
    ),
} satisfies Parser;
