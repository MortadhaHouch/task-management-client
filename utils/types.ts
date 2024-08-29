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
    content?:string
    status:Status
    createdAt:string 
    startingDate:string
    dueDate:string
    modifiedAt:string
    isDeleted:boolean
    isCancelled:boolean
    thumbnail?:string
    coverImage?:string
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
    OVERDUE="OVERDUE",
    COMPLETED="COMPLETED",
    PENDING="PENDING",
    CANCELLED="CANCELLED",
}
enum DataType{
    DAY="DAY",
    MONTH="MONTH",
    YEAR="YEAR",
    OVERDUE="OVERDUE",
    CANCELLED="CANCELLED",
}
type Feedback = {
    content:string
    authorName:string
    authorEmail:string
    authorAvatar:string
    likes:number
    dislikes:number
    isMine:boolean
    id:string
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
type ChartOverview={
    createdAt:string,
    startingDate:string,
    dueDate:string,
    modifiedAt:string,
    overdue:number,
    completed:number,
    pending:number,
    cancelled:number,
}
export type {User,Task,Bin,Feedback,Event,LoginRequest,SignupRequest,Response,ChartOverview}
export {Status,DataType}