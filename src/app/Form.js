"use client";
export default function Form({ children, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="max-w-sm mx-auto mt-8 mb-4 p-8 bg-white rounded-lg shadow-lg">
      {children}
    </form>
  );
}