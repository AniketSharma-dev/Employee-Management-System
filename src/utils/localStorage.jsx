// Admin data
const admin = {
    id: "admin1",
    email: "admin@example.com",
    password: "admin",
};

// Employee data
const employee = [
    {
        id: "emp1",
        email: "emp1@example.com",
        password: "123",
        tasks: [
            {
                taskTitle: "Project A",
                taskDescription: "Complete phase 1",
                taskDate: "2023-06-15",
                category: "Development",
                active: true,
                newTask: false,
                completed: false,
                failed: false,
            },
            {
                taskTitle: "Meeting",
                taskDescription: "Client presentation",
                taskDate: "2023-06-16",
                category: "Communication",
                active: false,
                newTask: true,
                completed: false,
                failed: false,
            },
            {
                taskTitle: "Bug fix",
                taskDescription: "Resolve login issue",
                taskDate: "2023-06-14",
                category: "Maintenance",
                active: true,
                newTask: false,
                completed: true,
                failed: false,
            },
            {
                taskTitle: "Documentation",
                taskDescription: "Update user manual",
                taskDate: "2023-06-17",
                category: "Documentation",
                active: false,
                newTask: false,
                completed: false,
                failed: true,
            },
            {
                taskTitle: "Code review",
                taskDescription: "Review team's code",
                taskDate: "2023-06-18",
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
        email: "emp2@example.com",
        password: "123",
        tasks: [
            {
                taskTitle: "Database optimization",
                taskDescription: "Improve query performance",
                taskDate: "2023-06-15",
                category: "Database",
                active: true,
                newTask: false,
                completed: false,
                failed: false,
            },
            {
                taskTitle: "UI design",
                taskDescription: "Create mockups for new feature",
                taskDate: "2023-06-16",
                category: "Design",
                active: false,
                newTask: true,
                completed: false,
                failed: false,
            },
            {
                taskTitle: "Testing",
                taskDescription: "Perform unit tests",
                taskDate: "2023-06-17",
                category: "Quality Assurance",
                active: true,
                newTask: false,
                completed: true,
                failed: false,
            },
            {
                taskTitle: "Deployment",
                taskDescription: "Deploy to staging environment",
                taskDate: "2023-06-18",
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
        email: "emp3@example.com",
        password: "123",
        tasks: [
            {
                taskTitle: "API integration",
                taskDescription: "Integrate payment gateway",
                taskDate: "2023-06-15",
                category: "Development",
                active: true,
                newTask: false,
                completed: false,
                failed: false,
            },
            {
                taskTitle: "Security audit",
                taskDescription: "Perform security checks",
                taskDate: "2023-06-16",
                category: "Security",
                active: false,
                newTask: true,
                completed: false,
                failed: false,
            },
            {
                taskTitle: "Performance optimization",
                taskDescription: "Optimize app loading time",
                taskDate: "2023-06-17",
                category: "Performance",
                active: true,
                newTask: false,
                completed: true,
                failed: false,
            },
            {
                taskTitle: "Code refactoring",
                taskDescription: "Refactor authentication module",
                taskDate: "2023-06-18",
                category: "Development",
                active: false,
                newTask: false,
                completed: false,
                failed: true,
            },
            {
                taskTitle: "Feature implementation",
                taskDescription: "Implement user profile page",
                taskDate: "2023-06-19",
                category: "Development",
                active: true,
                newTask: true,
                completed: false,
                failed: false,
            },
            {
                taskTitle: "Bug fixing",
                taskDescription: "Fix reported bugs",
                taskDate: "2023-06-20",
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
        email: "emp4@example.com",
        password: "123",
        tasks: [
            {
                taskTitle: "Data analysis",
                taskDescription: "Analyze user behavior data",
                taskDate: "2023-06-15",
                category: "Analytics",
                active: true,
                newTask: false,
                completed: false,
                failed: false,
            },
            {
                taskTitle: "Report generation",
                taskDescription: "Create monthly performance report",
                taskDate: "2023-06-16",
                category: "Reporting",
                active: false,
                newTask: true,
                completed: false,
                failed: false,
            },
            {
                taskTitle: "User research",
                taskDescription: "Conduct user interviews",
                taskDate: "2023-06-17",
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
        email: "emp5@example.com",
        password: "123",
        tasks: [
            {
                taskTitle: "Content creation",
                taskDescription: "Write blog posts",
                taskDate: "2023-06-15",
                category: "Marketing",
                active: true,
                newTask: false,
                completed: false,
                failed: false,
            },
            {
                taskTitle: "Social media management",
                taskDescription: "Schedule social media posts",
                taskDate: "2023-06-16",
                category: "Marketing",
                active: false,
                newTask: true,
                completed: false,
                failed: false,
            },
            {
                taskTitle: "Email campaign",
                taskDescription: "Design email newsletter",
                taskDate: "2023-06-17",
                category: "Marketing",
                active: true,
                newTask: false,
                completed: true,
                failed: false,
            },
            {
                taskTitle: "SEO optimization",
                taskDescription: "Optimize website content for SEO",
                taskDate: "2023-06-18",
                category: "SEO",
                active: false,
                newTask: false,
                completed: false,
                failed: true,
            },
            {
                taskTitle: "Analytics review",
                taskDescription: "Review website analytics",
                taskDate: "2023-06-19",
                category: "Analytics",
                active: true,
                newTask: true,
                completed: false,
                failed: false,
            },
            {
                taskTitle: "Customer support",
                taskDescription: "Respond to customer inquiries",
                taskDate: "2023-06-20",
                category: "Support",
                active: false,
                newTask: false,
                completed: true,
                failed: false,
            },
            {
                taskTitle: "Product documentation",
                taskDescription: "Update product documentation",
                taskDate: "2023-06-21",
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
    localStorage.setItem("employee", JSON.stringify(employee))
    localStorage.setItem("admin", JSON.stringify(admin))

}
export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employee"))
    const admin = JSON.parse(localStorage.getItem("admin"))

    console.log(employees, admin);
    

}

// // Function to initialize local storage with admin and employee data
// export const initializeLocalStorage = () => {
//   localStorage.setItem('adminData', JSON.stringify(adminData));
//   localStorage.setItem('employeeData', JSON.stringify(employeeData));
// };

// // Function to get admin data from local storage
// export const getAdminData = () => {
//   return JSON.parse(localStorage.getItem('adminData'));
// };

// // Function to get employee data from local storage
// export const getEmployeeData = () => {
//   return JSON.parse(localStorage.getItem('employeeData'));
// };
