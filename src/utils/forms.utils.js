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
    .min(2, 'Demaciado corto!')
    .max(50, 'Demaciado largo!')
    .required('Campo requerido'),
    companyEmail: Yup.string().email('Invalid email').required('Campo requerido'),
    contactName: Yup.string()
    .min(2, 'Demaciado corto!')
    .max(50, 'Demaciado largo!')
    .required('Campo requerido'),
    companyPhone: Yup.number()
    .min(2, 'Demaciado corto!')
    .required('Campo requerido'),
    companyEmployeeTotal: Yup.number()
    .min(2, 'Demaciado corto!')
    .max(50, 'Demaciado largo!')
    .required('Campo requerido'),
    companyEmployeeTotal: Yup.number()
    .min(2, 'Demaciado corto!')
    .max(50, 'Demaciado largo!')
    .required('Campo requerido'),
    password: Yup.string()
    .min(8, 'Demaciado corto!')
    .required('Campo requerido')
    .matches(/[a-zA-Z]/, 'La contraseña solo puede contener letras latinas.')
  });

