import browsersync from "browser-sync"

export const html = () => {
    return app.gulp.src(app.path.src.html)
        .pipe(app.gulp.dest(app.path.build.html))
        .pipe(browsersync.reload({stream: true}))
}