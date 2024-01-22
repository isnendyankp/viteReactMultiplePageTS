// Purpose: Provide a form for updating a list category.
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Card } from '../../components';
import { updateCategory } from '../../api/categoryAPI';

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

    // formik
    const formik = useFormik({
    initialValues: {
      id: category.id,
      name: category.name,
      is_active: category.is_active,
    },

    // validation
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      is_active: Yup.boolean().required('Required'),
    }),

    // submit
     onSubmit: async (values) => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          await updateCategory(values.id, values.name, values.is_active, token);
          onUpdateSuccess();
        }
      } catch (error) {
        console.error('Update category failed', error);
      }
    },
  });

// render
  return (
        <Card border className="shadow-xl rounded-lg p-8">
            {/* Form with formik */}
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
                        <div className="text-red-500 text-xs mt-1">
                        {formik.errors.name}
                        </div>
                    ) : null}
                </div>

                {/* Active */}
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
                        <div className="text-red-500 text-xs mt-1">
                        {formik.errors.is_active}
                        </div>
                    ) : null}
                </div>
            </form>
        </Card>
  )
}

export default UpdateForm: