"use client";

import { useState } from "react";
import LunchMenu from "./menu";
import LunchList from "./list";

export default function Lunch() {
	const [item, setItem] = useState<string>("");
	const selectedItem = (item: string) => setItem(item);
	const resetItem = () => setItem("");
	return (
		<>
			<LunchMenu emits={selectedItem} />
			<LunchList item={item} onResetItem={resetItem} />
		</>
	)
}