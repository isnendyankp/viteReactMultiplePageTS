import React from 'react';
import { useAuth } from './../../context/AuthContext';
import { useFormik } from 'formik';
import * as yup from 'yup';

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

const EditCategory: React.FC<UpdateCategoryFormProps> = ({
  onUpdateSuccess,
  onCancel,
  category,
}) => {

  // useAuth hook to get auth state and methods to sign in and sign out users 
  const { isAuthenticated } = useAuth();

  //  Formik
  const formik = useFormik({
    initialValues: {
      id: category.id,
      name: category.name,
      is_active: category.is_active,
    },

    //  Yup validation
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      is_active: Yup.boolean().required('Required'),
    }),

    //  Handle submit
    onSubmit: async (values) => {
      try {
        if (isAuthenticated) {
          const token = localStorage.getItem('token');
          if (token) {
            await updateCategory(
              values.id,
              values.name,
              values.is_active,
              token
            );
            onUpdateSuccess();
          }
        }
      } catch (error) {
        console.error('Update category failed', error);
      }
    },
  });

  //  Render component
  return (
    // Form
    <form onSubmit={formik.handleSubmit} className="space-y-4">
      <div>editCategory</div>;
    </form>
  );  
};

export default EditCategory;
