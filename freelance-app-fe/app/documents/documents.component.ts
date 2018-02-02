import { Component } from '@angular/core';
import { Document } from './document';

@Component({
	moduleId: module.id,
	selector: 'documents',
	templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
	documents: Document[] = [
	{
		title: "My First Doc",
		description: "asdfasdf asdfasdf",
		file_url: 'http://google.com',
		updated_at: '02/01/18',
		image_url: 'http://google.com'
	},
	{
		title: "My Second Doc",
		description: "asdfasdf asdfasdf",
		file_url: 'http://google.com',
		updated_at: '02/01/18',
		image_url: 'http://google.com'
	},
	{
		title: "My Third Doc",
		description: "asdfasdf asdfasdf",
		file_url: 'http://google.com',
		updated_at: '02/01/18',
		image_url: 'http://google.com'
	}
	]
}