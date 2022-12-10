import type { Parser } from '../index';

/**
 * Marks Python formatting named variables.
 *
 * Example matches:
 *
 *   %(name)s
 *   %(number)D
 */
export const pythonFormatNamedString = {
    rule: /(%\([[\w\d!.,[\]%:$<>+\-= ]*\)[+|-|0\d+|#]?[.\d+]?[s|d|e|f|g|o|x|c|%])/i,
    tag: x => (
        <mark data-mark="pythonFormatNamedString" title="Python format string">
            {x}
        </mark>
    ),
} satisfies Parser;
