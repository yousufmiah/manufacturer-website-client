import { Link, useNavigate } from "react-router-dom";
import useHookData from "../../hooks/useHookData";
import AllItem from "./Allitem";

const AllItems = () => {
  const [items, setItems] = useHookData({});

  const navigate = useNavigate();
  const handleAllItems = () => {
    navigate("/allItems");
    // console.log("Clicked");
  };

  return (
    <div>
      <div className="my-20">
        <h2 className="text-primary text-xl md:text-4xl font-bold px-10 text-center">
          Our Items are available
        </h2>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.map((item) => (
            <AllItem key={item._id} item={item}></AllItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllItems;
