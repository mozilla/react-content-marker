import { render } from '@testing-library/react';
import each from 'jest-each';
import { createMarker } from '../createMarker';

import { camelCaseString } from './camelCaseString';

describe('camelCaseString', () => {
    each([
        ['CamelCase', 'Hello CamelCase'],
        ['iPod', 'Hello iPod'],
        ['DokuWiki', 'Hello DokuWiki'],
        ['KBabel', 'Hello KBabel'],
    ]).it('marks `%s` in `%s`', (mark, content) => {
        const Marker = createMarker([camelCaseString]);
        const { container } = render(<Marker>{content}</Marker>);
        const marks = container.querySelectorAll('mark');
        expect(marks).toHaveLength(1);
        expect(marks[0].textContent).toEqual(mark);
    });

    each([['_Bug'], ['NOTCAMEL']]).it(
        'does not mark anything in `%s`',
        content => {
            const Marker = createMarker([camelCaseString]);
            const { container } = render(<Marker>{content}</Marker>);
            const marks = container.querySelectorAll('mark');
            expect(marks).toHaveLength(0);
        }
    );
});
