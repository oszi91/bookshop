export interface book {
	id: number;
	author: string;
	cover_url: string;
	pages: string;
	title: string;
}

export interface bookInCart extends book {
	quantity: number;
}

