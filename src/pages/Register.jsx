import { useState } from 'react';
import { useFormik } from 'formik';

import { Container, Grid, Input, FormControl,
    FormLabel,
    Button,
} from '@chakra-ui/react';

import { useFirebase } from '../hooks/useFirebase';

import * as Yup from 'yup';

const initialProps = {
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

const SignupSchema = Yup.object().shape({
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

export const Register = () => {
    const [ isLoading, setIsloading ] = useState(false);
    const { setCustomer } = useFirebase();

    const { handleSubmit, handleChange, values, errors, touched } = useFormik({
        initialValues: initialProps,
        validationSchema: SignupSchema,
        onSubmit: (values) => {
            setIsloading(true);
            setCustomer(values).then(() => {
                setIsloading(false);
            }).catch(() => {
                alert("erorr");
                setIsloading(false);
            });
        },
    });

  return (
    <Container>
            <form onSubmit={handleSubmit}>
                <Grid gap={3}>
                    <FormControl>
                        <FormLabel htmlFor="companyName">Nombre empresa</FormLabel>
                        <Input id="companyName" type="text"  name="companyName" value={values.companyName} onChange={handleChange} />
                        {errors.companyName && touched.companyName ? (
                            <div>{errors.companyName}</div>
                        ) : null}
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="contactName">Nombre de contacto</FormLabel>
                        <Input id="contactName" type="text" name="contactName" value={values.contactName} onChange={handleChange} />
                        {errors.contactName && touched.contactName ? (
                            <div>{errors.contactName}</div>
                        ) : null}
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="companyEmail">Correo de contacto</FormLabel>
                        <Input id="companyEmail" type="email"  name="companyEmail" value={values.companyEmail} onChange={handleChange} />
                        {errors.companyEmail && touched.companyEmail ? (
                            <div>{errors.companyEmail}</div>
                        ) : null}
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="companyPhone">Teléfono empresa</FormLabel>
                        <Input id="companyPhone" type="phone" name="companyPhone" value={values.companyPhone} onChange={handleChange} />
                        {errors.companyPhone && touched.companyPhone ? (
                            <div>{errors.companyPhone}</div>
                        ) : null}
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="companyEmployeeTotal">Número de empleados</FormLabel>
                        <Input id="companyEmployeeTotal" type="number"  name="companyEmployeeTotal" value={values.companyEmployeeTotal} onChange={handleChange} />
                        {errors.companyEmployeeTotal && touched.companyEmployeeTotal ? (
                            <div>{errors.companyEmployeeTotal}</div>
                        ) : null}
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="password">Nueva contraseña</FormLabel>
                       <Input id="password" type="text" value={values.password} onChange={handleChange} />
                        {errors.password && touched.password ? (
                            <div>{errors.password}</div>
                        ) : null}
                    </FormControl>
                    <Button isLoading={isLoading} type="submit">Registrarse</Button>
                </Grid>
            </form>
    </Container>
  )
}
