export default function Button({ children }) {
  return (
    <button type="submit" className="w-full text-white bg-blue-500 hover:bg-blue-600 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5">
      {children}
    </button>
  );
}