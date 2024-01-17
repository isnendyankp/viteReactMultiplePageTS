
// interface 
interface Category {
  id: string;
  name: string;
  is_active: boolean;
}

const editCategory = () => {
  
  // useState hook
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  return (
    <div>editCategory</div>
  )
}

export default editCategory
