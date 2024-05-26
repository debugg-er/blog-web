export function isSubpath(pathname: string, subpath: string) {
  return pathname.match(new RegExp(subpath + '(\\/|$)'))
}
