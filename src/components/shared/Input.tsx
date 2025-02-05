interface InputProps {
  label: string;
  value: string;
  type?: "text" | "password" | "email";
  onChange?: (value: string) => void;
  disabled?: boolean;
}

const Input = ({
  label,
  value,
  type = "text",
  onChange,
  disabled = false,
}: InputProps) => {
  return (
    <div>
      <label className="block text-primaryBlack mb-2 text-left text-[13px] lg:text-base">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={disabled}
        className="w-full p-2 border border-grey rounded-lg focus:outline-none focus:ring-2 text-primaryBlue text-xs lg:text-base"
      />
    </div>
  );
};

export default Input;
