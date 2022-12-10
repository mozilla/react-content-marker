import { render } from '@testing-library/react';
import each from 'jest-each';
import { createMarker } from '../createMarker';

import { leadingSpace } from './leadingSpace';

describe('leadingSpace', () => {
    each([[' ', ' hello world']]).it('marks `%s` in `%s`', (mark, content) => {
        const Marker = createMarker([leadingSpace]);
        const { container } = render(<Marker>{content}</Marker>);
        const marks = container.querySelectorAll('mark');
        expect(marks).toHaveLength(1);
        expect(marks[0].textContent).toEqual(mark);
    });
});
