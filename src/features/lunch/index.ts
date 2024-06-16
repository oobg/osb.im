import dynamic from 'next/dynamic';

const Lunch = dynamic(() => import("./ui"));

export {
	Lunch,
};