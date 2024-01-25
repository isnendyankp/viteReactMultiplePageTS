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
      {/* Name */}
      <div>
        <label htmlFor="name" className="block mb-1 font-bold">
          Category Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          className="w-full px-2 py-1 border rounded"
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="text-sm text-red-500">{formik.errors.name}</div>
        ) : null}
      </div>

      {/* Is Active */}
      <div className="flex items-center space-x-2">
        <label htmlFor="is_active" className="font-bold">
          Is Active
        </label>
        <input
          type="checkbox"
          id="is_active"
          name="is_active"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          checked={formik.values.is_active}
        />
        {formik.touched.is_active && formik.errors.is_active ? (
          <div className="text-sm text-red-500">{formik.errors.is_active}</div>
        ) : null}
      </div>

      {/* Buttons */}
      <div className="flex space-x-2">
        {/*  Cancel */}
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded"
        >
          Cancel
        </button>
        
      </div>

    </form>
  );  
};

export default EditCategory;
