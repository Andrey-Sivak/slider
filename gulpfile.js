const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const webpack = require('webpack-stream');

let isDev = true;
let isProd = !isDev;

let webpackConfig = {
    output: {
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/' //исключения
            }
        ]
    },
    mode: isDev ? 'development' : 'production'
};

function styles() {
    return gulp.src('./css/**/*.css')
        .pipe(browserSync.stream());
}

function scripts() {
    return gulp.src('./js/main-script.js')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream());
}


function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }//,
        //proxy: 'test',
        //tunnel: true
    });
    gulp.watch('./css/**/*.css', styles);
    gulp.watch('./js/**/*.js', scripts);
    gulp.watch('./*.html', html);
}

function html() {
    return gulp.src('*.html')
        .pipe(browserSync.stream());
}

gulp.task('styles', styles);
gulp.task('watch', watch);

let build = gulp.parallel(styles, scripts, html);

gulp.task('build', build);
gulp.task('dev', gulp.series('build', 'watch'));
