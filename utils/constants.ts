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

let tasks: Task[] = [
    {
        id: v4(),
        title: "Design Homepage",
        description: "Create the initial design for the homepage.",
        status: Status.PENDING,
        createdAt: new Date("2024-01-15T10:00:00Z"),
        startingDate: new Date("2024-02-01T09:00:00Z"),
        dueDate: new Date("2024-02-15T17:00:00Z"),
        isDeleted: false,
        isCancelled: false,
        content: "Initial design sketches and wireframes.",
        thumbnail: "https://via.placeholder.com/150?text=Design",
        coverImage: "https://via.placeholder.com/600x400?text=Homepage+Design"
    },
    {
        id: v4(),
        title: "Develop Backend",
        description: "Implement the backend services for user management.",
        status: Status.PENDING,
        createdAt: new Date("2024-02-01T11:00:00Z"),
        startingDate: new Date("2024-02-10T08:00:00Z"),
        dueDate: new Date("2024-03-01T18:00:00Z"),
        isDeleted: false,
        isCancelled: false,
        content: "Setup APIs and database schema.",
        thumbnail: "https://via.placeholder.com/150?text=Backend",
        coverImage: "https://via.placeholder.com/600x400?text=Backend+Development"
    },
    {
        id: v4(),
        title: "Write Documentation",
        description: "Prepare user and developer documentation for the project.",
        status: Status.COMPLETED,
        createdAt: new Date("2024-03-01T12:00:00Z"),
        startingDate: new Date("2024-03-05T10:00:00Z"),
        dueDate: new Date("2024-03-20T15:00:00Z"),
        isDeleted: false,
        isCancelled: false,
        content: "User guides, API documentation, and developer notes.",
        thumbnail: "https://via.placeholder.com/150?text=Docs",
        coverImage: "https://via.placeholder.com/600x400?text=Documentation"
    },
    {
        id: v4(),
        title: "Test Application",
        description: "Perform comprehensive testing of the application.",
        status: Status.PENDING,
        createdAt: new Date("2024-03-10T13:00:00Z"),
        startingDate: new Date("2024-03-15T09:00:00Z"),
        dueDate: new Date("2024-04-01T17:00:00Z"),
        isDeleted: false,
        isCancelled: false,
        content: "Functional, integration, and regression testing.",
        thumbnail: "https://via.placeholder.com/150?text=Testing",
        coverImage: "https://via.placeholder.com/600x400?text=Testing"
    },
    {
        id: v4(),
        title: "Marketing Campaign",
        description: "Launch the marketing campaign for the product.",
        status: Status.COMPLETED,
        createdAt: new Date("2024-04-01T14:00:00Z"),
        startingDate: new Date("2024-04-05T08:00:00Z"),
        dueDate: new Date("2024-04-30T18:00:00Z"),
        isDeleted: false,
        isCancelled: false,
        content: "Social media ads, email marketing, and content creation.",
        thumbnail: "https://via.placeholder.com/150?text=Marketing",
        coverImage: "https://via.placeholder.com/600x400?text=Marketing+Campaign"
    },
    {
        id: v4(),
        title: "User Training",
        description: "Conduct training sessions for end-users.",
        status: Status.PENDING,
        createdAt: new Date("2024-04-15T15:00:00Z"),
        startingDate: new Date("2024-05-01T10:00:00Z"),
        dueDate: new Date("2024-05-15T16:00:00Z"),
        isDeleted: false,
        isCancelled: false,
        content: "Prepare training materials and schedule sessions.",
        thumbnail: "https://via.placeholder.com/150?text=Training",
        coverImage: "https://via.placeholder.com/600x400?text=User+Training"
    },
    {
        id: v4(),
        title: "Prepare Deployment",
        description: "Prepare the application for deployment to production.",
        status: Status.PENDING,
        createdAt: new Date("2024-05-01T16:00:00Z"),
        startingDate: new Date("2024-05-10T11:00:00Z"),
        dueDate: new Date("2024-06-01T17:00:00Z"),
        isDeleted: false,
        isCancelled: false,
        content: "Setup servers, configure environments, and finalize deployment plan.",
        thumbnail: "https://via.placeholder.com/150?text=Deployment",
        coverImage: "https://via.placeholder.com/600x400?text=Deployment+Preparation"
    },
    {
        id: v4(),
        title: "User Feedback",
        description: "Collect and analyze user feedback post-launch.",
        status: Status.PENDING,
        createdAt: new Date("2024-06-01T17:00:00Z"),
        startingDate: new Date("2024-06-05T09:00:00Z"),
        dueDate: new Date("2024-06-20T16:00:00Z"),
        isDeleted: false,
        isCancelled: false,
        content: "Surveys, interviews, and feedback forms.",
        thumbnail: "https://via.placeholder.com/150?text=Feedback",
        coverImage: "https://via.placeholder.com/600x400?text=User+Feedback"
    },
    {
        id: v4(),
        title: "Bug Fixes",
        description: "Address bugs and issues reported by users.",
        status: Status.PENDING,
        createdAt: new Date("2024-06-15T18:00:00Z"),
        startingDate: new Date("2024-07-01T10:00:00Z"),
        dueDate: new Date("2024-07-15T17:00:00Z"),
        isDeleted: false,
        isCancelled: false,
        content: "Identify, fix, and verify bug resolutions.",
        thumbnail: "https://via.placeholder.com/150?text=Bugs",
        coverImage: "https://via.placeholder.com/600x400?text=Bug+Fixes"
    },
    {
        id: v4(),
        title: "Project Retrospective",
        description: "Conduct a retrospective to evaluate project outcomes.",
        status: Status.PENDING,
        createdAt: new Date("2024-07-01T19:00:00Z"),
        startingDate: new Date("2024-07-10T08:00:00Z"),
        dueDate: new Date("2024-07-30T16:00:00Z"),
        isDeleted: false,
        isCancelled: false,
        content: "Review project successes and areas for improvement.",
        thumbnail: "https://via.placeholder.com/150?text=Retrospective",
        coverImage: "https://via.placeholder.com/600x400?text=Project+Retrospective"
    }
];
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
export {users,tasks,services}