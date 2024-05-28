export const isSubpath = (pathname: string, subpath: string) => pathname.match(new RegExp(subpath + '(\\/|$)'))
