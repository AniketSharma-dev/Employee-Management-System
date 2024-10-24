// Admin data
const admin = {
    id: "admin1",
    name: "Aniket",
    email: "admin@example.com",
    password: "admin",
};

// Employee data
const employee = [
    {
        id: "emp1",
        name: "Amit",
        email: "emp1@example.com",
        password: "123",
        taskCounts: {
            active: 2,
            newTask: 2,
            completed: 1,
            failed: 1,
        },
        tasks: [
            {
                taskTitle: "Project A",
                taskDescription: "Complete phase 1",
                taskDate: "15 Jun 2024",
                category: "Development",
                active: true,
                newTask: false,
                completed: false,
                failed: false,
            },
            {
                taskTitle: "Meeting",
                taskDescription: "Client presentation",
                taskDate: "16 Jun 2024",
                category: "Communication",
                active: false,
                newTask: true,
                completed: false,
                failed: false,
            },
            {
                taskTitle: "Bug fix",
                taskDescription: "Resolve login issue",
                taskDate: "14 Jun 2024",
                category: "Maintenance",
                active: true,
                newTask: false,
                completed: true,
                failed: false,
            },
            {
                taskTitle: "Documentation",
                taskDescription: "Update user manual",
                taskDate: "17 Jun 2024",
                category: "Documentation",
                active: false,
                newTask: false,
                completed: false,
                failed: true,
            },
            {
                taskTitle: "Code review",
                taskDescription: "Review team's code",
                taskDate: "18 Jun 2024",
                category: "Quality Assurance",
                active: true,
                newTask: true,
                completed: false,
                failed: false,
            },
        ],
    },
    {
        id: "emp2",
        name: "Rahul",
        email: "emp2@example.com",
        password: "123",
        taskCounts: {
            active: 2,
            newTask: 1,
            completed: 1,
            failed: 1,
        },
        tasks: [
            {
                taskTitle: "Database optimization",
                taskDescription: "Improve query performance",
                taskDate: "15 Jun 2024",
                category: "Database",
                active: true,
                newTask: false,
                completed: false,
                failed: false,
            },
            {
                taskTitle: "UI design",
                taskDescription: "Create mockups for new feature",
                taskDate: "16 Jun 2024",
                category: "Design",
                active: false,
                newTask: true,
                completed: false,
                failed: false,
            },
            {
                taskTitle: "Testing",
                taskDescription: "Perform unit tests",
                taskDate: "17 Jun 2024",
                category: "Quality Assurance",
                active: true,
                newTask: false,
                completed: true,
                failed: false,
            },
            {
                taskTitle: "Deployment",
                taskDescription: "Deploy to staging environment",
                taskDate: "18 Jun 2024",
                category: "DevOps",
                active: false,
                newTask: false,
                completed: false,
                failed: true,
            },
        ],
    },
    {
        id: "emp3",
        name: "Priya",
        email: "emp3@example.com",
        password: "123",
        taskCounts: {
            active: 2,
            newTask: 1,
            completed: 2,
            failed: 1,
        },
        tasks: [
            {
                taskTitle: "API integration",
                taskDescription: "Integrate payment gateway",
                taskDate: "15 Jun 2024",
                category: "Development",
                active: true,
                newTask: false,
                completed: false,
                failed: false,
            },
            {
                taskTitle: "Security audit",
                taskDescription: "Perform security checks",
                taskDate: "16 Jun 2024",
                category: "Security",
                active: false,
                newTask: true,
                completed: false,
                failed: false,
            },
            {
                taskTitle: "Performance optimization",
                taskDescription: "Optimize app loading time",
                taskDate: "17 Jun 2024",
                category: "Performance",
                active: true,
                newTask: false,
                completed: true,
                failed: false,
            },
            {
                taskTitle: "Code refactoring",
                taskDescription: "Refactor authentication module",
                taskDate: "18 Jun 2024",
                category: "Development",
                active: false,
                newTask: false,
                completed: false,
                failed: true,
            },
            {
                taskTitle: "Feature implementation",
                taskDescription: "Implement user profile page",
                taskDate: "19 Jun 2024",
                category: "Development",
                active: true,
                newTask: true,
                completed: false,
                failed: false,
            },
            {
                taskTitle: "Bug fixing",
                taskDescription: "Fix reported bugs",
                taskDate: "20 Jun 2024",
                category: "Maintenance",
                active: false,
                newTask: false,
                completed: true,
                failed: false,
            },
        ],
    },
    {
        id: "emp4",
        name: "Suresh",
        email: "emp4@example.com",
        password: "123",
        taskCounts: {
            active: 2,
            newTask: 1,
            completed: 1,
            failed: 0,
        },
        tasks: [
            {
                taskTitle: "Data analysis",
                taskDescription: "Analyze user behavior data",
                taskDate: "15 Jun 2024",
                category: "Analytics",
                active: true,
                newTask: false,
                completed: false,
                failed: false,
            },
            {
                taskTitle: "Report generation",
                taskDescription: "Create monthly performance report",
                taskDate: "16 Jun 2024",
                category: "Reporting",
                active: false,
                newTask: true,
                completed: false,
                failed: false,
            },
            {
                taskTitle: "User research",
                taskDescription: "Conduct user interviews",
                taskDate: "17 Jun 2024",
                category: "Research",
                active: true,
                newTask: false,
                completed: true,
                failed: false,
            },
        ],
    },
    {
        id: "emp5",
        name: "Ravi",
        email: "emp5@example.com",
        password: "123",
        taskCounts: {
            active: 2,
            newTask: 2,
            completed: 2,
            failed: 1,
        },
        tasks: [
            {
                taskTitle: "Content creation",
                taskDescription: "Write blog posts",
                taskDate: "15 Jun 2024",
                category: "Marketing",
                active: true,
                newTask: false,
                completed: false,
                failed: false,
            },
            {
                taskTitle: "Social media management",
                taskDescription: "Schedule social media posts",
                taskDate: "16 Jun 2024",
                category: "Marketing",
                active: false,
                newTask: true,
                completed: false,
                failed: false,
            },
            {
                taskTitle: "Email campaign",
                taskDescription: "Design email newsletter",
                taskDate: "17 Jun 2024",
                category: "Marketing",
                active: true,
                newTask: false,
                completed: true,
                failed: false,
            },
            {
                taskTitle: "SEO optimization",
                taskDescription: "Optimize website content for SEO",
                taskDate: "18 Jun 2024",
                category: "SEO",
                active: false,
                newTask: false,
                completed: false,
                failed: true,
            },
            {
                taskTitle: "Analytics review",
                taskDescription: "Review website analytics",
                taskDate: "19 Jun 2024",
                category: "Analytics",
                active: true,
                newTask: true,
                completed: false,
                failed: false,
            },
            {
                taskTitle: "Customer support",
                taskDescription: "Respond to customer inquiries",
                taskDate: "20 Jun 2024",
                category: "Support",
                active: false,
                newTask: false,
                completed: true,
                failed: false,
            },
            {
                taskTitle: "Product documentation",
                taskDescription: "Update product documentation",
                taskDate: "21 Jun 2024",
                category: "Documentation",
                active: true,
                newTask: false,
                completed: false,
                failed: false,
            },
        ],
    },
];

export const setLocalStorage = () => {
    if (!localStorage.getItem("employee")) {
        localStorage.setItem("employee", JSON.stringify(employee));
        console.log("Employee data initialized in localStorage");
    }

    if (!localStorage.getItem("admin")) {
        localStorage.setItem("admin", JSON.stringify(admin));
        console.log("Admin data initialized in localStorage");
    }
    // localStorage.setItem("employee", JSON.stringify(employee))
    // localStorage.setItem("admin", JSON.stringify(admin))
}
export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employee"))
    const admin = JSON.parse(localStorage.getItem("admin"))

    return { employees, admin}
}
