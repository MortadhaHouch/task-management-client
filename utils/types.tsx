type User = {
    avatar:string
    birthday:string
    id:string
    name:string
    email:string
    tasks:Task[]
    deletedTask:Task[]
    cancelledTask:Task[]
    age:number
    password:string
    bin:Bin
}
type Task = {
    id:string
    title:string
    description:string
    status:Status
    createdAt:string
    dueDate:string
    modifiedAt:string
    owner:User
    isDeleted:boolean
    isCancelled:boolean
    isCompleted:boolean
    deletedBy:string
    remover:User
    cancelledBy:string
    canceller:User
    bin:Bin
}
type Event = {
    isDeleted:boolean
    isCancelled:boolean
    isCompleted:boolean
    id:string
    title:string
    description:string
    status:Status
    createdAt:string
    dueDate:string
    modifiedAt:string
}
type Bin = {
    id:string
    owner:User
    tasks:Task[]
}
enum Status{
    DONE="DONE",
    ACCOMPLISHED="ACCOMPLISHED",
    PENDING="PENDING",
}
type Feedback = {
    content:string
    publishedBy:User
    reactions:Reaction
}
type Reaction = {
    emittedBy:User
    likes:number[]
    dislikes:number[]
}
export type {User,Task,Bin,Feedback,Reaction,Event}
export {Status}