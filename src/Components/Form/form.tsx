import { FieldValues, useForm } from "react-hook-form";

interface FormData {
  // For define the shape of the form
  name: string;
  age: number;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }, // Nested deStructure
  } = useForm<FormData>();
  /* "{ register, handleSubmit, formState: {errors} }" Here is an example for "Nested deStructure" in JS */
  console.log(errors);

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            {...register("name", { required: true, minLength: 3 })}
            id="name"
            type="text"
            className="form-control"
          />
          {errors.name?.type === "required" && (
            <p className="text-danger">The name field is required</p>
            /* '?.' - "Optional chaining" in javaScript. The type propoerty is evaluated only if there is a property called 'name' */
          )}
          {errors.name?.type === "minLength" && (
            <p className="text-danger">The name is too short</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            {...register("age", { required: true })}
            id="age"
            type="number"
            className="form-control"
          />
          {errors.age?.type === "required" && (
            <p className="text-danger">The age field is required</p>
          )}
        </div>

        <button type="submit" className="btn btn-secondary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
