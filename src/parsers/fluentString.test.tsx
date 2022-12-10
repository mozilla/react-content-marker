import { render } from '@testing-library/react';
import each from 'jest-each';
import { createMarker } from '../createMarker';

import { fluentString } from './fluentString';

describe('fluentString', () => {
    each([
        ['{""}', 'Hello {""}'],
        ['{ "" }', 'Hello { "" }'],
        ['{ "world!" }', 'Hello { "world!" }'],
    ]).it('marks `%s` in `%s`', (mark, content) => {
        const Marker = createMarker([fluentString]);
        const { container } = render(<Marker>{content}</Marker>);
        const marks = container.querySelectorAll('mark');
        expect(marks).toHaveLength(1);
        expect(marks[0].textContent).toEqual(mark);
    });

    each([
        [
            '{ "hello!" }',
            '{ "world!" }',
            'Hello { "hello!" } from { "world!" }',
        ],
    ]).it('marks `%s` and `%s` in `%s`', (mark1, mark2, content) => {
        const Marker = createMarker([fluentString]);
        const { container } = render(<Marker>{content}</Marker>);
        const marks = container.querySelectorAll('mark');
        expect(marks).toHaveLength(2);
        expect(marks[0].textContent).toEqual(mark1);
        expect(marks[1].textContent).toEqual(mark2);
    });
});
