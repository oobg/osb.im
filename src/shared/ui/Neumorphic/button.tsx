import "@/shared/ui/Neumorphic/styles.css";

interface NewmorphicButtonProps {
	children: React.ReactNode,
	className?: string,
	onClick?: () => void;
	type?: "button" | "submit" | "reset";
}

export default function Button({
	children, className = "", onClick, type = "button"
}: Readonly<NewmorphicButtonProps>) {
	const combinedClassName = `neumorphic ${className}`.trim();
	return (
		<>
			<button className={combinedClassName} onClick={onClick} type={type}>
				<span className="text">{children}</span>
			</button>
		</>
	);
}
