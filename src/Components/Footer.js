import { useContext } from "react";
import { todoContext } from "../App";
import plus from "../Icons/Combined Shape.png";
import ellipse from "../Icons/Ellipse 1.png";

const Footer = () => {
  const {
    todos,
    sort,
    SetSort,
    add,
    setAdd,
    filter,
    setFilter,
    filterArray,
    setFilterArray,
    setError
  } = useContext(todoContext);

  function handleFilter(val) {
    SetSort(val);
    setFilter(true);
    setAdd(false);
    const temp = todos.filter((item) => item.check === val);
    setFilterArray(val === "All" ? todos : temp);
  }

  return (
    <div className="footer">
      <div className="ftLength">
        {!add ? (
          <div>
            <span
              className="plus"
              onClick={() => {
                setAdd(true);
                setFilter(false);
              }}
            >
              <img src={plus} alt="" />
            </span>
          </div>
        ) : (
          <div>
            <span
              className="close"
              onClick={() => {
                setAdd(false);
                setError(false);
              }}
            >
              <img src={plus} alt="" />
            </span>
          </div>
        )}
        <b>{filter ? filterArray.length : todos.length} Items</b>
      </div>
      <span className="sort">
        <span className="sortIn" onClick={() => handleFilter("All")}>
          All
          {sort === "All" && (
            <span style={{ position: "absolute", right: "15%", top: "25px" }}>
              <img src={ellipse} alt="ellipse" width="5px" height="5px" />
            </span>
          )}
        </span>
        <span className="sortIn" onClick={() => handleFilter(true)}>
          Completed
          {sort === true && (
            <span style={{ position: "absolute", right: "35%", top: "25px" }}>
              <img src={ellipse} alt="ellipse" width="5px" height="5px" />
            </span>
          )}
        </span>
        <span onClick={() => handleFilter(false)}>
          Remaining
          {sort === false && (
            <span style={{ position: "absolute", right: "40px", top: "45px" }}>
              <img src={ellipse} alt="ellipse" width="5px" height="5px" />
            </span>
          )}
        </span>
      </span>
    </div>
  );
};

export default Footer;
