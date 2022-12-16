import { render } from '@testing-library/react';
import each from 'jest-each';
import { createMarker } from '../createMarker';

import { pythonFormattingVariable } from './pythonFormattingVariable';

describe('pythonFormattingVariable', () => {
    each([
        ['%%', '100%% correct'],
        ['%s', 'There were %s'],
        ['%(number)d', 'There were %(number)d cows'],
        ['%(cows.number)d', 'There were %(cows.number)d cows'],
        ['%(number of cows)d', 'There were %(number of cows)d cows'],
        ['%(number)03d', 'There were %(number)03d cows'],
        ['%(number)*d', 'There were %(number)*d cows'],
        ['%(number)3.1d', 'There were %(number)3.1d cows'],
        ['%(number)Ld', 'There were %(number)Ld cows'],
        ['%s', 'path/to/file_%s.png'],
        ['%s', 'path/to/%sfile.png'],
    ]).it('marks `%s` in `%s`', (mark, content) => {
        const Marker = createMarker([pythonFormattingVariable]);
        const { container } = render(<Marker>{content}</Marker>);
        const marks = container.querySelectorAll('mark');
        expect(marks).toHaveLength(1);
        expect(marks[0].textContent).toEqual(mark);
    });

    each([
        ['10 % complete'],
        // We used to match '%(number) 3d' here, but don't anymore to avoid
        // false positives.
        // See https://bugzilla.mozilla.org/show_bug.cgi?id=1251186
        ['There were %(number) 3d cows'],
    ]).it('does not mark anything in `%s`', content => {
        const Marker = createMarker([pythonFormattingVariable]);
        const { container } = render(<Marker>{content}</Marker>);
        const marks = container.querySelectorAll('mark');
        expect(marks).toHaveLength(0);
    });
});
