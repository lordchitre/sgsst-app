import { useRegister } from "../hooks/useRegister";
import { Button } from "../components/button/Button";

export const Register = () => {
  const {
    formikSubmit,
    formikValues,
    formikOnChange,
    formikTouched,
    formikErrors,
    isShowPassword,
    isLoading,
    isError,
    setShowPassword,
  } = useRegister();

  const buttonSubmitProps = {
    isLoading,
    isDisabled: isLoading,
    type: "submit",
  };

  return (
    <div className="px-6 mt-5">
      <div className="xl:px-96">
        <p className="font-bold text-3xl">Registrarme como empresa</p>
        <form onSubmit={formikSubmit} className="grid gap-3 mt-5">
          <div className="grid gap-2">
            <label htmlFor="companyName">Nombre empresa</label>
            <input
              id="companyName"
              type="text"
              name="companyName"
              placeholder="Nombre legal de la empresa"
              className="border p-2 rounded-md"
              value={formikValues.companyName}
              onChange={formikOnChange}
            />
            {formikErrors.companyName && formikTouched.companyName && (
              <div>{formikErrors.companyName}</div>
            )}
          </div>
          <div className="grid gap-2">
            <label htmlFor="contactName">Nombre de contacto</label>
            <input
              id="contactName"
              type="text"
              name="contactName"
              placeholder="Nombre de responsable"
              value={formikValues.contactName}
              onChange={formikOnChange}
              className="border p-2 rounded-md"
            />
            {formikErrors.contactName && formikTouched.contactName && (
              <div>{formikErrors.contactName}</div>
            )}
          </div>
          <div className="grid gap-2">
            <label htmlFor="companyEmail">Correo de contacto</label>
            <input
              id="companyEmail"
              type="email"
              name="companyEmail"
              placeholder="Correo de contacto"
              value={formikValues.companyEmail}
              onChange={formikOnChange}
              className="border p-2 rounded-md"
            />
            {formikErrors.companyEmail && formikTouched.companyEmail && (
              <div>{formikErrors.companyEmail}</div>
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
                value={formikValues.companyEmployeeTotal}
                onChange={formikOnChange}
                className="border p-2 rounded-md"
              />
              {formikErrors.companyEmployeeTotal &&
                formikTouched.companyEmployeeTotal && (
                  <div>{formikErrors.companyEmployeeTotal}</div>
                )}
            </div>
            <div className="grid w-full">
              <label htmlFor="companyPhone">Teléfono empresa</label>
              <input
                id="companyPhone"
                type="number"
                name="companyPhone"
                placeholder="Teléfono de contacto"
                value={formikValues.companyPhone}
                onChange={formikOnChange}
                className="border p-2 rounded-md"
              />
              {formikErrors.companyPhone && formikTouched.companyPhone && (
                <div>{formikErrors.companyPhone}</div>
              )}
            </div>
          </div>
          <div className="grid gap-2">
            <label htmlFor="password">Nueva contraseña</label>
            <div className="flex justify-between border rounded-md">
              <input
                id="password"
                type={isShowPassword ? "text" : "password"}
                value={formikValues.password}
                onChange={formikOnChange}
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
            {formikErrors.password && formikTouched.password && (
              <div>{formikErrors.password}</div>
            )}
          </div>
          <p>{isError.state && isError.message}</p>
          <div>
            <Button {...buttonSubmitProps}>Registrarme</Button>
          </div>
        </form>
      </div>
    </div>
  );
};
