import dynamic from 'next/dynamic';

const SearchIcon = dynamic(() => import("./ui/icon"));

export {
	SearchIcon,
};