import { render } from '@testing-library/react';
import each from 'jest-each';
import { createMarker } from '../createMarker';

import { javaFormattingVariable } from './javaFormattingVariable';

describe('javaFormattingVariable', () => {
    each([
        ['{1,time}', 'At {1,time}'],
        ['{1,date}', 'on {1,date}, '],
        ['{2}', 'there was {2} '],
        ['{0,number,integer}', 'n planet {0,number,integer}.'],
    ]).it('marks `%s` in `%s`', (mark, content) => {
        const Marker = createMarker([javaFormattingVariable]);
        const { container } = render(<Marker>{content}</Marker>);
        const marks = container.querySelectorAll('mark');
        expect(marks).toHaveLength(1);
        expect(marks[0].textContent).toEqual(mark);
    });
});
