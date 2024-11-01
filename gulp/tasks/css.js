import browserSync from "browser-sync"
import GulpCleanCss from "gulp-clean-css"
import rename from "gulp-rename"
import strip from "gulp-strip-comments"

export const css = () => {
    return app.gulp.src(app.path.src.css)
        .pipe(rename({
            extname: ".min.css"
        }))
        .pipe(strip.text())
        .pipe(GulpCleanCss({
            level: 2,
        }))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(browserSync.reload({stream: true}))
}