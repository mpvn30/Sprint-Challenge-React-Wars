# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React JS uses asynchronous code at its finest. It allows developers to build in components which in many cases will run code of an entire program even if errors are found in a single component within the program. With that said, debugging will be an easier task as usual. In addition, react allows us to maximize other libraries such as reactstrap and the like.

1. What does it mean to think in react?

In short, to think in react is to plan a user interface and then breaking down into separate components to be later on built one at a time.

1. Describe state.

In React, state has its own local state. It cannot be accessed or modified outside the React component. We can think of state like that of a function local scope.

1. Describe props.

In my time in Lambda, the best way props was described to me was that in every case in react we create components with different sets of data. Props is responsible of updating that data everytime we map over sets of data. In other words, we can think of props as data placeholders.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

Basically, a side effect tries to modify data outside the scope of a function(or a third party network) but in order to modify the data we grabbed from the side effect we must sync it with the react state which is then passed through the props to place the data we want and finally displayed on the UI when renderred on the App.