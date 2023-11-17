import { MdDelete } from "react-icons/md";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import { FaEdit } from "react-icons/fa";

function ManageItem() {
  const [menu] = useMenu();
  const handleDeleteItem = (item) => {};
  const handleUpdateItem = (item) => {};
  return (
    <div>
      <SectionTitle
        heading={`manage all items`}
        subHeading={`hurry up`}
      ></SectionTitle>
      <div>
        {" "}
        <div className="overflow-x-auto ">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Item Name</th>
                <th>price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, idx) => {
                return (
                  <tr key={item._id}>
                    <td>{idx + 1}</td>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="w-12 h-12 mask mask-squircle">
                            <img
                              src={item.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{item.name}</td>
                    <td className="text-right">$ {item.price}</td>
                    <td>
                      <button
                        onClick={() => handleUpdateItem(item)}
                        className="bg-orange-500 btn btn-sm "
                      >
                        <FaEdit className="text-white " />
                      </button>
                    </td>
                    <td className="">
                      <button
                        onClick={() => handleDeleteItem(item)}
                        className="btn btn-ghost btn-lg "
                      >
                        <MdDelete className="text-red-600" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ManageItem;
