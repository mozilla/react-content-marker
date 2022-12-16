import { render } from '@testing-library/react';
import each from 'jest-each';
import { createMarker } from '../createMarker';

import { pythonFormatString } from './pythonFormatString';

describe('pythonFormatString', () => {
    each([
        ['{0}', 'hello, {0}'],
        ['{name}', 'hello, {name}'],
        ['{name!s}', 'hello, {name!s}'],
        ['{someone.name}', 'hello, {someone.name}'],
        ['{name[0]}', 'hello, {name[0]}'],
    ]).it('marks `%s` in `%s`', (mark, content) => {
        const Marker = createMarker([pythonFormatString]);
        const { container } = render(<Marker>{content}</Marker>);
        const marks = container.querySelectorAll('mark');
        expect(marks).toHaveLength(1);
        expect(marks[0].textContent).toEqual(mark);
    });
});
