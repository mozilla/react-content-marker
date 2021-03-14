export type TagFunction = (input: string) => React.ReactElement<any>;

export type Parser = {
    rule: string | RegExp;
    tag: TagFunction;
    matchIndex?: number;
};
