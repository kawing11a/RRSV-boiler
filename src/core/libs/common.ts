export type HTMLAttributes<K extends keyof JSX.IntrinsicElements> = (
    JSX.IntrinsicElements[K] extends React.DetailedHTMLProps<infer A, any> ? (
        A
    ) : never
);

export type HTMLAttributesWithIs<K extends keyof JSX.IntrinsicElements> = {
    as?: K;
} & HTMLAttributes<K>;

