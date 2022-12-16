import type { Parser } from '../index';

/**
 * Marks string expressions from Fluent syntax.
 *
 * Documentation: https://projectfluent.org/fluent/guide/special.html#quoted-text
 *
 * Example matches:
 *
 *   { "" }
 *   { "Hello, World" }
 */
export const fluentString = {
    rule: /({ ?"[^}]*" ?})/,
    tag: x => (
        <mark data-mark="fluentString" title="Fluent string expression">
            {x}
        </mark>
    ),
} satisfies Parser;
