import { watch } from 'fs';
import { src } from 'gulp';
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./docs`;
const srcFolder = `./src`;

export const path = {
    build: {
        html: `${buildFolder}/`,
        css: `${buildFolder}/css`,
        scss: `${buildFolder}/css`,
        js: `${buildFolder}/js/`,
        images: `${buildFolder}/images`,
    },
    src: {
        html: `${srcFolder}/*.html`,
        css: `${srcFolder}/assets/css/*.css`,
        scss: `${srcFolder}/assets/css/**/*.scss`,
        js: `${srcFolder}/assets/js/**/*.js`,
        images: `${srcFolder}/assets/images/**/*.*`,
    },
    watch: {
        html: `${srcFolder}/**/*.html`,
        css: `${srcFolder}/assets/css/**/*.css`,
        scss: `${srcFolder}/assets/css/sass/**/*.scss`,
        js: `${srcFolder}/assets/js/**/*.js`,
        images: `${srcFolder}/assets/images/**/*.*`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
}