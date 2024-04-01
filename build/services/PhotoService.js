"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhotoService = void 0;
const PhotoRepository_1 = require("../repositories/PhotoRepository");
const AlbumRepository_1 = require("../repositories/AlbumRepository");
const UserRepository_1 = require("../repositories/UserRepository");
const EnrichedPhoto_1 = require("../models/EnrichedPhoto");
class PhotoService {
    constructor() {
        this.photoRepository = new PhotoRepository_1.PhotoRepository();
        this.albumRepository = new AlbumRepository_1.AlbumRepository();
        this.userRepository = new UserRepository_1.UserRepository();
    }
    getPhotoDetails(photoId) {
        return __awaiter(this, void 0, void 0, function* () {
            const photo = yield this.photoRepository.getPhotoDetails(photoId);
            const album = yield this.albumRepository.getAlbumById(photo.albumId);
            const user = yield this.userRepository.getUserById(album.userId.toString());
            return {
                id: photo.id,
                title: photo.title,
                url: photo.url,
                thumbnailUrl: photo.thumbnailUrl,
                album: {
                    id: album.id,
                    title: album.title,
                    user
                }
            };
        });
    }
    getPhotosWithFilters(filters_1) {
        return __awaiter(this, arguments, void 0, function* (filters, limit = 25, offset = 0) {
            console.log('getPhotosWithFilters@PhotoService');
            const [photos, albums, users] = yield Promise.all([
                this.photoRepository.getAllPhotos(),
                this.albumRepository.getAllAlbums(),
                this.userRepository.getAllUsers()
            ]);
            let filteredPhotos = photos;
            if (filters.title) {
                filteredPhotos = filteredPhotos.filter(photo => photo.title && filters.title && photo.title.includes(filters.title));
            }
            if (filters.albumTitle) {
                filteredPhotos = filteredPhotos.filter(photo => {
                    const album = albums.find(album => album.id === photo.albumId);
                    if (album == null) {
                        throw new Error(`Album not found for photo with id ${photo.id}`);
                    }
                    return album.title && filters.albumTitle && album.title.includes(filters.albumTitle);
                });
            }
            if (filters.userEmail) {
                filteredPhotos = filteredPhotos.filter(photo => {
                    const album = albums.find(album => album.id === photo.albumId);
                    if (album == null) {
                        throw new Error(`Album not found for photo with id ${photo.id}`);
                    }
                    const user = users.find(user => user.id === album.userId);
                    if (user == null) {
                        throw new Error(`User not found for photo with id ${album.userId}`);
                    }
                    return user.email && filters.userEmail && user.email.includes(filters.userEmail);
                });
            }
            const paginatedPhotos = filteredPhotos.slice(offset, offset + limit);
            const enrichedPhotos = paginatedPhotos.map(photo => {
                const album = albums.find(album => album.id === photo.albumId);
                if (album == null) {
                    throw new Error(`Album not found for photo with id ${photo.id}`);
                }
                const user = users.find(user => user.id === album.userId);
                return new EnrichedPhoto_1.EnrichedPhoto(photo, album, user);
            });
            return enrichedPhotos;
        });
    }
}
exports.PhotoService = PhotoService;
