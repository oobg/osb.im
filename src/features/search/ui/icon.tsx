"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Input from "@/shared/ui/Neumorphic/input";
import Button from "@/shared/ui/Neumorphic/button";
import Url from "@/shared/api/url";

export default function SearchIcon() {
	const src = "/google.logo.png";
	const [query, setQuery] = useState("");

	const search = useCallback(() => {
		const q = query.trim() || "osb.im";
		const url = Url.searchImage(q);
		window.open(url, "_blank");
	}, [query]);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value);
	const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => e.key === "Enter" && search();

	return (
		<div className="flex flex-wrap flex-col gap-10 justify-center items-center w-80">
			<Image
				src={src}
				alt="google logo"
				width={200}
				height={200}
				className="object-cover h-20"
			/>
			<div className="flex flex-wrap w-80 gap-2">
				<Input
					className="text-center h-12 flex-grow"
					placeholder="이미지 검색"
					value={query}
					onChange={handleInputChange}
					onKeyPress={handleKeyPress}
				/>
				<Button onClick={search}>🔍</Button>
			</div>
		</div>
	);
}