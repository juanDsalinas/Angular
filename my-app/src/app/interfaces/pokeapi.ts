export interface Data {
    count: number,
    next: String,
    previous: String,
    results: Resultado[]
}

export interface Resultado {
    name: String,
    url: string
}