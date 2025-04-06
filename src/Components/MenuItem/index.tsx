import React from 'react'
import { withFocusable } from '@noriginmedia/react-spatial-navigation';

interface MenuItemProps {
    focused: boolean;
    index: number;
    setFocus: (focusKey: string) => void;
    onEnterPress?: () => void;
    onFocus?: (index: number) => void;
    focusKey?: string;
    label?: string;
  }

const MenuItem = ({focused, onEnterPress, focusKey, setFocus, label} : MenuItemProps) => {
  return (
    <div
      style={{
        padding: '10px',
        margin: '5px',
        border: '2px solid',
        borderColor: focused ? 'limegreen' : 'gray',
        backgroundColor: focused ? '#e0ffe0' : 'white',
      }}
      onClick={()=>{
        console.log('clicked', focusKey)
        setFocus('ITEM-1');
        onEnterPress?.()
      }}
    >
      {label}
    </div>
  )
}

export default withFocusable()(MenuItem);