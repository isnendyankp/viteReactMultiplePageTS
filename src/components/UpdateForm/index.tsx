// Purpose: Provide a form for updating a list category.
import React from 'react';
import { useFormik } from 'formik';

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
const UpdateForm: React.FC<UpdateCategoryFormProps> = ({
  onUpdateSuccess,
  onCancel,
  category,
}) => {
    const formik = useFormik({
    initialValues: {
      id: category.id,
      name: category.name,
      is_active: category.is_active,
    },

// render
  return (
    <div>index</div>
  )
}

export default UpdateForm: