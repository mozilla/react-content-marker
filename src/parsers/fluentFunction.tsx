import type { Parser } from '../index';

/**
 * Marks functions from Fluent syntax.
 *
 * Documentation: https://projectfluent.org/fluent/guide/functions.html
 *
 * Example matches:
 *
 *   {COPY()}
 *   { DATETIME($date) }
 *   { NUMBER($ratio, minimumFractionDigits: 2) }
 */
export const fluentFunction = {
    rule: /({ ?[A-W0-9\-_]+[^}]* ?})/,
    tag: x => (
        <mark data-mark="fluentFunction" title="Fluent function">
            {x}
        </mark>
    ),
} satisfies Parser;
