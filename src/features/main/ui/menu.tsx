"use client";

import NewmorphicLink from "@/shared/ui/Neumorphic/link";

export default function menu() {
	return (
		<div className="flex gap-5">
			<NewmorphicLink href="/lunch">
				🍴
			</NewmorphicLink>
			<NewmorphicLink href="/kebo">
				⌨️
			</NewmorphicLink>
		</div>
	);
}
