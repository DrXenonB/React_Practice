# My React Learning Journey

Welcome to my React learning workbook! This repository contains all my practice exercises, notes, and progress as I learn React.

## Table of Contents

1. [Getting Started](#Getting-Started)
   - [Terms](#Getting-Started)
   - [Summary](#Getting-Started)
2. [Building Components](#Building-Components)
   - [Terms](#Building-Components)
   - [Summary](#Building-Components)
3. [Styling Components](#Styling-Components)
   - [Terms](#Styling-Components)
   - [Summary](#Styling-Components)
4. [Managing Component State](#Managing-Component-State)
   - [Terms](#Managing-Component-State)
   - [Summary](#Managing-Component-State)
5. [Building Forms](#Building-Forms)
   - [Terms](#Building-Forms)
   - [Summary](#Building-Forms)
6. [Connecting to the Backend](#Connecting-to-the-Backend)
   - [Terms](#Connecting-to-the-Backend)
   - [Summary](#Connecting-to-the-Backend)
7. [Resources](#resources)

## Getting Started

### Terms

- Components
- JSX
- JavaScript Framework
- JavaScript Library
- DOM
- Virtual DOM

### Summary

- React is a JavaScript library for building dynamic user interfaces with reusable components.
- Instead of querying and updating the DOM, React uses components to describe the UI, handling DOM updates efficiently.
- Components can be function-based (preferred for their simplicity) or class-based.
- JSX (JavaScript XML) combines HTML and JavaScript, making complex UIs easier to create.
- React uses a virtual DOM, a lightweight representation of the component tree, differing from the actual DOM.
- When a component's state changes, React updates the virtual DOM, compares it to the previous version, and updates the actual DOM accordingly.
- ReactDOM updates the DOM in web apps, while React Native uses native components for mobile apps.
- React, being a library, often requires additional tools for routing, state management, and other functionalities.

## Building Components

### Terms

- Fragment
- Immutable
- Props
- State
- hook

### Summary

- In React, a component can only return a single element. To return multiple elements, we use a fragment (`<> </>`).
- To render a list in JSX, use `array.map()`. Each item needs a unique key, which can be a string or number.
- Conditional rendering can be done with an `if` statement or a ternary operator.
- The state hook (`useState`) defines state (data that can change over time) in a component. Hooks are functions that allow access to React's built-in features.
- Components can have props (properties) to accept input and can pass data and functions through props.
- Props are used to notify the parent component about events like item clicks. Props should be treated as immutable (read-only).
- When the state or props of a component change, React re-renders the component and updates the DOM.

**CREATING A COMPONENT**

```tsx
const Message = () => {
  return <h1>Hello World!</h1>;
};

export default Message;
```

**Props**

```tsx
interface Props {
  name: string;
}

const Message = ({ name }: Props) => {
  return <h1>Hello World!</h1>;
};
```

## Styling Components

### Terms

- CSS-in-JSCSS
- modules
- Implementation details
- Interface
- Inline styles
- Modular
- Separation of concerns
- Vanilla CSS

### Summary

- Styling React components can be done using vanilla CSS, CSS modules, CSS-in-JS, and inline styles.
- Vanilla CSS involves writing styles in a separate CSS file and importing it, but can lead to class name conflicts.
- CSS modules generate unique class names during the build process to avoid conflicts.
- CSS-in-JS allows defining styles alongside the component code, providing scoping and eliminating conflicts, making it easier to manage components.
- Separation of concerns divides a program into distinct modules, each handling specific functionality, promoting modular and maintainable applications.
- This principle hides the complexity and implementation details of a module behind a well-defined interface.
- CSS-in-JS adheres to the separation of concerns principle by encapsulating all the complexity of a component within its interface.
- Inline styles are easy to apply but can make the code hard to maintain and should be used sparingly.
- The react-icons library can be used to add icons to applications.
- Popular UI libraries for building modern applications include Bootstrap, Material UI, TailwindCSS, DaisyUI, and ChakraUI.

**Vanilla CSS**

```tsx
import "./listGroup.css";

function ListGroup() {
  return <ul className="list-group"></ul>;
}
```

**CSS Modules**

```tsx
import styles from "./listGroup.css";

function ListGroup() {
  return <ul className={styles.listGroup}></ul>;
}
```

**CSS-IN-JS**

```tsx
import styled from "styled-component"

const List styled.ul`
    list-style: none;
`

function ListGroup() {
    return <List></list>;
}
```

## Managing Component State

### Terms

- Asynchronous
- Lifting state
- Pure component
- Strict mode

### Summary

- The state hook adds state to function components.
- Hooks must be called at the top level of components.
- State variables persist as long as the component is visible because they are tied to the component instance.
- React updates state asynchronously, batching updates after event handlers finish, then re-renders the component.
- Group related state variables into an object to stay organized but avoid deeply nested state objects for easier maintenance.
- Keep state minimal by avoiding redundant variables that can be computed from existing ones.
- A pure function always returns the same result given the same input and does not modify external objects.
- React function components should be pure, returning the same JSX given the same input.
- Avoid changes during the render phase to keep components pure.
- Strict mode, enabled by default in React 18, helps catch issues by rendering components twice in development to detect side effects.
- Treat objects and arrays as immutable when updating state, creating new instances instead of mutating them.
- Immer is a library that simplifies updating objects and arrays immutably.
- To share state between components, lift the state to the closest parent and pass it down as props.
- The component holding the state should also update it. Child components can notify the parent to update state using callback functions passed as props.

**Updating Objects**

```tsx
const [drink, setDrink] = useState({
  title: "Americano",
  price: 5,
});

setDrink({ ...drink, price: 2 });
```

**UPDATING NESTED OBJECTS**

```tsx
const [customer, setCustomer] = useState({
  name: "John",
  address: {
    city: "San Francisco",
    zipCode: 94111,
  },
});

setCustomer({
  ...customer,
  address: { ...customer.address, zipCode: 94112 },
});
```

**UPDATING ARRAYS**

```tsx
const [tags, setTags] = useState(["a", "b"]);

// Adding
setTags([...tags, "c"]);

// Removing
setTags(tags.filter((tag) => tag !== "a"));

// Updating
setTags(tags.map((tag) => (tag === "a" ? "A" : tag)));
```

**UPDATING ARRAY OF OBJECTS**

```tsx
const [bugs, setBugs] = useState([
  { id: 1, title: "Bug 1", fixed: false },
  { id: 2, title: "Bug 2", fixed: false },
]);

setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
```

**UPDATING WITH IMMER**

```tsx
import produce from 'immer';

setBugs (produce (draft => {
    const bug draft.find(bug => bug.id === 1);
    if (bug) bug. fixed = true;
}));
```

## Building Forms

### Terms

- React Hook Form
- Ref hook
- Schema-based validation libraries
- Zod

### Summary

- Handle form submissions by setting the `onSubmit` attribute of the form element.
- Use the `ref` hook to access DOM elements, often for reading input values upon form submission.
- The `state` hook creates state variables and updates them as the user types into input fields, causing the component to re-render with minimal performance impact.
- React Hook Form is a popular library for building forms with less code, eliminating the need for `ref` or `state` hooks to manage form state.
- React Hook Form supports standard HTML attributes for data validation, such as `required` and `minLength`.
- Use schema-based validation libraries like joi, yup, or zod to define validation rules in a schema, centralizing form validation logic.

**HANDLING FORM SUBMISSION**

```tsx
const App = () => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("Submitted");
  };

  return <form onSubmit={handleSubmit}></form>;
};
```

**ACCESSING INPUT FIELDS USING THE REF HOOK**

```tsx
const App = () => {
  const nameRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (nameRef.current) console.log(nameRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={nameRef} type="text" />
    </form>
  );
};
```

**MANAGING FORM STATE USING THE STATE HOOK**

```tsx
const App = () => {
  const [name, setName] = useState("");

  return (
    <form>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
    </form>
  );
};
```

**MANAGING FORM STATE USING REACT HOOK FORM**

```tsx
import { FieldValues, useForm } from "react-hook-form";

const App = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log("Submitting the form", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} type="text" />
    </form>
  );
};
```

**VALIDATION USING HTML5 ATTRIBUTESDISABLING THE SUBMIT BUTTON**

```tsx
const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FieldValues) => {
    console.log("Submitting the form", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true })} type="text" />
      {errors.name?.type === "required" && <p>Name is required.</p>}
    </form>
  );
};
```

**DISABLING THE SUBMIT BUTTON**

```tsx
const App = () => {
  const {
    formState: { isValid },
  } = useForm<FormData>();

  return (
    <form>
      <button disabled={!isValid}>Submit</button>
    </form>
  );
};
```

**SCHEMA-BASED VALIDATION WITH ZOD**

```tsx
import { FieldValues, useForm } from 'react-hook-form'; import {z} from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema z.object({
    name: z.string().min(3),
});

type FormData = z.infer<typeof schema>;

const App = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({ resolver: zodResolver(schema) });

    const onSubmit = (data: FieldValues) => {
        console.log('Submitting the form', data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('name')} type="text" />
            {errors.name && <p>{errors.name.message}</p>}
        </form>
    );
};
```

## Connecting to the Backend

### Terms

- Axios
- Back-end
- Effect hook
- Front-end
- HTTP
- HTTP request
- HTTP response
- Side effects

### Summary

- The effect hook (`useEffect`) is used to perform side effects, such as fetching data or updating the DOM.
- The effect hook takes a function to perform the side effect and an optional array of dependencies. The effect runs again whenever the dependencies change.
- To clean up resources created by the effect hook, include a clean-up function that runs when the component unmounts or dependencies change.
- React is a front-end library, but complete apps also require a back-end server for business logic, data storage, and other functionalities.
- Communication between the front-end and back-end happens over HTTP. The front-end sends HTTP requests to the back-end, which responds with HTTP responses.
- Each HTTP request and response has a header (metadata like content type and status code) and a body (the actual data).
- Use axios, a popular JavaScript library, to send HTTP requests to the back-end.
- When sending HTTP requests with the effect hook, provide a clean-up function to cancel requests if the component unmounts before the response is received, preventing errors.
- Handle errors in HTTP requests using try-catch blocks or `.catch()` in the promise chain.
- Custom hooks encapsulate logic for reuse across multiple components, making the code more organized and maintainable. They are useful for handling common tasks like fetching data.

**USING THE EFFECT HOOK**

```tsx
function App() {
  useEffect(() => {
    document.title = "App";
  }, []);
}
```

**FETCHING DATA WITH AXIOS**

```tsx
const [users, setUsers] = useState<User[]>([]);

useEffect(() => {
  axios.get<User[]>("http://...").then((res) => setUsers(res.data));
}, []);
```

**CANCELLING AN HTTP REQUEST**

```tsx
useEffect(() => {
  const controller = new AbortController();

  axios
    .get<User[]>("http://...", { signal: controller.signal })
    .then((res) => setUsers(res.data))
    .catch((err) => {
      if (err instanceof CanceledError) return;
      setError(err.message);
    });

  return () => controller.abort();
}, []);
```

**DELETING DATA**

```tsx
axios.delete("http://...");
```

**CREATING DATA**

```tsx
axios.post("http://...", newUser);
```

**UPDATING DATA**

```tsx
axios.put("http://...", updatedUser);
```

## Resources

- [Official React Documentation](https://reactjs.org/docs/getting-started.html)
- [React Tutorial for Beginners](https://www.tutorialspoint.com/reactjs/index.htm)
- [Mosh's GitHub repository](https://github.com/mosh-hamedani/react-course-part1)
