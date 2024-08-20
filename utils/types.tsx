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
    title:string
    description:string
    content?:string
    status:Status
    createdAt:string 
    start:Date
    end:Date
    modifiedAt:string
    isDeleted:boolean
    isCancelled:boolean
    isCompleted:boolean
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
    start:string
    end:string
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
type LoginRequest = {
    email:string
    password:string
}
type SignupRequest = {
    firstName:string, 
    lastName:string
    birthDate:string
    avatarUrl:string
    email:string
    password:string
}
type Response = {
    token:string
}
export type {User,Task,Bin,Feedback,Reaction,Event,LoginRequest,SignupRequest,Response}
export {Status}