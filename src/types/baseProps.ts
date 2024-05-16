export type Variant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
export type Size = 'default' | 'sm' | 'lg' | 'icon'

export type BaseProps = {
    variant?: Variant
    size?: Size
}

type Spread<T extends string> = {
    [key in T]: string
}

export type BasePropsCVA = {
    [key in keyof Required<BaseProps>]: Spread<Required<BaseProps>[key]> // Mapped type to keyof Variant['variant']
}
