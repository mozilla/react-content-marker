import React from 'react';

import markRegExp from './markRegExp';
import markTerm from "./markTerm";


describe('markRegExp', () => {
    it('correctly marks matches of a simple pattern', () => {
        const content = 'A horse, a horse, my kingdom for a horse.';

        const res = markRegExp(content, /(horse)/, x => <mark>{x}</mark>);
        const expected = [
            'A ',
            <mark>{ 'horse' }</mark>,
            ', a ',
            <mark>{ 'horse' }</mark>,
            ', my kingdom for a ',
            <mark>{ 'horse' }</mark>,
            '.',
        ];
        expect(res).toEqual(expected);
    });

    it('correctly marks matches of a more complex pattern', () => {
        const content = 'Foux du fa fa';

        const res = markRegExp(content, /(f\w+)/i, x => <mark>{x}</mark>);
        const expected = [
            <mark>{ 'Foux' }</mark>,
            ' du ',
            <mark>{ 'fa' }</mark>,
            ' ',
            <mark>{ 'fa' }</mark>,
        ];
        expect(res).toEqual(expected);
    });

    it('correctly marks unusual spaces', () => {
        const content = 'hello world ';

        const res = markRegExp(content, /( +$)/, x => <mark>{x}</mark>);
        const expected = [
            'hello world',
            <mark>{ ' ' }</mark>,
        ];
        expect(res).toEqual(expected);
    });

    it('correctly marks the entire content', () => {
        const content = 'horse';

        const res = markRegExp(content, /(horse)/, x => <mark>{x}</mark>);
        const expected = [
            <mark>{ 'horse' }</mark>,
        ];
        expect(res).toEqual(expected);
    });

    it('supports attributes in tag', () => {
        const content = 'word';

        const res = markRegExp(
            content, /(word)/, x => <mark title='Word Finder'>{x}</mark>
        );

        const expected = [
            <mark title='Word Finder'>{ 'word' }</mark>,
        ];
        expect(res).toEqual(expected);
    });

    it('returns the input as an array if there is no match', () => {
        const content = 'A horse, a horse, my kingdom for a horse.';

        const res = markRegExp(content, /(missing)/, x => <mark>{x}</mark>);

        const expected = [content];
        expect(res).toEqual(expected);
    });

    it('supports having several capturing groups in the rule', () => {
        const content = 'A horse, a horse, my kingdom for a horse.';

        const res = markRegExp(content, /(a (horse)|A (horse))/, x => <mark>{x}</mark>);

        const expected = [
            'A ',
            <mark>{ 'horse' }</mark>,
            ', a ',
            <mark>{ 'horse' }</mark>,
            ', my kingdom for a ',
            <mark>{ 'horse' }</mark>,
            '.',
        ];
        expect(res).toEqual(expected);
    });

    it('marks the group defined with matchIndex', () => {
        const content = 'A horse, a horse, my kingdom for a horse.';

        const res = markRegExp(
            content,
            /(a (horse)|A (horse))/,
            x => <mark>{x}</mark>,
            0
        );

        const expected = [
            <mark>{ 'A horse' }</mark>,
            ', ',
            <mark>{ 'a horse' }</mark>,
            ', my kingdom for ',
            <mark>{ 'a horse' }</mark>,
            '.',
        ];
        expect(res).toEqual(expected);
    });


    it('pass the position of a placeable', () => {
        const content = 'A horse, a horse, my kingdom for a horse and another kingdom.';
        const tagMock = jest.fn(x => <mark>{x}</mark>)
        const regex = /(another|kingdom)/;
        const placeholder1 = "another"
        const placeholder2 = "kingdom"

        const res = markRegExp(content, regex, tagMock);
        const expected = [
            'A horse, a horse, my ',
            <mark>{'kingdom'}</mark>,
            ' for a horse and ',
            <mark>{'another'}</mark>,
            ' ',
            <mark>{'kingdom'}</mark>,
            '.'
        ]
        expect(res).toEqual(expected);
        expect(tagMock.mock.calls.length).toBe(3);
        expect(tagMock.mock.calls[0]).toEqual([placeholder2, 21, 28])
        expect(tagMock.mock.calls[1]).toEqual([placeholder1, 45, 52])
        expect(tagMock.mock.calls[2]).toEqual([placeholder2, 53, 60])

        let [, startPos, endPos] = tagMock.mock.calls[0];
        expect(endPos - startPos).toEqual(placeholder2.length);
        expect(content.substring(startPos, endPos)).toEqual(placeholder2);

        [, startPos, endPos] = tagMock.mock.calls[1];
        expect(endPos - startPos).toEqual(placeholder1.length);
        expect(content.substring(startPos, endPos)).toEqual(placeholder1);

        [, startPos, endPos] = tagMock.mock.calls[2];
        expect(endPos - startPos).toEqual(placeholder2.length);
        expect(content.substring(startPos, endPos)).toEqual(placeholder2);
    });
});
