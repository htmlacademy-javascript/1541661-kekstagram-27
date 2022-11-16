import {getUserPosts} from './data.js';
import {renderUserPhotos} from './create-pictures.js';
import {renderUploadForm} from './edit-form.js';

getUserPosts();
renderUserPhotos();
renderUploadForm();
