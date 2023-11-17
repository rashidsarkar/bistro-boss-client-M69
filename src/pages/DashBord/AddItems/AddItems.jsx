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
              <span className="label-text">Recipe Name </span>
            </label>
            <input
              type="text"
              placeholder="Recipe Name"
              {...register("name")}
              className="w-full input input-bordered"
            />
          </div>
          <div className="flex gap-6">
            {/* category */}
            <div className="w-full my-6 form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select
                {...register("category")}
                className="w-full select select-bordered"
              >
                <option disabled selected>
                  Select a category
                </option>
                <option value="salad">salad</option>
                <option value="pizza">pizza</option>
                <option value="soup">soup</option>
                <option value="dessert">dessert</option>
                <option value="drinks">drinks</option>
              </select>
            </div>
            {/* Price */}
            <div className="w-full my-6 form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                placeholder="Price"
                {...register("price")}
                className="w-full input input-bordered"
              />
            </div>
          </div>
          {/* recipe details */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe Details</span>
            </label>
            <textarea
              className="h-24 textarea textarea-bordered"
              placeholder="Bio"
            ></textarea>
          </div>
          <div className="w-full my-6 form-control">
            <input type="file" className="w-full max-w-xs file-input" />
          </div>

          <button className="btn">Add Item</button>
        </form>
      </div>
    </div>
  );
}

export default AddItems;
