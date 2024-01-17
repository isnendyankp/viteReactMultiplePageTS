import { useState } from 'react'

// interface 
interface Category {
  id: string;
  name: string;
  is_active: boolean;
}

const editCategory = () => {

  // useState hook
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);

  // useEffect hook for edit category
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`https://mock-api.arikmpt.com/api/category/${id}`);
      setEditingCategory(data);
    })();
  }, [id]);

  //  Render component
  return (
    <div>editCategory</div>
  )
}

export default editCategory
