import { Input, Text, Button, Card } from '../../components';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useState } from 'react';

const HomeContainer = () => {
  // cr8 useState for step
  const [step, setStep] = useState<number>(1);

  //  cr8 3 step for form
  // cr8 function handleNext
  const handleNext = () => {
    if (step === 3) {
      return;
    }
    setStep((prevState) => prevState + 1);
  };

  // cr8 function handlePrevious
  const handlePrevious = () => {
    if (step === 1) {
      return;
    }
    setStep((prevState) => prevState - 1);
  };

  interface FormProps {
    fullname: string;
    email: string;
    date: string;
    alamat: string;
    kota: string;
    negara: string;
    kodepos: string;
    username: string;
    password: string;
  }

  const formMik = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      date: '',
      alamat: '',
      kota: '',
      negara: '',
      kodepos: '',
      username: '',
      password: '',
    },
    onSubmit: (values: FormProps) => console.log(values),
    validationSchema: yup.object({
      // step 1 validation
      fullname: yup.string().required('Nama tidak boleh kosong'),
      email: yup
        .string()
        .email('Email tidak valid')
        .required('Email tidak boleh kosong'),
      date: yup.string().required('Tanggal lahir tidak boleh kosong'),
      // step 2 validation
      alamat: yup.string().required('Alamat tidak boleh kosong'),
      kota: yup.string().required('Kota tidak boleh kosong'),
      negara: yup.string().required('Negara tidak boleh kosong'),
      kodepos: yup.string().required('Kodepos tidak boleh kosong'),
      // step 3 validation
      username: yup.string().required('Username tidak boleh kosong'),
      password: yup
        .string()
        .min(8, 'Password minimal 8 karakter')
        .required('Password tidak boleh kosong'),
    }),
  });

  return (
    <Card border={false} className=" ">
      <Card border>
        {/* Step 1: Personal information = FullName, Email Address, Date of birth */}

        {step === 1 && (
          <form onSubmit={formMik.handleSubmit}>
            <p>Personal Information</p>
            {/* Input FullName */}
            <div className="m-1">
              <Text>{'FullName'}</Text>
              <Input
                className="block border-emerald-700 border"
                name={'nama'}
                value={formMik.values.fullname}
                onChange={formMik.handleChange('fullname')}
              />
              {/* add error validation text with yup for input FullName */}
              {formMik.errors.fullname && (
                <Text>{formMik.errors.fullname}</Text>
              )}
            </div>
            {/* Input Email address */}
            <div className="m-1">
              <Text>{'Email Address'}</Text>
              <Input
                className="block border-emerald-700 border"
                name={'email'}
                value={formMik.values.email}
                onChange={formMik.handleChange('email')}
              />
              {/* add error validation text with yup for input Email */}
              {formMik.errors.email && <Text>{formMik.errors.email}</Text>}
            </div>
            {/* Input Date of birth */}
            <div className="m-1">
              <Text>{'Date of birth'}</Text>
              <Input
                className="block border-emerald-700 border"
                name={'date'}
                value={formMik.values.date}
                onChange={formMik.handleChange('date')}
              />
              {/* add error validation text with yup for input date */}
              {formMik.errors.date && <Text>{formMik.errors.date}</Text>}
            </div>
            {/* Button previous */}
            <Button
              label={'Previous'}
              onClick={handlePrevious}
              type={'button'}
              className={'bg-green-500'}
            />
            {/* Button Next */}
            <Button
              label={'Next'}
              onClick={handleNext}
              type={'button'}
              className={'bg-green-500'}
            />
          </form>
        )}

        {/* Step 2 for Address information = Street Address, City, State, Zip Code */}

        {step === 2 && (
          <form onSubmit={formMik.handleSubmit}>
            <p>Address Information</p>
            {/* Input Street Address */}
            <div className="m-1">
              <Text>{'Street Address'}</Text>
              <Input
                className="block border-emerald-700 border"
                name={'alamat'}
                value={formMik.values.alamat}
                onChange={formMik.handleChange('alamat')}
              />
              {/* add error validation text with yup for input alamat */}
              {formMik.errors.alamat && <Text>{formMik.errors.alamat}</Text>}
            </div>

            {/* Input City */}
            <div className="m-1">
              <Text>{'City'}</Text>
              <Input
                className="block border-emerald-700 border"
                name={'kota'}
                value={formMik.values.kota}
                onChange={formMik.handleChange('kota')}
              />
              {/* add error validation text with yup for input kota */}
              {formMik.errors.kota && <Text>{formMik.errors.kota}</Text>}
            </div>

            {/* Input Zip Code */}
            <div className="m-1">
              <Text>{'Zip Code'}</Text>
              <Input
                className="block border-emerald-700 border"
                name={'kodepos'}
                value={formMik.values.kodepos}
                onChange={formMik.handleChange('kodepos')}
              />
              {/* add error validation text with yup for input kodepos */}
              {formMik.errors.kodepos && <Text>{formMik.errors.kodepos}</Text>}
            </div>

            {/* Button previous */}
            <Button
              label={'Previous'}
              onClick={handlePrevious}
              type={'button'}
              className={'bg-green-500'}
            />
            {/* Button Next */}
            <Button
              label={'Next'}
              onClick={handleNext}
              type={'button'}
              className={'bg-green-500'}
            />
          </form>
        )}

        {/* Step 3 for Account information = Username, Password */}
        {step === 3 && (
          // form element
          <form onSubmit={formMik.handleSubmit}>
            {/* Input Username */}
            <div className="m-1">
              <Text>{'Username'}</Text>
              <Input
                className="block border-emerald-700 border"
                name={'username'}
                value={formMik.values.username}
                onChange={formMik.handleChange('username')}
              />
              {/* add error validation text with yup for input username */}
              {formMik.errors.username && (
                <Text>{formMik.errors.username}</Text>
              )}
            </div>
            {/* Input Password */}
            <div className="m-1">
              <Text>{'Password'}</Text>
              <Input
                className="block border-emerald-700 border"
                name={'password'}
                value={formMik.values.password}
                onChange={formMik.handleChange('password')}
              />
              {/* add error validation text with yup for input password */}
              {formMik.errors.password && (
                <Text>{formMik.errors.password}</Text>
              )}
            </div>
            {/* Button previous */}
            <Button
              label={'Previous'}
              onClick={handlePrevious}
              type={'button'}
              className={'bg-green-500'}
            />
            {/* Button Submit */}
            <Button
              label={'Submit'}
              type={'submit'}
              className={'bg-green-500'}
            />
          </form>
        )}
      </Card>
    </Card>
  );
};

export default HomeContainer;