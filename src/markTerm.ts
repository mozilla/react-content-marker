import * as React from 'react';

import type {TagFunction} from './types';


/**
 * Replaces matching terms in a string with markers.
 *
 * @param {string} content The content to parse and mark.
 *
 * @param {string} term The term to search and replace in the content. Case
 * sensitive.
 *
 * @param {Function} tag A function that takes the matched term and must return
 * a React component or a string. The value returned by that function will
 * replace the term in the output.
 *
 * @returns {React.ReactNodeArray} A ReactNodeArray of strings and components,
 * similar to the original content but where each matching pattern has been
 * replaced by a marking component.
 */
export default function markTerm(
    content: string,
    term: string,
    tag: TagFunction,
): React.ReactNodeArray {
    const output = [];

    const pos = content.indexOf(term);

    if (pos === -1) {
        return [content];
    }

    const parts = content.split(term);

    let lastIndex = parts.length -1;
    let startPos = 0;

    for (let i = 0; i < lastIndex; i++) {
        if (parts[i]) {
            startPos += parts[i].length
            output.push(parts[i]);
        }

        output.push(tag(term, startPos, startPos + term.length));
        startPos += term.length;
    }

    if (parts[lastIndex]) {
        output.push(parts[lastIndex]);
    }

    return output;
}
