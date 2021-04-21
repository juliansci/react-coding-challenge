## React Coding Challenge
It is a project to solve the challenge described on the file `CHALLENGE.md`

### Considerations
1. It was created from a create-react-app empty project.
2. The challenge doesn't define any template, therefore I focused on functionality over user interface.
3. This project has three important branches:
   1. `main`: It is the main solution without the app state funcionality. 
   2. `context-implementation`: Store the app state using React Context.
   3. `redux-implementation`: Store the app state usin Redux.
4. The application was tested using react-testing-library
5. To fetch the data I created the `useFetch` hook, but it would be good refactoring it to use `react-query`.