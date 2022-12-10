import { render } from '@testing-library/react';
import each from 'jest-each';
import { createMarker } from '../createMarker';

import { punctuation } from './punctuation';

describe('punctuation', () => {
    each([
        ['™', 'Pontoon™'],
        ['℉', '9℉ OMG so cold'],
        ['π', 'She had π cats'],
        ['ʼ', 'Please use the correct quote: ʼ'],
        ['«', 'Here comes the French: «'],
        ['€', 'Gimme the €'],
        ['…', 'Downloading…'],
        ['—', 'Hello — Lisa'],
        ['–', 'Hello – Lisa'],
        [' ', 'Hello\u202Fworld'],
    ]).it('marks `%s` in `%s`', (mark, content) => {
        const Marker = createMarker([punctuation]);
        const { container } = render(<Marker>{content}</Marker>);
        const marks = container.querySelectorAll('mark');
        expect(marks).toHaveLength(1);
        expect(marks[0].textContent).toEqual(mark);
    });

    each([['These, are not. Special: punctuation; marks! Or are "they"?']]).it(
        'does not mark anything in `%s`',
        content => {
            const Marker = createMarker([punctuation]);
            const { container } = render(<Marker>{content}</Marker>);
            const marks = container.querySelectorAll('mark');
            expect(marks).toHaveLength(0);
        }
    );
});
