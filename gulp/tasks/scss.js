import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import GulpCleanCss from "gulp-clean-css";
import strip from "gulp-strip-comments";
import rename from 'gulp-rename';
import browserSync from "browser-sync";

const sass = gulpSass(dartSass);

export const scss = () => {
    return app.gulp.src(app.path.src.scss, { sourcemaps: true })
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(strip.text())
        .pipe(GulpCleanCss({
            level: 2,
        }))
        .pipe(rename({
            extname: ".min.css"
        }))
        .pipe(app.gulp.dest(app.path.build.scss))
        .pipe(browserSync.reload({stream: true}))
}