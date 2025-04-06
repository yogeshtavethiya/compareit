import React, { useEffect } from "react";
import { withFocusable } from "@noriginmedia/react-spatial-navigation";
import MenuList from "../../Components/MenuList";

interface MenuProps {
  setFocus: (focusKey?: string) => void;
}

const Menu = ({ setFocus }: MenuProps) => {
  useEffect(() => {
    setFocus("MENULIST 1");
  }, [setFocus]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <MenuList
        focusKey="MENULIST 1"
        preferredChildFocusKey="MENULIST 1-ITEM-1"
        itemsCount={2}
      />

      <MenuList
        focusKey="MENULIST 2"
        preferredChildFocusKey="MENULIST 2-ITEM-1"
        itemsCount={5}
      />
    </div>
  );
};

export default withFocusable({ trackChildren: true })(Menu);
