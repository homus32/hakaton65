export interface Params {
	length: string;
	time?: string;
	height: string;
	lighting?: string;
	snow?: string;
	color: string;
}

export interface Track {
	name: string;
	number: string;
	params: Params;
	status: string;
	updated_at: string;
}

export interface Label {
	icon: string;
	text: string;
}

export const TRACK_COLORS = {
	EASY: '#429867',    // Зеленый - простой
	DIFFICULT: '#cd0b0b', // Красный - сложный
	VERY_DIFFICULT: '#000' // Черный - очень сложный
} as const;