import type { Parser } from '../index';

/**
 * Marks parametrized term expressions from Fluent syntax.
 *
 * Documentation: https://projectfluent.org/fluent/guide/terms.html#parameterized-terms
 *
 * Example matches:
 *
 *   {-brand(case: "test")}
 *   { -brand(case: "what ever") }
 *   { -brand-name(foo-bar: "now that's a value!") }
 */
export const fluentParametrizedTerm = {
    rule: /({ ?-[^}]*([^}]*: ?[^}]*) ?})/,
    matchIndex: 1,
    tag: x => (
        <mark
            data-mark="fluentParametrizedTerm"
            title="Fluent parametrized term"
        >
            {x}
        </mark>
    ),
} satisfies Parser;
