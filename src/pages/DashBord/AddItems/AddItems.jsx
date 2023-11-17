import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

function AddItems() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <SectionTitle
        heading={`add an item`}
        subHeading={`Whats New`}
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("name")} />
          <select {...register("category")}>
            <option value="salad">salad</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </select>
          <select className="w-full max-w-xs select select-bordered">
            <option disabled selected>
              Select a category
            </option>
            <option className="capitalize" value="salad">
              salad
            </option>
            <option className="capitalize" value="pizza">
              pizza
            </option>
            <option className="capitalize" value="soup">
              soup
            </option>
            <option className="capitalize" value="dessert">
              dessert
            </option>
            <option className="capitalize" value="drinks">
              drinks
            </option>
          </select>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}

export default AddItems;
