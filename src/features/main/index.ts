import dynamic from 'next/dynamic';

const MainLogo = dynamic(() => import("./ui/logo"));
const MainMenu = dynamic(() => import("./ui/menu"));

export {
	MainLogo,
	MainMenu,
};