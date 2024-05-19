export type Variant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
export type Size = 'default' | 'sm' | 'lg' | 'icon'

export type BaseProps = {
  variant?: Variant
  size?: Size
}

export type CvaParams<T extends Record<string, string>> = {
  [key in keyof Required<T>]: {
    [key2 in Required<T>[key]]: string
  }
}
