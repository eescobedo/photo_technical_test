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
const express_1 = require("express");
const PhotoController_1 = require("../controllers/PhotoController");
const router = (0, express_1.Router)();
const photoController = new PhotoController_1.PhotoController();
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () { return yield photoController.getPhotosWithFilters(req, res); }));
router.get('/:photoId', (req, res) => __awaiter(void 0, void 0, void 0, function* () { return yield photoController.getPhotoDetails(req, res); }));
exports.default = router;
