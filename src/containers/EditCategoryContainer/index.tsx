import { useEffect, useState } from 'react'
import axios from 'axios';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';


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

    // validationSchema for name & is_active
    validationSchema: yup.object({
      name: yup.string().required('name tidak boleh kosong'),
      is_active: yup.boolean().required('is_active tidak boleh kosong'),
    }),
  });

  // editCategory id
  const editCategoryId = async (id: string) => {
    try {
            const response = await fetch(`https://mock-api.arikmpt.com/api/category/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': "application/json"
                },
                method: 'GET'
            });
    
            if (response.ok) {
                const responseData = await response.json();
                const getCategory = responseData.data; // Access the nested 'data' property
                console.log('editing category:', getCategory)
                if (getCategory && typeof getCategory.is_active === 'boolean') {
                    setEditingCategory(getCategory);
                } else {
                    console.error('Invalid category data:', getCategory);
                } 
            }
        } catch (error) {
            console.error('Error fetching category:', error);
        }
    };

  //  Render component
  return (
    <div>editCategory</div>
  )
}

export default editCategory
