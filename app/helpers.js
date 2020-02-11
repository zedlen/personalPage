import fetch from 'unfetch'

const GITHUB_API_URL = 'https://api.github.com';
const API_URL = 'https://api.github.com';

export const github_fetcher = async ( path) => {
  const res = await fetch(GITHUB_API_URL + path)
  const json = await res.json()
  return json
}

export const fetcher = async ( path) => {
    const res = await fetch(API_URL + path)
    const json = await res.json()
    return json
  }
