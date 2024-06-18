# My React Learning Journey

Welcome to my React learning workbook! This repository contains all my practice exercises, notes, and progress as I learn React.

## Table of Contents

1. [Getting Started](#Getting-Started)
   - [Terms](#intro-terms)
   - [Summary](#intro-summary)
2. [Building Components](#Building-Components)
   - [Terms](#Components-terms)
   - [Summary](#Components-summary)
3. [Resources](#resources)

## Getting Started

### Terms {#intro-terms}

**Components** **JSX**
**JavaScript Framework** **DOM**
**JavaScript Library** **Virtual DOM**

### Summary {#intro-summary}

- React is a JavaScript library for building dynamic and interactive user interfaces.
- In React applications, we don’t query and update the DOM. Instead, we describe our application using small, reusable components. React will take care of efficiently creating and updating DOM elements.
- React components can be created using a function or a class. Function-based components are the preferred approach as they’re more concise and easier to work with.
- JSX stands for JavaScript XML. It is a syntax that allows us to write components that combine HTML and JavaScript in a readable and expressive way, making it easier to create complex user interfaces.
- When our application starts, React takes a tree of components and builds a JavaScript data structure called the virtual DOM. This virtual DOM is different from the actual DOM in the browser. It’s a lightweight, in-memory representation of our component tree.
- When the state or the data of a component changes, React updates the corresponding node in the virtual DOM to reflect the new state. Then, it compares the current version of virtual DOM with the previous version to identify the nodes that should be updated. It’ll then update those nodes in the actual DOM.
- In browser-based apps, updating the DOM is done by a companion library called ReactDOM. In mobile apps, React Native uses native components to render the user interface.
- Since React is just a library and not a framework like Angular or Vue, we often need other tools for concerns such as routing, state management, internationalization, form validation, etc.

## Building Components

### Terms {#Components-terms}

**Fragment**
**Immutable**
**Props**
**State**
**hook**

### Summary {#Components-summary}

- In React apps, a component can only return a single element. To return multiple elements, we wrap them in a fragment, which is represented by empty angle brackets.
- To render a list in JSX, we use the ‘array.map()’ method. When mapping items, each item must have a unique key, which can be a string or a number.
- To conditionally render content, we can use an ‘if’ statement or a ternary operator.
- We use the state hook to define state (data that can change over time) in a component. A hook is a function that allows us to tap into built-in features in React.
- Components can optionally have props (short for properties) to accept input.
- We can pass data and functions to a component using props. Functions are used to notify the parent (consumer) of a component about certain events that occur in the component, such as an item being clicked or selected.•We should treat props as immutable (read-only) and not modify them.
- When the state or props of a component change, React will re-render the component and update the DOM accordingly.
- In React apps, a component can only return a single element. To return multiple elements, we wrap them in a fragment, which is represented by empty angle brackets.
- To render a list in JSX, we use the ‘array.map()’ method. When mapping items, each item must have a unique key, which can be a string or a number.
- To conditionally render content, we can use an ‘if’ statement or a ternary operator.
- We use the state hook to define state (data that can change over time) in a component. A hook is a function that allows us to tap into built-in features in React.
- Components can optionally have props (short for properties) to accept input.
- We can pass data and functions to a component using props. Functions are used to notify the parent (consumer) of a component about certain events that occur in the component, such as an item being clicked or selected.
- We should treat props as immutable (read-only) and not modify them.
- When the state or props of a component change, React will re-render the component and update the DOM accordingly.

## Resources

- [Official React Documentation](https://reactjs.org/docs/getting-started.html)
- [React Tutorial for Beginners](https://www.tutorialspoint.com/reactjs/index.htm)
