import "@/shared/ui/Neumorphic/styles.css";

interface NewmorphicInputProps {
	type?: string,
	placeholder?: string,
	className?: string,
	value?: string | undefined,
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
	onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
	readOnly?: boolean,
	checked?: boolean;
}

export default function Input({
	type = "text", placeholder = "", className = "", value, onChange, onKeyDown, readOnly = false, checked
}: Readonly<NewmorphicInputProps>) {
	const combinedClassName = `neumorphic ${className}`.trim();
	return (
		<input
			type={type}
			placeholder={placeholder}
			className={combinedClassName}
			value={value}
			onChange={onChange}
			onKeyDown={onKeyDown}
			readOnly={readOnly}
			checked={checked}
		/>
	);
}
