import { Event, Feedback, Status, Task, User } from "./types";
import SVG1 from "../src/app/assets/icons/undraw_task_list_6x9d.svg"
import SVG2 from "../src/app/assets/icons/undraw_push_notifications_re_t84m.svg"
import SVG3 from "../src/app/assets/icons/task-management.svg"
import SVG4 from "../src/app/assets/icons/undraw_accept_tasks_re_09mv.svg"
import SVG5 from "../src/app/assets/icons/undraw_throw_away_re_x60k.svg"
import SVG6 from "../src/app/assets/icons/Inbox cleanup-rafiki.svg"
import {v4} from "uuid"
const users: User[] = [
    {
        avatar: "https://example.com/avatar1.png",
        birthday: "1990-01-01",
        id: "user123",
        name: "John Doe",
        email: "john@example.com",
        tasks: [],
        deletedTask: [],
        cancelledTask: [],
        age: 34,
        password: "securePassword123",
        bin: { id: "bin123", owner: {} as User, tasks: [] }
    },
    {
        avatar: "https://example.com/avatar2.png",
        birthday: "1995-05-10",
        id: "user456",
        name: "Jane Smith",
        email: "jane@example.com",
        tasks: [],
        deletedTask: [],
        cancelledTask: [],
        age: 29,
        password: "password456",
        bin: { id: "bin456", owner: {} as User, tasks: [] }
    },
    {
        avatar: "https://example.com/avatar3.png",
        birthday: "1988-11-22",
        id: "user789",
        name: "Michael Johnson",
        email: "michael@example.com",
        tasks: [],
        deletedTask: [],
        cancelledTask: [],
        age: 36,
        password: "password789",
        bin: { id: "bin789", owner: {} as User, tasks: [] }
    },
    {
        avatar: "https://example.com/avatar4.png",
        birthday: "2000-07-18",
        id: "user101",
        name: "Emily Davis",
        email: "emily@example.com",
        tasks: [],
        deletedTask: [],
        cancelledTask: [],
        age: 24,
        password: "password101",
        bin: { id: "bin101", owner: {} as User, tasks: [] }
    },
    {
        avatar: "https://example.com/avatar5.png",
        birthday: "1985-02-14",
        id: "user102",
        name: "Robert Lee",
        email: "robert@example.com",
        tasks: [],
        deletedTask: [],
        cancelledTask: [],
        age: 39,
        password: "password102",
        bin: { id: "bin102", owner: {} as User, tasks: [] }
    }
];

const tasks: Task[] = [
    {
        title: "Complete project report",
        description: "Write and submit the final project report",
        status: Status.PENDING,
        startingDate: new Date("2024-08-10T08:00:00.000Z").toString(),
        dueDate: new Date("2024-08-31T23:59:59.999Z").toString(),
        modifiedAt: "2024-08-15T08:00:00.000Z",
        isDeleted: false,
        isCancelled: false,
        createdAt: "",
        id:v4()
    },
    {
        title: "Review team meeting notes",
        description: "Review the notes from last week’s team meeting",
        status: Status.DONE,
        startingDate: new Date("2024-07-22T09:00:00.000Z").toString(),
        dueDate: new Date("2024-07-25T09:00:00.000Z").toString(),
        modifiedAt: "2024-07-24T09:00:00.000Z",
        isDeleted: false,
        isCancelled: false,
        createdAt: "",
        id:v4()
    },
    {
        title: "Plan marketing campaign",
        description: "Create a marketing plan for the new product launch",
        status: Status.PENDING,
        startingDate: new Date("2024-08-01T08:00:00.000Z").toString(),
        dueDate: new Date("2024-09-01T12:00:00.000Z").toString(),
        modifiedAt: "2024-08-15T08:00:00.000Z",
        isDeleted: false,
        isCancelled: false,
        createdAt: "",
        id:v4()
    },
    {
        title: "Develop new feature",
        description: "Develop and deploy the new feature in the app",
        status: Status.PENDING,
        startingDate: new Date("2024-08-05T08:00:00.000Z").toString(),
        dueDate: new Date("2024-08-30T08:00:00.000Z").toString(),
        modifiedAt: "2024-08-16T08:00:00.000Z",
        isDeleted: false,
        isCancelled: false,
        createdAt: "",
        id:v4()
    },
    {
        title: "Client feedback analysis",
        description: "Analyze client feedback for the latest release",
        status: Status.DONE,
        startingDate: new Date("2024-07-20T08:00:00.000Z").toString(),
        dueDate: new Date("2024-07-30T08:00:00.000Z").toString(),
        modifiedAt: "2024-07-25T08:00:00.000Z",
        isDeleted: false,
        isCancelled: false,
        createdAt: "",
        id:v4()
    }
];
const feedbacks: Feedback[] = [
    {
        content: "Excellent task execution!",
        publishedBy: users[0],
        reactions: {
        emittedBy: users[1],
        likes: [1, 2, 3],
        dislikes: []
        }
    }
]
const services: { title: string; href: string; description: string;imageURL:string }[] = [
    {
        title: "Creating and editing tasks",
        href: "/features",
        description:"A user can create and edit daily tasks whenever they want to",
        imageURL:SVG1
    },
    {
        title: "Notifications",
        href: "/features",
        description:"Never worry about forgetting or omitting task processing and be up-to-date with the latest information about daily chores",
        imageURL:SVG2
    },
    {
        title: "Unlimited tasks management features",
        href: "/features",
        description:"Forget about the complexity and the diversity of your tasks and fall in love with the incredibly powerful and easy workflow of tasks management",
        imageURL:SVG3
    },
    {
        title: "Unlimited number of tasks",
        href: "/features",
        description: "Never worry about limitations of tasks management and create as many tasks as you need",
        imageURL:SVG4
    },
    {
        title: "Deleting and canceling tasks",
        href: "/features",
        description:"You can also cancel or delete tasks whenever you want",
        imageURL:SVG5
    },
    {
        title: "Easy task recovery and deletion",
        href: "/features",
        description:"You can also recover deleted tasks whenever you want",
        imageURL:SVG6
    },
]
export {users,tasks,feedbacks,services}