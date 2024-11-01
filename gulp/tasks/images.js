import browsersync from "browser-sync";
import imagemin from "gulp-imagemin";

export const images = () => {
    return app.gulp.src(app.path.src.images, { encoding: false })
        .pipe(imagemin({
            verbose: true
        }))
        .pipe(app.gulp.dest(app.path.build.images))
        .pipe(browsersync.reload({stream: true}))
}