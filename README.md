# Training Workshop Project: Police Reporting Ticketing System

Welcome to our training workshop project! This project aims to enhance our skills as professional developers and prepare us to handle projects in professional settings. As we progress, we will grow our skillset and aim to become exceptional developers.

## Project Overview

This project is a Police Reporting Ticketing System that will cater to three user types:

- **Super Admin:** Has full administrative privileges over the system.
- **Admin:** Manages operations within specific departments or regions.
- **User:** Reports incidents and interacts with the system based on assigned permissions.

## Development Schedule

- **Merge and Pull Day:** Every Friday, we will merge our work and pull the latest changes from the main repository.
- **Sprint Meetings:** Every Monday, we will hold sprint meetings to plan and review our progress for the upcoming week.

## Goals

- Enhance our technical skills in software development.
- Gain practical experience in building and managing a complex system.
- Prepare ourselves to deliver high-quality solutions to clients in the future.

## Contributors

1. Cem
2. Shaine
3. Marjunel
4. Zeke

## Technologies Used

- **Frontend:** React
- **Backend:** Laravel

## Getting Started

Before proceeding, please see the ticket for the setup on the project Kanban board for detailed instructions.

**Note:** You can use either Git Bash or GitHub Desktop to manage the Git repositories.

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/turquoisecj/project-1.git
   cd project-1
   ```

2. **Create Branch:**
   - Format the branch name as `[username].[role].branch`, for example, `awmdeguzman.frontend.branch`.
   - Create a new branch using this formatted name for setting up the development environment.
   ```bash
   git checkout -b yourusername.yourrole.branch
   ```

3. **Install Dependencies:**
   - For the frontend (React):
     ```bash
     cd frontend
     npm install
     ```
   - For the backend (Laravel):
     ```bash
     cd backend
     composer install
     ```

4. **Configure Environment Variables:**
   - Set up necessary environment variables as per project specifications.
   - Create a `.env` file in both frontend and backend directories and configure it accordingly.

5. **Database Setup:**
   - Configure and set up the local database according to project requirements.
   - Run necessary migrations or database scripts.
   ```bash
   php artisan migrate
   ```

6. **Configure IDE/Editor:**
   - Set up your preferred IDE or text editor with project-specific configurations.

7. **Build and Compile:**
   - If applicable, build and compile the project to ensure everything is set up correctly.
   - For React:
     ```bash
     npm run build
     ```
   - For Laravel, serve the application:
     ```bash
     php artisan serve
     ```

8. **Run Tests:**
   - Execute tests to verify the setup and ensure everything is functioning as expected.
   - For React:
     ```bash
     npm test
     ```
   - For Laravel:
     ```bash
     php artisan test
     ```
