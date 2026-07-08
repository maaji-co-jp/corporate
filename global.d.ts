declare module '*.css' {
    const exports: {
        [exportName: string]: string
    };
    export = exports
}

declare module '*.jpg' {
    const src: string
    export default src
}
