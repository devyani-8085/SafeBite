import React from 'react';
import { supabase } from '../lib/supabase';

const Upload = () => {

  const handleUpload = async (e) => {
    const file = e.target.files[0];

    const { data, error } = await supabase.storage
      .from('hygiene-images')
      .upload(`public/${file.name}`, file);

    if (error) console.error(error);
    else console.log(data);
  };

  return (
    <div>
      <input type="file" onChange={handleUpload} />
    </div>
  );
};

export default Upload;