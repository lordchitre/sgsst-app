import * as Yup from 'yup';

export const registerProps = {
    companyName: '',
    companyEmail: '',
    contactName: '',
    companyPhone: '',
    companyEmployeeTotal: '',
    nit: '',
    address: '',
    city: '',
    province: '',
    economyActivity: '',
    password: '',
    uid: ''
};

export const registerValidations = Yup.object().shape({
    companyName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    companyEmail: Yup.string().email('Invalid email').required('Required'),
    contactName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    companyPhone: Yup.number()
    .min(2, 'Too Short!')
    .required('Required'),
    companyEmployeeTotal: Yup.number()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    companyEmployeeTotal: Yup.number()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    password: Yup.string()
    .min(8, 'Too Short!')
    .required('Required')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
  });

  