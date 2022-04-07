import { useState } from 'react';
import { useFirebase } from '../hooks/useFirebase';
import { useFormik } from 'formik';

import { registerValidations, registerProps } from '../utils/forms.utils';

export const Register = () => {
    const [ isLoading, setIsloading ] = useState(false);
    const { setCustomer } = useFirebase();

    const { handleSubmit, handleChange, values, errors, touched } = useFormik({
        initialValues: registerProps,
        validationSchema: registerValidations,
        onSubmit: (values) => {
            setIsloading(true);
            setCustomer(values).then(() => {
                setIsloading(false);
            }).catch(() => {
                setIsloading(false);
            });
        },
    });

  return (
    <div className="px-6 mt-5">
        <div className="xl:px-96">
        <p className="font-bold text-3xl">Registrarme como empresa</p>
        <form onSubmit={handleSubmit} className="grid gap-3 mt-5">
            <div className="grid gap-2">
                <label htmlFor="companyName">Nombre empresa</label>
                <input 
                    id="companyName" 
                    type="text"
                    name="companyName"
                    placeholder="Nombre legal de la empresa"
                    className="border p-2 rounded-md"
                    value={values.companyName}
                    onChange={handleChange}
                />
                {errors.companyName && touched.companyName && (
                    <div>{errors.companyName}</div>
                )}
            </div>
            <div className="grid gap-2">
                <label htmlFor="contactName">Nombre de contacto</label>
                <input 
                    id="contactName"
                    type="text"
                    name="contactName"
                    placeholder="Nombre de responsable"
                    value={values.contactName}
                    onChange={handleChange}
                    className="border p-2 rounded-md"
                />
                {errors.contactName && touched.contactName && (
                    <div>{errors.contactName}</div>
                )}
            </div>
            <div className="grid gap-2">
                <label htmlFor="companyEmail">Correo de contacto</label>
                <input 
                    id="companyEmail"
                    type="email"
                    name="companyEmail"
                    placeholder="Correo de contacto"
                    value={values.companyEmail}
                    onChange={handleChange}
                    className="border p-2 rounded-md"
                />
                {errors.companyEmail && touched.companyEmail && (
                    <div>{errors.companyEmail}</div>
                )}
            </div>
            <div className="flex gap-2">
                <div className="grid w-full">
                    <label htmlFor="companyEmployeeTotal">Número de empleados</label>
                    <input 
                        id="companyEmployeeTotal"
                        type="number" 
                        name="companyEmployeeTotal"
                        placeholder="Número aproximado de empleados"
                        value={values.companyEmployeeTotal}
                        onChange={handleChange}
                        className="border p-2 rounded-md"
                    />
                    {errors.companyEmployeeTotal && touched.companyEmployeeTotal && (
                        <div>{errors.companyEmployeeTotal}</div>
                    )}
                </div>
                <div className="grid w-full">
                    <label htmlFor="companyPhone">Teléfono empresa</label>
                    <input 
                        id="companyPhone"
                        type="phone"
                        name="companyPhone"
                        placeholder="Teléfono de contacto"
                        value={values.companyPhone}
                        onChange={handleChange}
                        className="border p-2 rounded-md"
                    />
                    {errors.companyPhone && touched.companyPhone && (
                        <div>{errors.companyPhone}</div>
                    )}
                </div>
            </div>
            <div className="grid">
                <label htmlFor="">Nueva contraseña</label>
                <input 
                    id="password"
                    type="text"
                    value={values.password}
                    onChange={handleChange}
                    className="border p-2 rounded-md"
                />
                {errors.password && touched.password && (
                    <div>{errors.password}</div>
                )}
            </div>
            <div>
                <button type="submit" className="bg-primary p-2 w-full rounded-md hover:opacity-75" disabled={isLoading}>Registrarme</button>
            </div>
        </form>
        </div>
    </div>
  )
}
