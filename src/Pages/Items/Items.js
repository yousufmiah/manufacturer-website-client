import { Link, useNavigate } from "react-router-dom";
import useHookData from "../../hooks/useHookData";
import Item from "./Item";
// import Item from "./item";

const Items = () => {
  const [items, setItems] = useHookData({});
  //   console.log(items);

  const sliceItems = items.slice(0, 6);
  // console.log(sliceItems);

  const navigate = useNavigate();
  const handleAllItems = () => {
    navigate("/allItems");
    // console.log("Clicked");
  };

  return (
    <div>
      <div className="my-20">
        <h2 className="text-primary text-xl md:text-4xl font-bold px-10 text-center">
          Our Items are available here
        </h2>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {sliceItems.map((item) => (
            <Item key={item._id} item={item}></Item>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/allitems"
            onClick={() => handleAllItems()}
            className="btn btn-secondary text-primary text-bold text-2xl px-5 my-5"
          >
            All Items
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Items;
