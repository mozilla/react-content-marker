import { render } from '@testing-library/react';
import each from 'jest-each';
import { createMarker } from '../createMarker';

import { fluentFunction } from './fluentFunction';

describe('fluentFunction', () => {
    each([
        ['{COPY()}', 'Hello {COPY()}'],
        ['{ DATETIME($date) }', 'Hello { DATETIME($date) }'],
        [
            '{ NUMBER($ratio, minimumFractionDigits: 2) }',
            'Hello { NUMBER($ratio, minimumFractionDigits: 2) }',
        ],
    ]).it('marks `%s` in `%s`', (mark, content) => {
        const Marker = createMarker([fluentFunction]);
        const { container } = render(<Marker>{content}</Marker>);
        const marks = container.querySelectorAll('mark');
        expect(marks).toHaveLength(1);
        expect(marks[0].textContent).toEqual(mark);
    });

    each([
        [
            '{ DATETIME($date) }',
            '{ COPY() }',
            'Hello { DATETIME($date) } and { COPY() }',
        ],
    ]).it('marks `%s` and `%s` in `%s`', (mark1, mark2, content) => {
        const Marker = createMarker([fluentFunction]);
        const { container } = render(<Marker>{content}</Marker>);
        const marks = container.querySelectorAll('mark');
        expect(marks).toHaveLength(2);
        expect(marks[0].textContent).toEqual(mark1);
        expect(marks[1].textContent).toEqual(mark2);
    });
});
