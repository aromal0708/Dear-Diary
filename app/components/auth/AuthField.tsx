type AuthFieldProps = {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
};

export function AuthField({
  label,
  name,
  type,
  placeholder,
  autoComplete,
  required = false,
}: AuthFieldProps) {
  return (
    <label className="text-sm text-neutral-700">
      <span className="font-medium text-neutral-800 mb-1">{label}</span>
      <input
        className="mb-2 w-full rounded-md border border-neutral-900/10 bg-white/80 px-4 py-3 text-sm text-neutral-900 shadow-sm focus:border-emerald-900/40 focus:outline-none focus:ring-2 focus:ring-emerald-900/20"
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
      />
    </label>
  );
}
