import React from 'react';

export default function SidebarList({icon, type, message}) {
  return (
    <div>
      {icon}
      {type}
      {message}
    </div>
  );
}

