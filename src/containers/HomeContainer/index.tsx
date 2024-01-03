import { Input, Text, Button, Card} from "../../components"
import { useFormik } from "formik";
import * as yup from 'yup';
import { useState } from "react";

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
}

export default HomeContainer

// Progress:
// 1. cr8 HomeContainer component
// 2. import input component
// 3. render with pass in input component
// 4. Add className props to input component with value display block and border neutral 400
// 5. Add value border same as border-width: 1px from tailwind
// 6. import Text component and render it with children props Home Container
// 7. pass in children props to Text component with value Nama
// 8. Add new text & input element to div element and wrap it with react fragment for umur & hobi
// 9. import Button component
// 10. render with pass in Button component with label props & value Submit
// 11. Add type submit because @Button component interface has extended ButtonHTMLAttributes<HTMLButtonElement> from react
// 12. Add tailwind bg-green-500 to button element with className props
// 13. import Form from formik
// 14. warp all input, text, button element with Form component inside Formik component
// 15. fix import from formik with add Formik to Formik component
// 16. Add initialValues props to Formik component with value nama, umur, hobi & empty string value & onSubmit props with value console.log(values)
// 17. Connecting input with initialValues props with add name props to input component with value nama, umur, hobi(like  name={'nama'}, name={'umur'}, name={'hobi'})
// 18. cr8 formMik with useFormik hook from formik
// 19. pass in initialValues props to useFormik hook with value nama, umur, hobi & empty string value & onSubmit props with value console.log(values)
// 20. add value props to input component to get value after input text with value formMik.values.nama, formMik.values.umur, formMik.values.hobi
// 21. add onChange props to input component with value formMik.handleChange('nama'), formMik.handleChange('umur'), formMik.handleChange('hobi') to add return value from input text
// 22. add values onSubmit @formMik>onSubmit props
// 23. add handleSubmit props to form element with onSubmit={formMik.handleSubmit}
// 24. import yup validation
// 25. add validationSchema props to useFormik hook with yup.object({nama: yup.string().required()})
// 26. add error validation text with yup for input nama
// 27. add change text error validation at nama input @validationSchema>nama
// 28. add validationSchema for umur & hobi including error validation text
// 29. cr8 interface FormProps with nama, umur, hobi props with type string
// 30. add FormProps type to onSubmit props with type FormProps
// 31. cr8 useState for step with value 1
// 32. cr8 3 step for form
// 33. cr8 function handleNext
// 34. cr8 function handlePrevious
// 35. edit interface FormProps with fullname, email, date, alamat, kota, negara, kodepos, username, password props with type string
// 36. add new initial values to forMik with fullname, email, date, alamat, kota, negara, kodepos, username, password & empty string value
//  37. Add validationSchema for step 1 with fullname, email & date include text error validation.
// 38. Add validationSchema for step 2 with alamat, kota, negara, kodepos include text error validation.
// 39. Add validationSchema for step 3 with username, password include text error validation.
// 40. wrap form with Card component from @components
// 41. import Card component
// 42. render Card component with border props
// 43. add border props to Main Card component with value false & className props with value empty string
// 44. Add logic for step 1 to form element with add condition if step === 1
// 45. Add logic for step 2 to form element with add condition if step === 2 & add new form element
// 46. pass in onSubmit props to form element with value formMik.handleSubmit
// 47. add text & input for input street address
// 48. add error validation text with yup for input alamat
// 49. add text & input for input city
// 50. add error validation text with yup for input kota
// 51. add text & input for input zip code
// 52. add error validation text with yup for input kodepos
// 53. add Button previous @step 2 with add condition with handlePrevious function
// 54. add Button next @step 2 with add condition with handleNext function
// 55. Add  base logic for step 3
// 56. add form element for step 3 include onSubmit props
// 57. add div for input username
// 58. add text with value Username
// 59. add input with name props with value username
// 60. add style with tailwind className props with value block border-emerald-700 border
// 61. add value props to input with value formMik.values.username
// 62. add onChange props to input with value formMik.handleChange('username')
// 63. add error validation text with yup for input nama
// 64. add div for base input password
// 65. add input & styling tailwind className props with value block border-emerald-700 border
// 66. add name props to input with value password because we need to add validationSchema for password
// 67. add value props to input with value formMik.values.password
// 68. add onChange props to input with value formMik.handleChange('password')
// 69. add error validation text with yup for input password
// 70. add Button previous @step 3 with add condition with handlePrevious function
// 71. add Button submit @step 3 with add condition with handleNext function
// 72. add navbar component to HomeContainer
// 73. remove Navbar cz already use nested route with element PublicLayout component
