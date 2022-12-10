import { render } from '@testing-library/react';
import each from 'jest-each';
import { createMarker } from '../createMarker';

import { filePattern } from './filePattern';

describe('filePattern', () => {
    each([
        ['/home', '/home'],
        ['/home/lisa', 'Hello /home/lisa'],
        ['/home', 'The path /home leads to your home'],
        ['~/user', 'Hello ~/user'],
        ['/home/homer/budget.md', 'The money is in /home/homer/budget.md'],
    ]).it('marks `%s` in `%s`', (mark, content) => {
        const Marker = createMarker([filePattern]);
        const { container } = render(<Marker>{content}</Marker>);
        const marks = container.querySelectorAll('mark');
        expect(marks).toHaveLength(1);
        expect(marks[0].textContent).toEqual(mark);
    });

    each([['Pause/Resume']]).it('does not mark anything in `%s`', content => {
        const Marker = createMarker([filePattern]);
        const { container } = render(<Marker>{content}</Marker>);
        const marks = container.querySelectorAll('mark');
        expect(marks).toHaveLength(0);
    });
});
