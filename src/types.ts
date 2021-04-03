export type TagFunction = (input: string, startPos: number, endPos: number) => React.ReactElement<any>;

export type Parser = {
    rule: string | RegExp;
    tag: TagFunction;
    matchIndex?: number;
};
