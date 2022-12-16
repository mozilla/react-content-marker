import { render } from '@testing-library/react';
import each from 'jest-each';
import { createMarker } from '../createMarker';

import { qtFormatting } from './qtFormatting';

describe('qtFormatting', () => {
    each([
        ['%1', 'Hello, %1'],
        ['%99', 'Hello, %99'],
        ['%L1', 'Hello, %L1'],
    ]).it('marks `%s` in `%s`', (mark, content) => {
        const Marker = createMarker([qtFormatting]);
        const { container } = render(<Marker>{content}</Marker>);
        const marks = container.querySelectorAll('mark');
        expect(marks).toHaveLength(1);
        expect(marks[0].textContent).toEqual(mark);
    });
});
