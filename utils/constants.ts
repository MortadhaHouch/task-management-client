import { Event, Feedback, Status, Task, User } from "./types";

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
        start: new Date("2024-08-10T08:00:00.000Z"),
        end: new Date("2024-08-31T23:59:59.999Z"),
        modifiedAt: "2024-08-15T08:00:00.000Z",
        isDeleted: false,
        isCancelled: false,
        isCompleted: false,
        createdAt: ""
    },
    {
        title: "Review team meeting notes",
        description: "Review the notes from last week’s team meeting",
        status: Status.DONE,
        start: new Date("2024-07-22T09:00:00.000Z"),
        end: new Date("2024-07-25T09:00:00.000Z"),
        modifiedAt: "2024-07-24T09:00:00.000Z",
        isDeleted: false,
        isCancelled: false,
        isCompleted: true,
        createdAt: ""
    },
    {
        title: "Plan marketing campaign",
        description: "Create a marketing plan for the new product launch",
        status: Status.PENDING,
        start: new Date("2024-08-01T08:00:00.000Z"),
        end: new Date("2024-09-01T12:00:00.000Z"),
        modifiedAt: "2024-08-15T08:00:00.000Z",
        isDeleted: false,
        isCancelled: false,
        isCompleted: false,
        createdAt: ""
    },
    {
        title: "Develop new feature",
        description: "Develop and deploy the new feature in the app",
        status: Status.PENDING,
        start: new Date("2024-08-05T08:00:00.000Z"),
        end: new Date("2024-08-30T08:00:00.000Z"),
        modifiedAt: "2024-08-16T08:00:00.000Z",
        isDeleted: false,
        isCancelled: false,
        isCompleted: false,
        createdAt: ""
    },
    {
        title: "Client feedback analysis",
        description: "Analyze client feedback for the latest release",
        status: Status.DONE,
        start: new Date("2024-07-20T08:00:00.000Z"),
        end: new Date("2024-07-30T08:00:00.000Z"),
        modifiedAt: "2024-07-25T08:00:00.000Z",
        isDeleted: false,
        isCancelled: false,
        isCompleted: true,
        createdAt: ""
    }
];
const events: Event[] = [
    {
        isDeleted: false,
        isCancelled: false,
        isCompleted: false,
        id: "event001",
        title: "Team Standup",
        description: "Daily team standup meeting",
        status: Status.PENDING,
        start: "2024-08-20T09:00:00.000Z",
        end: "2024-08-21T09:00:00.000Z",
        modifiedAt: "2024-08-20T09:00:00.000Z",
        createdAt: ""
    },
    {
        isDeleted: false,
        isCancelled: true,
        isCompleted: false,
        id: "event002",
        title: "Project Kickoff",
        description: "Kickoff meeting for the new project",
        status: Status.PENDING,
        start: "2024-08-22T10:00:00.000Z",
        end: "2024-08-23T10:00:00.000Z",
        modifiedAt: "2024-08-22T10:00:00.000Z",
        createdAt: ""
    },
    {
        isDeleted: false,
        isCancelled: false,
        isCompleted: true,
        id: "event003",
        title: "Sprint Review",
        description: "Review of the current sprint",
        status: Status.DONE,
        start: "2024-08-10T10:00:00.000Z",
        end: "2024-08-12T10:00:00.000Z",
        modifiedAt: "2024-08-11T10:00:00.000Z",
        createdAt: ""
    },
    {
        isDeleted: false,
        isCancelled: false,
        isCompleted: true,
        id: "event004",
        title: "Product Demo",
        description: "Demo of the new product feature",
        status: Status.DONE,
        start: "2024-08-15T10:00:00.000Z",
        end: "2024-08-16T10:00:00.000Z",
        modifiedAt: "2024-08-15T10:00:00.000Z",
        createdAt: ""
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
export {users,tasks,events,feedbacks}