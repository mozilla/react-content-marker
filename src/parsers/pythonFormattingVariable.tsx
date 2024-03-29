import type { Parser } from '../index';

/**
 * Marks Python string formatting variables.
 *
 * Implemented following Python documentation on String Formatting Operations:
 * https://docs.python.org/2/library/stdtypes.html#string-formatting
 *
 * Example matches:
 *
 *   %s
 *   %(tag)d
 *   %(number)3.1d
 *
 * Source:
 * https://github.com/translate/translate/blob/2.3.1/translate/storage/placeables/general.py#L115
 */
export const pythonFormattingVariable = {
    rule: /(%(%|(\([^)]+\)){0,1}[-+0#]{0,1}(\d+|\*){0,1}(\.(\d+|\*)){0,1}[hlL]{0,1}[diouxXeEfFgGcrs]{1}))/,
    matchIndex: 0,
    tag: x => (
        <mark
            data-mark="pythonFormattingVariable"
            title="Python string formatting variable"
        >
            {x}
        </mark>
    ),
} satisfies Parser;
