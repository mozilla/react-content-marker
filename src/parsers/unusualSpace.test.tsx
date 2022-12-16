import { render } from '@testing-library/react';
import each from 'jest-each';
import { createMarker } from '../createMarker';

import { unusualSpace } from './unusualSpace';

describe('unusualSpace', () => {
    each([
        [' ', 'hello world '],
        [' ', 'hello\n world'],
        ['  ', 'hello  world'],
    ]).it('marks `%s` in `%s`', (mark, content) => {
        const Marker = createMarker([unusualSpace]);
        const { container } = render(<Marker>{content}</Marker>);
        const marks = container.querySelectorAll('mark');
        expect(marks).toHaveLength(1);
        expect(marks[0].textContent).toEqual(mark);
    });
});
