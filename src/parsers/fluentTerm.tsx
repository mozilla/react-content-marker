import type { Parser } from '../index';

/**
 * Marks term expressions from Fluent syntax.
 *
 * Documentation: https://projectfluent.org/fluent/guide/terms.html
 *
 * Example matches:
 *
 *   {-brand}
 *   { -brand }
 *   { -brand-name }
 */
export const fluentTerm = {
    rule: /({ ?-[^}]* ?})/,
    tag: x => (
        <mark data-mark="fluentTerm" title="Fluent term">
            {x}
        </mark>
    ),
} satisfies Parser;
