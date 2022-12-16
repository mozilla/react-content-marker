import type { TagFunction } from './index';

/**
 * Replaces matching terms in a string with markers.
 *
 * @param content The content to parse and mark.
 *
 * @param term The term to search and replace in the content. Case sensitive.
 *
 * @param tag A function that takes the matched term and must return
 * a React component or a string. The value returned by that function will
 * replace the term in the output.
 *
 * @returns An array of strings and components,
 * similar to the original content but where each matching pattern has been
 * replaced by a marking component.
 */
export function markTerm(
    content: string,
    term: string,
    tag: TagFunction
): React.ReactNode[] {
    const parts = content.split(term);
    const output: React.ReactNode[] = [];
    if (parts[0]) {
        output.push(parts[0]);
    }
    for (let i = 1; i < parts.length; i++) {
        output.push(tag(term));
        if (parts[i]) {
            output.push(parts[i]);
        }
    }
    return output;
}
