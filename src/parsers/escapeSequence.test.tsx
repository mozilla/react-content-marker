import { render } from '@testing-library/react';
import { createMarker } from '../createMarker';

import { escapeSequence } from './escapeSequence';

describe('escapeSequence', () => {
    it('marks the right parts of a string', () => {
        const Marker = createMarker([escapeSequence]);
        const content = 'hello,\\tworld';

        const { container } = render(<Marker>{content}</Marker>);
        const marks = container.querySelectorAll('mark');
        expect(marks).toHaveLength(1);
        expect(marks[0].textContent).toEqual('\\');
    });
});
