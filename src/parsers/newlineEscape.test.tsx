import { render } from '@testing-library/react';
import { createMarker } from '../createMarker';

import { newlineEscape } from './newlineEscape';

describe('newlineEscape', () => {
    it('marks the right parts of a string', () => {
        const Marker = createMarker([newlineEscape]);
        const content = '\\n';

        const { container } = render(<Marker>{content}</Marker>);
        const marks = container.querySelectorAll('mark');
        expect(marks).toHaveLength(1);
        expect(marks[0].textContent).toEqual('\\n');
    });
});
