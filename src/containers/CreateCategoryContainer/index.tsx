import React from 'react';
import { useFormik } from 'formik';
import { CreateCategoryData } from '../../interfaces/Category';
import { createCategory } from '../../api/categoryApi';
import * as ValidationSchemas from '../../validations/validationsSchemas';
import { Button, Text, Card } from '../../components';

const CreateCategory: React.FC = () => {
  const { CreateCategorySchema } = ValidationSchemas;
  const token = localStorage.getItem('token') ?? '';

  const formik = useFormik({
    initialValues: {
      name: '',
    },
    validationSchema: CreateCategorySchema,
    onSubmit: async (values: CreateCategoryData) => {
      try {
        await createCategory({ name: values.name }, token);
        console.log('Berhasil bikin category bang!');
      } catch (error) {
        console.error(error);
      }
    },
  });
  return (
    <>
      <Card
        border
        className={
          'flex flex-wrap flex-col items-center py-4 bg-white rounded-lg'
        }
      >
        <h2 className="w-full text-2xl font-semibold text-gray-800 text-center my-2">
          Create Category
        </h2>

        <form
          onSubmit={formik.handleSubmit}
          className=" h-auto my-2 px-8 py-4 rounded-lg border border-indigo-200 bg-indigo-100 space-y-4"
        >
          <div>
            <Text>{'Nama'}</Text>
            <input
              className="w-full p-2 border border-sky-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
              type="text"
              id="name"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-red-500 text-sm">{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="flex justify-center">
            <Button
              label={'Create Category'}
              type={'submit'}
              className="w-full py-2 text-sm bg-green-400 hover:bg-green-500 focus:ring-green-500 focus:ring-offset-green-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none rounded-lg max-w-xs"
            />
          </div>
        </form>
      </Card>
    </>
  );
};

export default CreateCategory;