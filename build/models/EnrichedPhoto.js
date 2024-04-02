"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnrichedPhoto = void 0;
const Photo_1 = require("./Photo");
class EnrichedPhoto extends Photo_1.Photo {
    constructor(photo, album, user) {
        super(photo.id, photo.title, photo.url, photo.thumbnailUrl, photo.albumId);
        this.album = album;
        this.user = user;
    }
}
exports.EnrichedPhoto = EnrichedPhoto;
