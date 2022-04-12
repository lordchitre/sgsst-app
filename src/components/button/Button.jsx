export const Button = ({ children, isLoading, type = "button", isDisabled }) => {
  return (
    <button
      type={type}
      className={`p-2 w-full rounded-md hover:opacity-75 ${
        isLoading ? "bg-gray-200" : "bg-primary"
      }`}
      disabled={isDisabled}
    >
      {isLoading ? "Cargando ..." : children }
    </button>
  );
};
