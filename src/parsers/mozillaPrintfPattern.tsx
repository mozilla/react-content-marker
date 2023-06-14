import type { Parser } from '../index';

/**
 * Marks placeables in the format of Mozilla's printf string syntax.
 * 
 * Example matches:
 *
 *   %S
 *   %1$S
 *   %@
 *   %2$@
 */
export const mozillaPrintfPattern: Parser = {
    rule: /%(?:[1-9]\$)?[S@]/,
    matchIndex: 0,
    tag: x => (
        <mark data-mark="mozillaPrintfPattern" title="Placeable">
            {x}
        </mark>
    ),
};
