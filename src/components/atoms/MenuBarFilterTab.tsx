import FilterBar from "../molecules/FilterBar";
import "./MenuBarFilterTab.css";
import "./MenuBarTab.css";

const MenuBarFilterTab = () => {

    let filterBar = null;
    let isFilterBarOpen : boolean = false;
    const handleClick = () => {
        if (isFilterBarOpen) {
            filterBar = null;
            isFilterBarOpen = false
        } else {
            filterBar = (<FilterBar/>);
            isFilterBarOpen = false

        }
    };

    return (
        <div className="menu-bar-tab" onClick={handleClick}>
            <img className="icon" src="\assets\icons\sort.png" alt="icon" />
            <p className="title">Filter</p>
            {filterBar}
        </div>
    );
};

export default MenuBarFilterTab;