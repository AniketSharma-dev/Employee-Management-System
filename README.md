
# Employee Management System

The **Employee Management System (EMS)** is a modern web application designed for seamless management of employees and tasks. With dedicated dashboards for administrators and employees, it ensures efficient task assignment, tracking, and management.

## Features

### Admin Dashboard
- **Task Creation**: Create tasks and assign them to employees.
- **Task Management**: Monitor tasks categorized by status (new, active, completed, failed).
- **Employee Tracking**: View employee task performance and statistics.

### Employee Dashboard
- **Task Overview**: See tasks categorized by their progress (new, active, completed, failed).
- **Task Updates**: Accept, complete, or reject tasks with ease.
- **User Personalization**: Customized interface with personalized greetings.

### General Features
- **Authentication**: Role-based login system with unique admin and employee views.
- **Real-Time Updates**: Task statuses and statistics are dynamically updated.
- **Responsive Design**: Optimized for all screen sizes using TailwindCSS.
- **Data Persistence**: LocalStorage is used to maintain user data and session states.

---

## Folder Structure

```
react-ems
├── node_modules
├── public
│   └── vite.svg
├── src
│   ├── assets
│   ├── components
│   │   ├── Auth
│   │   │   └── Login.jsx
│   │   ├── Dashboard
│   │   │   ├── DashboardCompo
│   │   │   │   ├── AdminCreateTask
│   │   │   │   │   └── CreateTask.jsx
│   │   │   │   ├── AllTask
│   │   │   │   │   └── AllTask.jsx
│   │   │   │   ├── DashBNavbar
│   │   │   │   │   └── Header.jsx
│   │   │   │   └── TaskNumber
│   │   │   │       └── TaskNumber.jsx
│   │   │   ├── AdminDashboard.jsx
│   │   │   └── EmployeeDashboard.jsx
│   │   ├── TaskList
│   │   │   ├── AcceptTask.jsx
│   │   │   ├── CompleteTask.jsx
│   │   │   ├── FailedTask.jsx
│   │   │   ├── NewTask.jsx
│   │   │   └── TaskList.jsx
│   ├── context
│   │   └── AuthProvider.jsx
│   ├── pages
│   ├── utils
│   │   └── localStorage.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js
```


## Usage
- **Admin**: Login with admin credentials to manage tasks and monitor progress. Admin credentials are located in `src/utils/localStorage.jsx` or can be provided by the system administrator.
- **Employee**: Login with employee credentials to view and update assigned tasks. Employee credentials are defined in `src/utils/localStorage.jsx` or typically provided by the admin or HR department.

---

## Getting Started

1. **Clone the Repository**
   ```bash
   git clone https://github.com/AniketSharma-dev/Employee-Management-System.git
   cd Employee-Management-System
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run the Development Server**
   ```bash
   npm run dev
   ```

4. **Open in Browser**
   Access the application at [http://localhost:5173](http://localhost:5173).

---

## Scripts

- **`npm run dev`**: Start the development server.
- **`npm run build`**: Build the project for production.
- **`npm run lint`**: Run ESLint for code quality checks.

---

## Technologies Used

- **React**: Frontend framework.
- **Vite**: Development environment and build tool.
- **TailwindCSS**: CSS utility framework.
- **JavaScript**: Application logic.
- **LocalStorage**: For data persistence.

---


## Contributing
Feel free to fork this repository and submit pull requests. For major changes, please open an issue first to discuss the changes you would like to make.

To streamline collaboration, please follow these guidelines:
- Use meaningful branch names (e.g., `feature/task-dashboard`, `bugfix/login-error`).
- Adhere to the project's coding standards, including formatting rules.
- Ensure all changes are thoroughly tested before submission.

---

## License
This project is licensed under the MIT License.
