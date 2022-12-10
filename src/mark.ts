import * as React from 'react';

import type { TagFunction } from './index';
import { markRegExp } from './markRegExp';
import { markTerm } from './markTerm';

/**
 * Replaces matching patterns in a string with markers.
 *
 * @param content The content to parse and mark.
 *
 * @param rule The pattern to search and replace in the
 * content.
 *
 * @param tag A function that takes the match string and must return
 * a React element. The value returned by that function will
 * replace the term in the output.
 *
 * @param matchIndex The index of the match to use when marking with
 * a RegExp. If not provided, will use the last non-null match available.
 *
 * @returns An array of strings and components,
 * similar to the original content but where each matching pattern has been
 * replaced by a marking component.
 */
export function mark(
    content: string | React.ReactNode[],
    rule: string | RegExp,
    tag: TagFunction,
    matchIndex?: number
): React.ReactNode[] {
    if (!Array.isArray(content)) {
        content = [content];
    }

    const output: React.ReactNode[] = [];
    for (let part of content) {
        if (typeof part === 'string') {
            let marked;
            if (rule instanceof RegExp) {
                marked = markRegExp(part, rule, tag, matchIndex);
            } else if (typeof rule === 'string') {
                marked = markTerm(part, rule, tag);
            } else {
                throw Error(`Unsupported rule type for rule ${rule}.`);
            }

            output.push(...marked);
        } else {
            output.push(part);
        }
    }

    return output;
}
