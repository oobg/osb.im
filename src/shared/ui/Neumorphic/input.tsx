import "@/shared/ui/Neumorphic/styles.css";

interface NewmorphicInputProps {
	type?: string,
	placeholder?: string,
	className?: string,
	value: string,
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
	onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export default function Input({
	type = "text", placeholder = "", className = "", value, onChange, onKeyPress,
}: Readonly<NewmorphicInputProps>) {
	const combinedClassName = `neumorphic ${className}`.trim();
	return (
		<input
			type={type}
			placeholder={placeholder}
			className={combinedClassName}
			value={value}
			onChange={onChange}
			onKeyPress={onKeyPress}
		/>
	);
}
