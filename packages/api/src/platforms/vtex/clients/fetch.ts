import fetch from 'isomorphic-unfetch'
import packageJson from '../../../../package.json'

const USER_AGENT = `${packageJson.name}@${packageJson.version}`
const IS_PRODUCTION = process.env.NODE_ENV === 'production'

const getProductionRequestInfo = (info: string) => {
  const url = new URL(info)
  url.protocol = 'http'
  const account = url.hostname.split('.')[0]
  url.searchParams.append('an', account)
  url.hostname = `vtexioapi.vtexinternal.com`
  return { url: url.toString(), host: `${account}.myvtex.com` }
}

export const fetchAPI = async (info: RequestInfo, init?: RequestInit) => {
  let requestInfo = info.toString()
  let headers: HeadersInit = {
    ...init?.headers,
    'User-Agent': USER_AGENT,
  }

  if (IS_PRODUCTION && requestInfo.includes('vtexcommercestable')) {
    const { url, host } = getProductionRequestInfo(requestInfo)
    headers = { ...headers, Host: host }
    requestInfo = url
  }

  console.log('requestInfo', requestInfo);
  console.log('headers', headers);

  const response = await fetch(requestInfo, { ...init, headers })

  if (response.ok) {
    return response.status !== 204 ? response.json() : undefined
  }

  console.error(info, init, response)
  const text = await response.text()

  throw new Error(text)
}
