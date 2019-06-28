/* @flow */

import * as React from 'react';


/**
 * Replaces matching patterns in a string with markers.
 *
 * @param {string} content The content to parse and mark.
 *
 * @param {RegExp} rule The pattern to search and replace in the content.
 *
 * @param {Function} tag A function that takes the match string and must return
 * a React component or a string. The value returned by that function will
 * replace the term in the output.
 *
 * @param {number} matchIndex The index of the match to use when marking with
 * a RegExp. If not provided, will use the last non-null match available.
 *
 * @returns {Array} An array of strings and React components, similar to the
 * original content but where each matching pattern has been replaced by a
 * marking component.
 */
export default function markRegExp(
    content: string,
    rule: RegExp,
    tag: (string) => React.Node,
    matchIndex: ?number,
): Array<string | React.Node> {
    const output = [];

    let remaining = content;
    let matches = rule.exec(remaining);

    while (matches) {
        let match;
        if (typeof matchIndex !== 'undefined' && matchIndex !== null) {
            match = matches[matchIndex];
        }
        else {
            // Use the last non-null matching form. This is to support several
            // capture groups in the rule.
            match = matches.reduce((acc, cur) => cur || acc, '');
        }

        // Take only the part that can contain the match.
        const matchingContent = remaining.slice(matches.index);
        // Then split only that part.
        const [previous, ...rest] = matchingContent.split(match);

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
