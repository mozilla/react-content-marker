import type { Parser } from '../index';

/**
 * Marks the newline character "\n".
 */
export const newlineCharacter = {
    rule: '\n',
    tag: x => (
        <mark
            data-mark="newlineCharacter"
            data-match={x}
            title="Newline character"
        >
            <span aria-hidden>¶</span>
            {x}
        </mark>
    ),
} satisfies Parser;
