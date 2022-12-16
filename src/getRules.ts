import type { Parser } from '.';
import { altAttribute } from './parsers/altAttribute';
import { camelCaseString } from './parsers/camelCaseString';
import { emailPattern } from './parsers/emailPattern';
import { escapeSequence } from './parsers/escapeSequence';
import { filePattern } from './parsers/filePattern';
import { fluentFunction } from './parsers/fluentFunction';
import { fluentParametrizedTerm } from './parsers/fluentParametrizedTerm';
import { fluentString } from './parsers/fluentString';
import { fluentTerm } from './parsers/fluentTerm';
import { javaFormattingVariable } from './parsers/javaFormattingVariable';
import { jsonPlaceholder } from './parsers/jsonPlaceholder';
import { leadingSpace } from './parsers/leadingSpace';
import { multipleSpaces } from './parsers/multipleSpaces';
import { narrowNonBreakingSpace } from './parsers/narrowNonBreakingSpace';
import { newlineCharacter } from './parsers/newlineCharacter';
import { newlineEscape } from './parsers/newlineEscape';
import { nonBreakingSpace } from './parsers/nonBreakingSpace';
import { nsisVariable } from './parsers/nsisVariable';
import { numberString } from './parsers/numberString';
import { optionPattern } from './parsers/optionPattern';
import { punctuation } from './parsers/punctuation';
import { pythonFormatNamedString } from './parsers/pythonFormatNamedString';
import { pythonFormatString } from './parsers/pythonFormatString';
import { pythonFormattingVariable } from './parsers/pythonFormattingVariable';
import { qtFormatting } from './parsers/qtFormatting';
import { shortCapitalNumberString } from './parsers/shortCapitalNumberString';
import { stringFormattingVariable } from './parsers/stringFormattingVariable';
import { tabCharacter } from './parsers/tabCharacter';
import { thinSpace } from './parsers/thinSpace';
import { unusualSpace } from './parsers/unusualSpace';
import { uriPattern } from './parsers/uriPattern';
import { xmlEntity } from './parsers/xmlEntity';
import { xmlTag } from './parsers/xmlTag';

/**
 * Build an array of parser rules from those included in the package:
 * an extensive set suitable for highlighting localizable text.
 * Originally built for and used by [Pontoon](https://pontoon.mozilla.org/).
 *
 * All options default to `false`:
 * - `fluent`: Include rules for [Project Fluent](https://projectfluent.org/) syntax.
 * - `leadingSpaces`: Include rules for leading spaces.
 *
 * For a fully custom set of rules,
 * explore and import the individual rules available under `react-content-marker/lib/parsers/`
 * and build your own rule array.
 */
export function getRules(opt?: {
    fluent?: boolean;
    leadingSpaces?: boolean;
}): Parser[] {
    // Note: the order of these MATTERS!
    const rules: Parser[] = [
        newlineEscape,
        newlineCharacter,
        tabCharacter,
        escapeSequence,
    ];

    // The spaces rule can match '\n  ' and mask the newline,
    // so they have to come later.
    if (opt?.leadingSpaces) {
        rules.push(leadingSpace, unusualSpace);
    }
    rules.push(
        nonBreakingSpace,
        narrowNonBreakingSpace,
        thinSpace,
        multipleSpaces
    );

    if (opt?.fluent) {
        rules.push(
            fluentString,
            fluentParametrizedTerm,
            fluentTerm,
            fluentFunction
        );
    }

    rules.push(
        // The XML rules must be marked before variables
        // to avoid marking variables, but leaving out tags.
        // See https://bugzilla.mozilla.org/show_bug.cgi?id=1334926
        xmlTag,
        altAttribute,
        xmlEntity,

        pythonFormatNamedString,
        pythonFormatString,
        pythonFormattingVariable,
        javaFormattingVariable,
        stringFormattingVariable,

        // JSON Placeholder parser Must come before NSIS Variable parser,
        // otherwise JSON Placeholders are marked up without the trailing $
        jsonPlaceholder,
        nsisVariable,

        // The Qt variables can consume the %1 in %1$s which will mask a printf
        // placeable, so it has to come later.
        qtFormatting,

        uriPattern,
        filePattern,
        emailPattern,
        shortCapitalNumberString,
        camelCaseString,
        optionPattern,
        punctuation,
        numberString
    );

    return rules;
}
