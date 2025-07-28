# React Adventure Booking Website

A modern React web application for adventure enthusiasts to explore, sign up, log in, and book services for their next adventure. The app demonstrates authentication, protected routes, notifications, and async CRUD operations.

---

## Features

- **User Authentication:**  
  - Sign up and log in with username, email, and password.
  - Authentication state managed globally using React Context.

- **Notification System:**  
  - Global notification context for success and error messages.
  - Auto-dismiss and dismissible notifications for user feedback.

- **Adventure Services:**  
  - Browse a list of available adventure services.
  - Book services (e.g., guides, equipment, transport) with a simple form.
  - Async booking simulation with confirmation notification.
  - Sign-in required to book a service.

- **Protected Routes:**  
  - Certain pages (like booking) require authentication.

- **Responsive UI:**  
  - Styled with CSS and responsive layouts.

---

## Project Structure

```
src/
  components/
    BookingForm.js
    Button.js
    Cards.js
    MainSection.js
    NavBar.js
    NotificationBanner.js
    pages/
      Home.js
      Products.js
      Services.js
      SignUp.js
      Login.js
  contexts/
    AuthContext.js
    NotificationContext.js
  App.js
  App.css
```

---

## How to Run

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Start the development server:**
   ```sh
   npm start
   ```

3. **Open your browser:**  
   Visit [http://localhost:3000](http://localhost:3000)

---

## Usage

- **Sign Up:**  
  Register as a new user to access booking features.

- **Log In:**  
  Existing users can log in. Error messages are shown for invalid credentials.

- **Browse Services:**  
  Go to the Services page to view available adventure services.

- **Book a Service:**  
  Click "Book Now" (sign-in required). Fill out the booking form. A confirmation notification appears after async processing.

- **Notifications:**  
  All important actions (success, error) trigger a notification at the top of the app.

---

## Key Implementation Details

- **AuthContext:**  
  Manages authentication state and provides sign-in/sign-out functions.

- **NotificationContext:**  
  Provides `showNotification` and `clearNotification` for global feedback.

- **Async/Await:**  
  Used in booking to simulate real-world API calls.

- **Protected Actions:**  
  Booking is only available to signed-in users; otherwise, a notification prompts sign-in.

---

## Customization

- **Add More Services:**  
  Edit the `SERVICES` array in `Services.js`.

- **Connect to Backend:**  
  Replace the async simulation in `BookingForm.js` with real API calls.

- **Enhance UI:**  
  Update styles in `App.css` or add new components.

---

## License

This project is for educational/demo purposes.

---



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
