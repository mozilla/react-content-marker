import { render } from '@testing-library/react';
import each from 'jest-each';
import { createMarker } from '../createMarker';

import { pythonFormatNamedString } from './pythonFormatNamedString';

describe('pythonFormatNamedString', () => {
    each([
        ['%(name)s', 'Hello %(name)s'],
        ['%(number)d', 'Rolling %(number)d dices'],
        ['%(name)S', 'Hello %(name)S'],
        ['%(number)D', 'Rolling %(number)D dices'],
    ]).it('marks `%s` in `%s`', (mark, content) => {
        const Marker = createMarker([pythonFormatNamedString]);
        const { container } = render(<Marker>{content}</Marker>);
        const marks = container.querySelectorAll('mark');
        expect(marks).toHaveLength(1);
        expect(marks[0].textContent).toEqual(mark);
    });
});
