import { render } from '@testing-library/react';
import each from 'jest-each';
import { createMarker } from '../createMarker';

import { emailPattern } from './emailPattern';

describe('emailPattern', () => {
    each([
        ['lisa@example.org', 'Hello lisa@example.org'],
        ['mailto:lisa@name.me', 'Hello mailto:lisa@name.me'],
    ]).it('marks `%s` in `%s`', (mark, content) => {
        const Marker = createMarker([emailPattern]);
        const { container } = render(<Marker>{content}</Marker>);
        const marks = container.querySelectorAll('mark');
        expect(marks).toHaveLength(1);
        expect(marks[0].textContent).toEqual(mark);
    });
});
