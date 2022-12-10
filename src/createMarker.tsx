import { cloneElement, ReactNode } from 'react';

import type { Parser } from './index';
import { mark } from './mark';

let keyCounter = 0;

/**
 * Creates a React component class to mark content based on rules.
 *
 * The component takes its children and marks them using the rules of the
 * parsers that are provided.
 *
 * @param parsers A list of Parser systems. A Parser must
 * define a `rule` and a `tag`. The `rule` can be either a string to match
 * terms or a RegExp. Note that a RegExp must have parentheses surrounding
 * your pattern, otherwise matches won't be captured. The `tag` is a function
 * that accepts a string (the matched term or pattern) and returns a React
 * element that will replace the match in the output. Parsers can also pass a
 * `matchIndex` parameter, a number that will be used when using a RegExp to
 * chose which match to pass to the `tag` function.
 *
 * @returns A functional component that applies `parsers` to its `children`.
 */
export const createMarker =
    (parsers: Array<Parser>): React.FC<{ children: ReactNode | ReactNode[] }> =>
    ({ children }) => {
        if (!children) {
            return null;
        }

        let res: ReactNode[] = Array.isArray(children) ? children : [children];
        for (let parser of parsers) {
            // Returns a clone of the element returned by the tag function,
            // but makes sure that it has a `key` attribute.
            const tag = (x: string) =>
                cloneElement(parser.tag(x), { key: ++keyCounter });
            res = mark(res, parser.rule, tag, parser.matchIndex);
        }

        return <>{res}</>;
    };
