export default function Button({ children, ...props }) {
  return (
    <button
      className="px-4 py-2 font-semibold uppercase rounded text-stone-900 bg-red-400 hover:bg-red-500"
      {...props}
    >
      {children}
    </button>
  );
}
