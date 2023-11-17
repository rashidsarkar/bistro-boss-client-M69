import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";

function ManageItem() {
  const [menu] = useMenu();
  return (
    <div>
      <SectionTitle
        heading={`msnnsge all items`}
        subHeading={`hurry up`}
      ></SectionTitle>
      <div></div>
    </div>
  );
}

export default ManageItem;
