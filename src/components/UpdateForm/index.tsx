// Purpose: Provide a form for updating a list category.


// interface
interface UpdateCategoryFormProps {
  onUpdateSuccess: () => void;
  onCancel: () => void;
  category: {
    id: string;
    name: string;
    is_active: boolean;
  };
}


// component
const UpdateForm = () => {
  return (
    <div>index</div>
  )
}

export default UpdateForm: