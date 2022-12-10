import { render } from '@testing-library/react';
import each from 'jest-each';
import { createMarker } from '../createMarker';

import { xmlTag } from './xmlTag';

describe('xmlTag', () => {
    each([
        ['<user>', 'hello, <user>John'],
        ['</user>', 'hello, </user>'],
        ['<user name="John">', 'hello, <user name="John">'],
        ["<user name='John'>", "hello, <user name='John'>"],
        ["<user data-name='John'>", "hello, <user data-name='John'>"],
        ['<User.Birthday>', 'Happy <User.Birthday>!'],
    ]).it('marks `%s` in `%s`', (mark, content) => {
        const Marker = createMarker([xmlTag]);
        const { container } = render(<Marker>{content}</Marker>);
        const marks = container.querySelectorAll('mark');
        expect(marks).toHaveLength(1);
        expect(marks[0].textContent).toEqual(mark);
    });
});
