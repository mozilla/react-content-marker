import { render } from '@testing-library/react';
import { createMarker } from '../createMarker';

import { narrowNonBreakingSpace } from './narrowNonBreakingSpace';

describe('narrowNonBreakingSpace', () => {
    it('marks the right parts of a string', () => {
        const Marker = createMarker([narrowNonBreakingSpace]);
        const content = 'hello,\u202Fworld';

        const { container } = render(<Marker>{content}</Marker>);
        const marks = container.querySelectorAll('mark');
        expect(marks).toHaveLength(1);
        expect(marks[0].textContent).toEqual('\u202F');
    });
});
