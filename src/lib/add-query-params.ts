import path from 'path';

/*
 * Append query params to url
 */
export default function addQueryParams(
  url: string,
  params: { [key: string]: string } = {},
) {
  const joinSymbol = url.includes('&')
    ? '&'
    : url.lastIndexOf('?') > url.lastIndexOf(path.sep)
    ? '&'
    : '?';
  const paramsStr = Object.entries(params)
    .map(([key, val]) => `${key}=${val}`)
    .join('&');
  return `${url}${paramsStr ? joinSymbol : ''}${paramsStr}`;
}
