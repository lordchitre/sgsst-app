import { db, auth, tables } from '../firebaseConfig';
import { registerValidations, registerProps } from '../utils/forms.utils';
import { onAuthenticate } from '../redux/reducers/authSlice';

import { useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

export function useRegister() {
    const [isLoading, setIsloading] = useState(false);

    const [isShowPassword, setShowPassword] = useState(false);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [isError, setIsError] = useState({
        state: false,
        message: null,
    });

    const dispatch = useDispatch();

    const { handleSubmit: formikSubmit, handleChange: formikOnChange, values: formikValues, errors: formikErrors, touched: formikTouched } = useFormik({
        initialValues: registerProps,
        validationSchema: registerValidations,
        onSubmit: (values) => {
            const { companyEmail, password } = values;
            setIsloading(true);

            createUserWithEmailAndPassword(companyEmail, password).then((authData) => {
                console.log(authData);
            }).catch((err) => {
                alert(JSON.stringify(err));
            }).finally(() => setIsloading(false));


            // setCustomer(values)
            //     .then(() => {
            //         setIsloading(false);
            //         alert("client create successfully");
            //         dispatch(onAuthenticate(values));
            //         setIsError({ state: false })
            //     })
            //     .catch(() => {
            //         setIsloading(false);
            //         setIsError({
            //             state: true,
            //             message: "El usuario ya existe!"
            //         })
            //     });
        },
    });

    return {
        formikSubmit,
        formikOnChange,
        formikValues,
        formikTouched,
        formikErrors,
        isError,
        isShowPassword,
        isLoading,
        setShowPassword
    }
}