import "./MenuBarTab.css";

const MenuBarTab: React.FC<{category: string;}> = ({ category }) => {
    const availableIcons = [
        "appetizer", "bento", "beverage", "breakfast", "coffe", "cookies",
        "curry", "dessert", "egg", "fish", "fruit", "liquor",
        "main", "noodle soup", "side", "takeout", "washoku", "soup"
    ];
    const matchedIcon = availableIcons.find(icon =>
        icon.toLowerCase() === category.toLowerCase()
    );
    const iconPath = matchedIcon
        ? `/assets/icons/${matchedIcon}.png`
        : "/assets/icons/default.png"; 

    const handleClick = () => {
        const elementId = `category-${category.replace(/\s+/g, '-').toLowerCase()}`;
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="menu-bar-tab" onClick={handleClick}>
            <img className="icon" src={iconPath} alt="icon" />
            <p className="title">{category}</p>
        </div>
    );
};

export default MenuBarTab;
