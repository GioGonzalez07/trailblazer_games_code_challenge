# Coding Challenge Description: URL Query Component

## Objective

Develop a React component in TypeScript named URLQueryComponent that allows a user to input a URL and then attempt to fetch data from that URL to determine whether it can be accessed successfully or results in an error. The URL check can support different HTTP methods.

## Requirements

- **User Input Form**: Implement a form where the user can type or paste a URL.
- **Query Button**: Include a button to initiate the fetch operation.
- **Display Results**: Show a message indicating whether the fetch was successful or resulted in an error.
- **Styling**: Apply basic styling to make the UI user-friendly and presentable.
- **Clean Code**: Write clear and maintainable code.

## Technical Details

You may use any library you use, but please justify in a README why you are using it.

## Process

- The challenge must not take more than 45 mins.
- Please submit your code in a GitHub repository. Once completed, please send me an email.
- Please write in a README any assumptions on the code that you took.
- Please write in a README any changes or additions you would make to the code.

### Getting Started

To begin working on this project, follow these simple steps:

1. **Install Dependencies:**

   ```bash
   yarn install
   ```

2. **Start the Development Server:**
   ```bash
   yarn start
   ```

## Further Tasks to Improve the Project

- Check if the content is HTML or JSON.
- Create a new component to display the results from the fetch. (JSON result per example).
- When POST or PUT methods are chosen, show inputs to be filled and form the object to be sent with the request.
- Solve CORS policy error by building a proxy - we can use express to build its proxy. With this, we can create a middleware to pass a header with 'Access-Control-Allow-Origin', '*' to every response from the server.
- Add a lint configuration that will enforce consistent coding standards, catch syntax errors early in the development process, and help identify potential bugs, improving code quality and maintainability.
- Make layout responsible for all sizes of device (easier to do with React Bootstrap Breakpoints)
- Create a folder and files to store the inline styles.
- Add tests to check:
  - Valid URL Fetch: Verify that the component correctly fetches data from the URL.
  - Invalid URL Fetch: Verify that when the component has an error when fetching data from the URL to display a message.
  - Different HTTP Methods Handling: Verify that the component can handle various request types appropriately.
  - Edge Cases Testing: Test edge cases such as extremely long URLs, URLs with special characters, or URLs with query parameters.
- Fix: WARNING in ./node_modules/@react-aria/ssr/dist/SSRProvider.mjs

## Libraries Used

- **React Bootstrap**: I chose to work with Bootstrap because it is the most popular CSS framework that provides pre-styled components and allows me to create components quickly and in the future making easier to make the styles responsive.

- **react-icons**: This library provides free icons that make the application a bit more pleasant for the user. I used some icons to be displayed with the response message.
