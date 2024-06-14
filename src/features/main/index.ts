import dynamic from 'next/dynamic';

const MainMenu = dynamic(() => import("./ui/menu"));

export {
	MainMenu,
};