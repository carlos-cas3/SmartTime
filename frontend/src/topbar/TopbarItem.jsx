import MenuItem from "../components/Shared/MenuItem";

function TopbarItem({ icon, label, path, onClick, collapsed, extraContent }) {
    return (
        <MenuItem
            icon={icon}
            label={label}
            path={path}
            onClick={onClick}
            showLabel={!collapsed}
            extraContent={extraContent}
        />
    );
}

export default TopbarItem;
