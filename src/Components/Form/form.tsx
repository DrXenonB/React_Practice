import { FormEvent, useRef } from "react";

const Form = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  /* 
    "useRef"  is an another react Built in Hook.
    We can use it to referrence a DOM Element
    <HTMLInputElement> - For telling TypeScript compiler
    */

  const person = { name: "", age: 0 };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault(); //To prevent this form being posted to the server
    if (nameRef.current !== null && ageRef.current !== null) {
      person.name = nameRef.current.value;
      person.age = parseInt(ageRef.current.value);
      console.log(person);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input ref={nameRef} id="name" type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input ref={ageRef} id="age" type="number" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
