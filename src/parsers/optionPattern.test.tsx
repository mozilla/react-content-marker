import { render } from '@testing-library/react';
import each from 'jest-each';
import { createMarker } from '../createMarker';

import { optionPattern } from './optionPattern';

describe('optionPattern', () => {
    each([
        ['--help', 'Type --help for this help'],
        ['-S', 'Short -S ones also'],
    ]).it('marks `%s` in `%s`', (mark, content) => {
        const Marker = createMarker([optionPattern]);
        const { container } = render(<Marker>{content}</Marker>);
        const marks = container.querySelectorAll('mark');
        expect(marks).toHaveLength(1);
        expect(marks[0].textContent).toEqual(mark);
    });
});
