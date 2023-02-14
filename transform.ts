import * as ts from 'typescript';

export default function transformer() {
    return (_: ts.TransformationContext) => {
        return (source: ts.SourceFile) => source;
    };
}
