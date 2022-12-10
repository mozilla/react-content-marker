import type { Parser } from '../index';

/**
 * Marks JSON format placeholders as used by the WebExtension API.
 *
 * Terms must start and end with a dollar sign "$" and contain only capital
 * letters or underscores.
 *
 * Example matches:
 *
 *   $USER$
 *   $FIRST_NAME$
 */
export const jsonPlaceholder = {
    rule: /(\$[A-Z0-9_]+\$)/,
    tag: x => (
        <mark data-mark="jsonPlaceholder" title="JSON placeholder">
            {x}
        </mark>
    ),
} satisfies Parser;
