import React, { useEffect } from "react";
import MenuItem from "../MenuItem";
import { withFocusable } from "@noriginmedia/react-spatial-navigation";

interface MenuListProps {
  setFocus: (focusKey?: string) => void;
  focusKey?: string;
  preferredChildFocusKey?: string;
  itemsCount: number;
}

const MenuList = ({ setFocus, focusKey, itemsCount }: MenuListProps) => {
  return (
    <div style={{ display: "flex" }}>
      {Array.from({ length: itemsCount }).map((_, index) => (
        <MenuItem
          key={`${focusKey}-ITEM-${index + 1}`}
          focusKey={`${focusKey}-ITEM-${index + 1}`}
          label={`Item ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default withFocusable({
  trackChildren: true,
  getPreferredFocusKey: (props: { preferredChildFocusKey?: string }) =>
    props.preferredChildFocusKey,
})(MenuList);
