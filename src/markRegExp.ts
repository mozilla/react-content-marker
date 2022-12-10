import * as React from 'react';

import type { TagFunction } from './index';

/**
 * Replaces matching patterns in a string with markers.
 *
 * @param content The content to parse and mark.
 *
 * @param rule The pattern to search and replace in the content.
 *
 * @param tag A function that takes the match string and must return
 * a React component or a string. The value returned by that function will
 * replace the term in the output.
 *
 * @param matchIndex The index of the match to use when marking with
 * a RegExp. If not provided, will use the last non-null match available.
 *
 * @returns An array of strings and components,
 * similar to the original content but where each matching pattern has been
 * replaced by a marking component.
 */
export function markRegExp(
    content: string,
    rule: RegExp,
    tag: TagFunction,
    matchIndex?: number
): React.ReactNode[] {
    const output: React.ReactNode[] = [];
    let remaining = content;
    let matches = rule.exec(remaining);

    while (matches) {
        let match;
        if (typeof matchIndex === 'number') {
            match = matches[matchIndex];
        } else {
            // Use the last non-empty matching form. This is to support several
            // capture groups in the rule.
            match = matches.reduce((acc, cur) => cur || acc, '');
        }

        // Take only the part that can contain the match.
        const matchingContent = remaining.slice(matches.index);
        // Then split only that part.
        const [previous] = matchingContent.split(match);

        // Reconstruct everything before the match.
        let beginning = remaining.slice(0, matches.index);
        if (previous) {
            beginning += previous;
        }
        // Reconstruct everything after the match.
        remaining = remaining.slice(beginning.length + match.length);

        // Add the parts that have been parsed to the output.
        if (beginning) {
            output.push(beginning);
        }
        output.push(tag(match));

        // Compute the next step.
        matches = rule.exec(remaining);
    }

    if (remaining) {
        output.push(remaining);
    }

    return output;
}
