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

  //  Render component
  return <div>editCategory</div>;
};

export default EditCategory;
