import "@/shared/ui/Neumorphic/styles.css";

interface NeumorphicSelectProps {
	options: { value: string; label: string }[];
	placeholder?: string;
	className?: string;
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void | undefined;
	readOnly?: boolean;
}

export default function Select({
	 options, placeholder = "", className = "", value, onChange, readOnly = false,
}: Readonly<NeumorphicSelectProps>) {
	const combinedClassName = `neumorphic ${className}`.trim();
	return (
		<select
			className={combinedClassName}
			value={value}
			onChange={onChange}
			disabled={readOnly}
		>
			<option value="" disabled>
				{placeholder}
			</option>
			{options.map((option) => (
				<option key={option.value} value={option.value}>
					{option.label}
				</option>
			))}
		</select>
	);
}
