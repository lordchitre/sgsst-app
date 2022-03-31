import { useFormik } from 'formik';

import { Container, Grid, Input, FormControl,
    FormLabel,
    Button
} from '@chakra-ui/react';

import { useFirebase } from '../hooks/useFirebase';

const initialProps = {
    email: '',
    password: '',
    uid: ''
};

export const Register = () => {

    const { setCustomer } = useFirebase();

    const formik = useFormik({
        initialValues: initialProps,
        onSubmit: (values) => {
            setCustomer(values).then(() => {
              
            }).catch(() => {
                alert("erorr");
            });
            
        },
    });

  return (
    <Container>
            <form onSubmit={formik.handleSubmit}>
                <Grid gap={3}>
                    <FormControl>
                        <FormLabel htmlFor="email">Correo empresa</FormLabel>
                        <Input id="email" type="email"  name="email" value={formik.values.email} onChange={formik.handleChange} />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="password">clave empresa</FormLabel>
                        <Input id="password" type="text" value={formik.values.password} onChange={formik.handleChange} />
                    </FormControl>
                    <Button type="submit">Registrarse</Button>
                </Grid>
            </form>
    </Container>
  )
}
