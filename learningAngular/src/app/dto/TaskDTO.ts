export interface TaskDTO {
    id: number
    title: string
    description: string
    weekday: string
    tags: string[]
    done: boolean
}