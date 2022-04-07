import { useState } from "react";
import { useFirebase } from "../hooks/useFirebase";
import { useFormik } from "formik";
import { useDispatch } from 'react-redux';

import { registerValidations, registerProps } from "../utils/forms.utils";
import { onAuthenticate } from '../redux/authSlice';

export const Register = () => {
  const [isLoading, setIsloading] = useState(false);
  const [isShowPassword, setShowPassword] = useState(false);
  const [isError, setIsError] = useState({
    state: false,
    message: null,
  });

  const { setCustomer } = useFirebase();
  const dispatch = useDispatch();

  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues: registerProps,
    validationSchema: registerValidations,
    onSubmit: (values) => {
      setIsloading(true);
      setCustomer(values)
        .then(() => {
          setIsloading(false);
          alert("client create successfully");
          dispatch(onAuthenticate(values));
          setIsError({ state: false })
        })
        .catch(() => {
          setIsloading(false);
          setIsError({
            state: true,
            message: "El usuario ya existe!"
          })
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
            <div className="grid gap-2 w-full">
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
                type="number"
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
          <div className="grid gap-2">
            <label htmlFor="password">Nueva contraseña</label>
            <div className="flex justify-between border rounded-md">
              <input
                id="password"
                type={isShowPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange}
                placeholder="Tu contraseña"
                className="peer placeholder-transparent p-2 w-full"
              />
              <label
                onClick={() => setShowPassword(!isShowPassword)}
                className="flex items-center bg-primary px-2 py-1 text-sm text-gray-600 font-mono cursor-pointer"
                htmlFor="toggle"
              >
                {isShowPassword ? "Ocultar" : "Mostrar"}
              </label>
            </div>
            {errors.password && touched.password && (
              <div>{errors.password}</div>
            )}
          </div>
          <p>{isError.state && isError.message}</p>
          <div>
            <button
              type="submit"
              className={`p-2 w-full rounded-md hover:opacity-75 ${
                isLoading ? "bg-gray-200" : "bg-primary"
              }`}
              disabled={isLoading}
            >
              {isLoading ? "Creando perfil ..." : "Registrarme"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
