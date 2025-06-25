import "./MenuBarFilterTab.css";
import "./MenuBarTab.css";

const MenuBarFilterTab = () => {

    let filterBar = null;
    const handleClick = () => {
        if (filterBar == null) {
            filterBar = (<FilterBar/>);
        } else {
            filterBar = null;
        }
    };

    return (
        <div className="menu-bar-tab" onClick={handleClick}>
            <img className="icon" src="" alt="icon" /> {/* ToDo */}
            <p className="title">Filter</p>
            {filterBar}
        </div>
    );

};

export default MenuBarFilterTab;