"use client";

import ALink from "@/shared/ui/Neumorphic/link";

export default function Menu() {
	return (
		<div className="flex flex-wrap gap-5 justify-center">
			<ALink href="/lunch" className="w-24 h-24">
				🍴
			</ALink>
			<ALink href="/search/icon" className="w-24 h-24">
				🖼️
			</ALink>
		</div>
	);
}
