import { render } from '@testing-library/react';
import each from 'jest-each';
import { createMarker } from '../createMarker';

import { xmlEntity } from './xmlEntity';

describe('xmlEntity', () => {
    each([
        ['&brandShortName;', 'Welcome to &brandShortName;'],
        ['&#1234;', 'hello, &#1234;'],
        ['&xDEAD;', 'hello, &xDEAD;'],
    ]).it('marks `%s` in `%s`', (mark, content) => {
        const Marker = createMarker([xmlEntity]);
        const { container } = render(<Marker>{content}</Marker>);
        const marks = container.querySelectorAll('mark');
        expect(marks).toHaveLength(1);
        expect(marks[0].textContent).toEqual(mark);
    });
});
