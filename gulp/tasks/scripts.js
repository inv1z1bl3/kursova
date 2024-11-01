import browsersync from "browser-sync"

export const scripts = () => {
    return app.gulp.src(app.path.src.js)
        .pipe(app.gulp.dest(app.path.build.js))
        .pipe(browsersync.reload({stream: true}))
}