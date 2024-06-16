import "@/shared/ui/Neumorphic/styles.css";

interface NewmorphicButtonProps {
	children: React.ReactNode,
	className?: string,
	onClick?: () => void;
}

export default function Button({
	children, className = "", onClick,
}: Readonly<NewmorphicButtonProps>) {
	const combinedClassName = `neumorphic ${className}`.trim();
	return (
		<>
			<button className={combinedClassName} onClick={onClick}>
				<span className="text">{children}</span>
			</button>
		</>
	);
}
