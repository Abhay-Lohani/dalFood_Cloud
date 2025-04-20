import React, { useState, useEffect } from 'react';

const Menu = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/api/menu')
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Menu</h2>
      <ul>
        {items.map(item => (
          <li key={item.id} className="mb-2">
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
