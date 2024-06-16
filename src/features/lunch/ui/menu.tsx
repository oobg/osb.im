"use client";

import Button from "@/shared/ui/Neumorphic/button";

interface MenuProps {
	emits: (item: string) => void;
}

export default function Menu({ emits }: MenuProps) {
	const onSubmit = (item: string) => {
		emits(item);
	};

	return (
		<div className="flex flex-wrap gap-5 justify-start w-80">
			{buttons.map((button, index) => (
				<Button
					key={index}
					className="w-16 h-16"
					onClick={() => onSubmit(button.item)}
				>
					{button.label}
				</Button>
			))}
		</div>
	);
}

const buttons = [
	{ label: "🍚", item: "밥" },
	{ label: "🍛", item: "국" },
	{ label: "🍜", item: "면" },
	{ label: "🍗", item: "치킨" },
	{ label: "🥩", item: "고기" },
	{ label: "🥗", item: "샐러드" },
	{ label: "🌯", item: "서브웨이" },
	{ label: "🍕", item: "피자" },
	{ label: "🍔", item: "버거" },
	{ label: "🚫", item: "닫기" },
];
