interface IProject {
    id: number,
    name: string,
    info: string,
    img: `/${string}.${'png' | 'webp' | 'jpg'}`,
    skill: string[],
    urlDemo: string,
    urlCode?: `https://github.com/Alisa03/${string}`
}