import React from 'react';
import "@/shared/ui/Neumorphic/styles.css";

interface Option {
	value: string;
	label: string;
}

interface GroupProps {
	options: Option[];
	selectedValues: string[];
	onChange: (value: string) => void;
}

const Group: React.FC<GroupProps> = ({ options, selectedValues, onChange }) => {
	return (
		<div className="flex flex-wrap gap-2">
			{options.map((option) => (
				<button
					key={option.value}
					type="button"
					className={`neumorphic p-2 ${selectedValues.includes(option.value) ? 'active' : ''}`}
					onClick={() => onChange(option.value)}
				>
					<input
						type="checkbox"
						value={option.value}
						checked={selectedValues.includes(option.value)}
						onChange={() => onChange(option.value)}
						className="hidden"
					/>
					<span className="text">{option.label}</span>
				</button>
			))}
		</div>
	);
};

export default Group;
