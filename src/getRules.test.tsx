import { render } from '@testing-library/react';
import each from 'jest-each';
import { createMarker } from './createMarker';
import { getRules } from './getRules';

describe('Test parser order', () => {
    it('matches JSON placeholder', () => {
        const Marker = createMarker(getRules());
        const content = 'You have created $COUNT$ aliases';

        const { container } = render(<Marker>{content}</Marker>);
        const marks = container.querySelectorAll('mark');
        expect(marks).toHaveLength(1);
        expect(marks[0].textContent).toEqual('$COUNT$');
    });
});

describe('Fluent rules', () => {
    each([
        ['Fluent string expression', '{"world"}', 'Hello {"world"}'],
        ['Fluent term', '{ -brand-name }', 'Hello { -brand-name }'],
        [
            'Fluent parametrized term',
            '{ -count($items) }',
            'We have { -count($items) } things',
        ],
        [
            'Fluent function',
            '{ COUNT(items: []) }',
            'I have { COUNT(items: []) } things',
        ],
    ]).it('matches a %s', (_, mark, content) => {
        const Marker = createMarker(getRules({ fluent: true }));
        const { container } = render(<Marker>{content}</Marker>);
        const marks = container.querySelectorAll('mark');
        expect(marks).toHaveLength(1);
        expect(marks[0].textContent).toEqual(mark);
    });
});

describe('Leading spaces', () => {
    it('matches newlines in a string with leadingSpaces: false', () => {
        const Marker = createMarker(getRules({ leadingSpaces: false }));
        const content = 'Hello\nworld';
        const { container } = render(<Marker>{content}</Marker>);
        const marks = container.querySelectorAll('mark');
        expect(marks).toHaveLength(1);
        expect(marks[0].textContent).toContain('\n');
    });

    it('matches newlines in a string with leadingSpaces: true', () => {
        const Marker = createMarker(getRules({ leadingSpaces: true }));
        const content = 'Hello\nworld';
        const { container } = render(<Marker>{content}</Marker>);
        const marks = container.querySelectorAll('mark');
        expect(marks).toHaveLength(1);
        expect(marks[0].textContent).toContain('\n');
    });

    it('does not match spaces at the beginning of a string with leadingSpaces: false', () => {
        const Marker = createMarker(getRules({ leadingSpaces: false }));
        const content = ' Hello world';
        const { container } = render(<Marker>{content}</Marker>);
        const marks = container.querySelectorAll('mark');
        expect(marks).toHaveLength(0);
    });

    it('matches spaces at the beginning of a string with leadingSpaces: true', () => {
        const Marker = createMarker(getRules({ leadingSpaces: true }));
        const content = ' Hello world';
        const { container } = render(<Marker>{content}</Marker>);
        const marks = container.querySelectorAll('mark');
        expect(marks).toHaveLength(1);
        expect(marks[0].textContent).toEqual(' ');
    });
});
