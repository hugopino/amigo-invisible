# Secret Santa (Amigo Invisible) Online

This is an user-friendly, open-source online application for organizing "Secret Santa" events. It allows users to add participants, automatically assign Secret Santas, and send emails to all participants with the details of their Secret Santa.

This application is built with Next.js for the frontend and FastAPI for the backend, ensuring a modern, efficient, and seamless user experience.

## Online Demo

Experience the live demo of the project at [sorteoamigoinvisible.net](http://sorteoamigoinvisible.net/).

![demo-1](https://github.com/hugopino/amigo-invisible/assets/102437612/b467fac4-8b71-422a-b7c8-cd4967079b09)
![demo-2](https://github.com/hugopino/amigo-invisible/assets/102437612/1a637226-ea58-4ecf-9778-b1e5ec012c8c)
![demo-3](https://github.com/hugopino/amigo-invisible/assets/102437612/2bf47d4d-301c-449a-90b3-a0fe7e23a0d8)
![demo-4](https://github.com/hugopino/amigo-invisible/assets/102437612/14269bba-265d-4ccf-9953-820e74b72371)
![demo-5 ](https://github.com/hugopino/amigo-invisible/assets/102437612/cb22a287-da67-4023-a695-0d73c508b48d)

## How to Use

1. Navigate to the application.
2. Add the participants' names and emails one by one, or import a list of participants using the format `name:email` (spaces in names are allowed).
3. Click on the blue button to proceed to the next step.
4. In this step, you can personalize the message that will be sent. You can use the following variables in your message:
    - `{regalador}`: The name of the Secret Santa
    - `{receptor}`: The name of the recipient
    - `{emailRegalador}`: The email of the Secret Santa
    - `{emailReceptor}`: The email of the recipient
5. Click on the next step button after crafting your message.
6. Finally, click on the "Send Emails" button to start the Secret Santa!

## How to Start the Project Locally

The project has two main parts: the frontend, built with Next.js, and the backend, built with FastAPI.

### Starting the Frontend

1. Clone the project using the command:
    ```
    git clone https://github.com/hugopino/amigo-invisible.git
    ```
2. Navigate to the frontend directory:
    ```
    cd amigo-invisible/frontend
    ```
3. Install the dependencies:
    ```
    npm install
    ```
4. Run the Next.js server:
    ```
    npm run dev
    ```

### Starting the Backend

1. Navigate to the backend directory:
    ```
    cd ../backend
    ```
2. Run the FastAPI server:
    ```
    python3 -m uvicorn main:app --reload
    ```

Once both servers are running, open your browser and navigate to `localhost:3000` for the frontend and `localhost:8000` for the backend.
