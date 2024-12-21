export interface Params {
	length: string;
	time?: string;
	height: string;
	lighting?: string;
	snow?: string;
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