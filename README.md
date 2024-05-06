# MongoDB Admin Panel

## Description
The MongoDB Admin Panel is a comprehensive tool designed to manage MongoDB instances, databases, users, and their access roles. This project provides a user-friendly interface for administrators to perform various tasks such as creating databases, managing users, assigning roles, and controlling access to resources. It is built with a React frontend and a Node.js backend, leveraging Express.js for routing, Mongoose for MongoDB interaction, and JSON Web Tokens (JWT) for authentication.

## Features
1. **Login/Signup**
   - Users can securely log in or create an account to access the admin panel.
   - The authentication system uses JWT to manage sessions.

2. **MongoDB Instance Management**
   - Admins can add multiple MongoDB instances.
   - The panel displays a list of connected instances, along with the number of databases and users in each instance.

3. **Database Management**
   - Admins can create, remove, and list databases.
   - The panel allows admins to add entries to databases and manage them accordingly.

4. **User Management**
   - Admins can create users with assigned roles.
   - Admins can assign or change user access roles (e.g., edit, read-only).
   - User passwords can be changed.
   - Admins can remove users from the system.
   - Admins can assign users to specific databases.

5. **Authentication Restrictions**
   - Admins can apply authentication restrictions to ensure secure access to resources.
   - The panel allows for role-based access control, restricting certain operations to admins.

## Technical Details
- **Backend**: Node.js with Express.js and Mongoose.
- **Frontend**: React for the user interface.
- **Database**: MongoDB for data storage.
- **Authentication**: JWT for user authentication.
- **Authorization**: Middleware-based role checks to ensure proper authorization.
- **Security**: Bcrypt.js is used to hash passwords for secure storage.

## Usage
1. **Authentication**
   - Users must log in with valid credentials to access the admin panel.
   - Admins have additional privileges to perform administrative tasks.

2. **Managing MongoDB Instances**
   - Admins can add new MongoDB instances with a connection string.
   - The panel provides an overview of all connected instances.

3. **Database Operations**
   - Admins can create and delete databases.
   - The panel displays the list of databases and associated users.

4. **User Operations**
   - Admins can create users, change passwords, assign roles, and remove users.
   - Admins can also assign users to specific databases and revoke access.

## Installation
To set up the project on your local environment, follow these steps:

1. **Backend Setup**
   - Clone the repository.
   - Navigate to the backend directory.
   - Install the required dependencies with `npm install`.
   - Set up the environment variables (e.g., MongoDB connection string, JWT secret) in a `.env` file.
   - Start the backend server with `npm start`.

2. **Frontend Setup**
   - Navigate to the frontend directory.
   - Install the required dependencies with `npm install`.
   - Start the React development server with `npm start`.

3. **Testing and Integration**
   - Ensure the backend server is running.
   - Test the frontend with the backend to confirm correct communication.

## Contribution
Contributions to the MongoDB Admin Panel project are welcome. If you'd like to contribute, please follow these steps:

1. Fork the repository on GitHub.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit to your branch.
4. Create a pull request with a detailed description of your changes.

Ensure that your code adheres to the project's style guidelines and includes appropriate documentation.

## License
This project is licensed under the [MIT License](LICENSE). Please see the `LICENSE` file for more information on terms and conditions for usage, redistribution, and modification.

## Contact Information
If you have any questions or need further assistance, please contact the project maintainer:
- **Name**: [Rajarshi Pathak](https://github.com/RajarshiPathak)
- **GitHub**: [RajarshiPathak](https://github.com/RajarshiPathak)

---

Thank you for your interest in the MongoDB Admin Panel project! We hope you find it useful for managing MongoDB instances and databases.
