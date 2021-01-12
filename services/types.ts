export const GET_TOP_SONGS_CALL = '/song'
export const SEARCH_CALL = (q: string) => `/song/search/${q}`
export const GET_TOP_ARTISTS_CALL = '/artist'

export const GET_SONG = (id: string) => `/song/${id}`

export const GET_ARTIST = (id: string) => `/artist/${id}`
export const GET_ARTIST_SONG = (id: string) => `/artist/song/${id}`

export const CREATE_SONG = `/song`
export const CREATE_ARTIST = `/artist`

export const UPDATE_SONG = (id: string) => `/song/${id}`
export const UPDATE_ARTIST = (id: string) => `/artist/${id}`
