import Link from 'next/link';
import "@/shared/ui/Neumorphic/styles.css";

interface NewmorphicLinkProps {
	children: React.ReactNode,
	className?: string,
	href: string,
}

export default function ALink({
	children, className = "", href,
}: Readonly<NewmorphicLinkProps>) {
	const combinedClassName = `neumorphic ${className}`.trim();
	return (
		<>
			<Link href={href} className={combinedClassName}>
				<span className="text">{children}</span>
			</Link>
		</>
	);
}
