# Sample React App Prompt

As part of this project, you'll be building out a portion of an admin site which will provide tooling for configuring and managing the site's users. You've been provided with the skeleton code of a basic React/Typescript application and the necessary APIs. Your goal is to implement the UI in the provided design file.

In terms of functionality, you should ensure the final product allows for:

- adding a user
- adding a user's personalized digital signature
- viewing and editing existing user data, including their personalized digital signature
- deleting a user
- viewing the list of existing users
- filtering the list of users by whether or not their signature is configured
- sorting the list of users by DOB (asc and desc)

Read on for more details about each of these specific pieces of functionality.

## Product Functionality Requirements

### Adding a user

Full name, email, phone number and date of birth (DOB) are required to add a user.

### Viewing/editing an existing user

The same data inputted when adding a user should be able to be edited and saved for an existing user in the open panel view.

### Adding a user's personalized digital signature

When adding a signature, a 6 digit pin and a chosen font style will be required. The user should not be allowed to use the MMDDYY value corresponding to their DOB as their 6 digit pin. They should have at least 3 font style options to choose from. (Note that font style refers to the font family name and should not include "serif" or "sans-serif" as options) Additionally, they should be able to preview their rendered digital signature while adding the signature information.

### Viewing the list of existing users

The existing list of users provided by the API should be displayed on the page as per the design.

### Filtering the list of users

There should be a way to filter the list of users by whether or not they have a personalized digital signature stored.

### Sorting the list of users

There should be a way to sort the list of users by their DOB (ascending and descending).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run start-api`

Runs the backend API for this project using [json-server](https://github.com/typicode/json-server).

Address for the API is `http://localhost:3001`. Take a look at the `db.json` file for the data model and the documentation
for [json-server](https://github.com/typicode/json-server) to understand which routes you have available to you.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
