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
          <div className="w-full my-6 form-control">
            <label className="label">
              <span className="label-text">Recipe Name* </span>
            </label>
            <input
              type="text"
              placeholder="Recipe Name"
              {...register("name")}
              className="w-full input input-bordered"
            />
          </div>
          <div>
            {/* category */}
            {/* Price */}
          </div>

          <select
            {...register("category")}
            className="w-full select select-bordered"
          >
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
