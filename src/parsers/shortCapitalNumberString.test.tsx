import { render } from '@testing-library/react';
import each from 'jest-each';
import { createMarker } from '../createMarker';

import { shortCapitalNumberString } from './shortCapitalNumberString';

describe('shortCapitalNumberString', () => {
    each([
        ['3D', '3D'],
        ['A4', 'Use the A4 paper'],
    ]).it('marks `%s` in `%s`', (mark, content) => {
        const Marker = createMarker([shortCapitalNumberString]);
        const { container } = render(<Marker>{content}</Marker>);
        const marks = container.querySelectorAll('mark');
        expect(marks).toHaveLength(1);
        expect(marks[0].textContent).toEqual(mark);
    });

    each([['I am'], ['3d'], ['3DS']]).it(
        'does not mark anything in `%s`',
        content => {
            const Marker = createMarker([shortCapitalNumberString]);
            const { container } = render(<Marker>{content}</Marker>);
            const marks = container.querySelectorAll('mark');
            expect(marks).toHaveLength(0);
        }
    );
});
