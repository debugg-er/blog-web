export type Variant = 'primary' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
export type Size = 'md' | 'sm' | 'lg'

export type BaseProps = {
  variant?: Variant
  size?: Size
}

export type CvaParams<T extends Record<string, string>> = {
  [key in keyof Required<T>]: {
    [key2 in Required<T>[key]]: string
  }
}
