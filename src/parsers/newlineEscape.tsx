import type { Parser } from '../index';

/**
 * Marks escaped newline characters.
 */
export const newlineEscape = {
    rule: '\\n',
    tag: x => (
        <mark data-mark="newlineEscape" title="Escaped newline">
            {x}
        </mark>
    ),
} satisfies Parser;
