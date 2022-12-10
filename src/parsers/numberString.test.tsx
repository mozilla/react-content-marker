import { render } from '@testing-library/react';
import each from 'jest-each';
import { createMarker } from '../createMarker';

import { numberString } from './numberString';

describe('numberString', () => {
    each([
        ['25', 'Here is a 25 number'],
        ['-25', 'Here is a -25 number'],
        ['+25', 'Here is a +25 number'],
        ['25.00', 'Here is a 25.00 number'],
        ['2,500.00', 'Here is a 2,500.00 number'],
        ['1\u00A0000,99', 'Here is a 1\u00A0000,99 number'],
    ]).it('marks `%s` in `%s`', (mark, content) => {
        const Marker = createMarker([numberString]);
        const { container } = render(<Marker>{content}</Marker>);
        const marks = container.querySelectorAll('mark');
        expect(marks).toHaveLength(1);
        expect(marks[0].textContent).toEqual(mark);
    });

    each([['3D game']]).it('does not mark anything in `%s`', content => {
        const Marker = createMarker([numberString]);
        const { container } = render(<Marker>{content}</Marker>);
        const marks = container.querySelectorAll('mark');
        expect(marks).toHaveLength(0);
    });
});
