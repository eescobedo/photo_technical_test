"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Photo = void 0;
class Photo {
    constructor(id, title, url, thumbnailUrl, albumId) {
        this.id = id;
        this.title = title;
        this.url = url;
        this.thumbnailUrl = thumbnailUrl;
        this.albumId = albumId;
    }
}
exports.Photo = Photo;
