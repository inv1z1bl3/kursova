import gulp from "gulp";
import { path } from "./gulp/config/path.js";
import { reset } from "./gulp/tasks/reset.js";
import { server } from "./gulp/tasks/server.js";
import { html } from "./gulp/tasks/html.js";
import { css } from "./gulp/tasks/css.js";
import { scss } from "./gulp/tasks/scss.js";
import { scripts } from "./gulp/tasks/scripts.js";
import { images } from "./gulp/tasks/images.js";
import { plugins } from "./gulp/config/plugins.js";

global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins
}

function watcher() {
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.css, css);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, scripts);
    gulp.watch(path.watch.images, images);
}

const mainTasks = gulp.parallel(html, css, scss, scripts, images);

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));

gulp.task('default', dev)