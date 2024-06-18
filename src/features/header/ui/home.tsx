"use client";

import Image from "next/image";
import ALink from "@/shared/ui/Neumorphic/link";

export default function Home() {
	const image = "/logo-transparent.png";
	return (
		<div className="fixed top-3 left-3">
			<ALink href="/" className="w-12 h-12 rounded-full">
				<Image src={image} alt="go to home" width={30} height={30} />
			</ALink>
		</div>
	);
}
