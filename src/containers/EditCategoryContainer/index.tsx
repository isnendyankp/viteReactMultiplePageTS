import { useEffect, useState } from 'react'
import axios from 'axios';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';


// interface 
interface Category {
  id: string;
  name: string;
  is_active: boolean;
}

// interface for form props
interface FormProps {
  name: string;
  is_active: boolean;
}

const editCategory = () => {
  // useNavigate hook
  const navigate = useNavigate();

  // useState hook
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);

  // useEffect hook for edit category
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`https://mock-api.arikmpt.com/api/category/${id}`);
      setEditingCategory(data);
    })();
  }, [id]);

  // useFormik hook
  const formMik = useFormik<FormProps>({
    initialValues: {
      name: editingCategory?.name ?? '',
      is_active: editingCategory?.is_active ?? true,
    },

    // onSubmit function for submit form
    onSubmit: async (values) => {
      await axios.put(`https://mock-api.arikmpt.com/api/category/${id}`, values);
      console.log('success');
      // navigate to list category page
      navigate('/list')
    },
  });

  //  Render component
  return (
    <div>editCategory</div>
  )
}

export default editCategory
