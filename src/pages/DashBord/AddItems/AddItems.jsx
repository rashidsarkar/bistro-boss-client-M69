import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa6";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_Hosting_Api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
function AddItems() {
  const { axiosPublic } = useAxiosPublic();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    //NOTE - image upload to imgbb and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_Hosting_Api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(res.data);
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
              {...register("name", { required: true })}
              required
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
                defaultValue={`default`}
                {...register("category", { required: true })}
                className="w-full select select-bordered"
              >
                <option disabled value={`default`}>
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
                {...register("price", { required: true })}
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
              {...register("recipe")}
              className="h-24 textarea textarea-bordered"
              placeholder="Recipe Details"
            ></textarea>
          </div>
          <div className="w-full my-6 form-control">
            <input
              {...register("image", { required: true })}
              type="file"
              className="w-full max-w-xs file-input"
            />
          </div>

          <button type="submit" className="btn">
            Add Item <FaUtensils className="ml-4"></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddItems;
