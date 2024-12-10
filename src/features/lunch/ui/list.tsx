"use client";

import { useEffect, useState } from "react";
import Input from "@/shared/ui/Neumorphic/input";

interface ListProps {
	item?: string;
	onResetItem: () => void;
}

export default function List({ item, onResetItem }: ListProps) {
	const [randomItem, setRandomItem] = useState<string | undefined>("");

	const getRandomItem = (list: string[], currentItem: string | undefined): string => {
		if (list.length <= 1) return list[0];

		const maxLength = list.length;
		const random = Math.floor(Math.random() * maxLength);
		const temp = list[random];

		if (temp === currentItem) {
			return getRandomItem(list, currentItem);
		}
		return temp;
	};

	useEffect(() => {
		const list = lists.find((list) => list.name === item);
		if (list) {
			const newRandomItem = getRandomItem(list.list, randomItem);
			setRandomItem(newRandomItem);
			onResetItem();
		}
	}, [item]);

	return (
		<div className="flex flex-wrap gap-5 justify-center flex-col w-80">
			<Input
				className="text-center h-10"
				value={randomItem || ""}
				readOnly={true}
			/>
		</div>
	);
}

const lists = [
	{ name: "밥", list: ["국밥", "비빔밥", "볶음밥", "김밥", "초밥", "주먹밥", "덮밥"] },
	{ name: "국", list: ["된장국", "미역국", "맑은국", "부대찌개", "김치찌개", "순두부찌개", "육개장"] },
	{ name: "면", list: ["라면", "우동", "짜장면", "짬뽕", "볶음면", "냉면", "비빔면"] },
	{ name: "치킨", list: ["후라이드", "양념", "간장", "마늘", "허니", "반반", "통닭"] },
	{ name: "고기", list: ["불고기", "갈비", "삼겹살", "소갈비", "소불고기", "소갈비찜", "소불고기찜"] },
	{ name: "샐러드", list: ["케이준", "그린", "시저", "과일", "치킨", "새우", "통샐러드"] },
	{ name: "서브웨이", list: ["이탈리안", "비엘티", "풀드포크", "로스트치킨", "터키", "베지", "스테이크"] },
	{ name: "피자", list: ["페퍼로니", "치즈", "불고기", "포테이토", "햄", "피망", "피자헛"] },
	{ name: "버거", list: ["불고기", "치즈", "빅맥", "맥치킨", "1955", "맥스파이시", "맥플러리"] },
	{ name: "닫기", list: [] },
]
