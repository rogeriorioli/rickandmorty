
export type EpisodeData = {
    name  : string
    air_date: string
    episode: string
    characters: [],
    url : string,
    created: string
}

export type CharacterData =  {
    id : string | undefined
    name : string
    status : string
    species : string
    gender : string
    image : string
    episode? : Array<string>,
    location?: any
    type?: string
}