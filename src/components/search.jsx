import React, { useState } from 'react';
import { supabase } from '../lib/supabase';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const searchMenu = async () => {
    const { data, error } = await supabase
      .from('menus')
      .select(`
        item_name,
        price,
        restaurants ( name )
      `)
      .ilike('item_name', `%${query}%`);

    if (error) console.error(error);
    else setResults(data);
  };

  return (
    <div>
      <input
        placeholder="Search food..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={searchMenu}>Search</button>

      {results.map((item, i) => (
        <div key={i}>
          <h3>{item.item_name}</h3>
          <p>₹{item.price}</p>
          <p>{item.restaurants?.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Search;