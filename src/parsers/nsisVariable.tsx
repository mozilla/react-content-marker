import type { Parser } from '../index';

/**
 * Marks NSIS variables.
 *
 * Example matches:
 *
 *   $Brand
 *   $BrandShortName
 */
export const nsisVariable = {
    rule: /(^|\s)(\$[a-zA-Z][\w]*)/,
    matchIndex: 2,
    tag: x => (
        <mark data-mark="nsisVariable" title="NSIS variable">
            {x}
        </mark>
    ),
} satisfies Parser;
