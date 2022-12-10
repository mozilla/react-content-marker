import { render } from '@testing-library/react';
import each from 'jest-each';
import { createMarker } from '../createMarker';

import { nsisVariable } from './nsisVariable';

describe('nsisVariable', () => {
    each([
        ['$Brand', '$Brand'],
        ['$BrandName', 'Welcome to $BrandName'],
        ['$MyVar13', 'I am $MyVar13'],
    ]).it('marks `%s` in `%s`', (mark, content) => {
        const Marker = createMarker([nsisVariable]);
        const { container } = render(<Marker>{content}</Marker>);
        const marks = container.querySelectorAll('mark');
        expect(marks).toHaveLength(1);
        expect(marks[0].textContent).toEqual(mark);
    });

    each([['$10'], ['foo$bar']]).it(
        'does not mark anything in `%s`',
        content => {
            const Marker = createMarker([nsisVariable]);
            const { container } = render(<Marker>{content}</Marker>);
            const marks = container.querySelectorAll('mark');
            expect(marks).toHaveLength(0);
        }
    );
});
