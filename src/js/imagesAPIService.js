import axios from 'axios';
import SimpleLightbox from 'simplelightbox';

import { PER_PAGE } from '../index';

export default class imagesAPIService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.totalHits = 0;
  }

  async getImages() {
    const url = 'https://pixabay.com/api/?key=24356494-65e5de300274261a131c8d68e';

    const images = await axios.get(
      `${url}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=${PER_PAGE}`,
    );

    this.totalHits = images.data.totalHits;

    return images;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  createGallery() {
    this.gallery = new SimpleLightbox('.gallery a');
  }

  updateGallery() {
    this.gallery.refresh();
  }
}
