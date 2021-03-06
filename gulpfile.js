let gulp = require('gulp'), // require  это скрипт-загрузчик, который позволяет вставить ваш JavaScript код в файлы и модули, таким образом управляя зависимостью каждой модели
    sass = require('gulp-sass'), // подгружаем плагин gulp-sass
    rename = require('gulp-rename'), // плагин для переименования файлов
    browserSync = require('browser-sync'), // плагин для автообновления страницы браузера
    autoprefixer = require('gulp-autoprefixer'), // плагин для добавления вендерных префиксов в css свойства
    concat = require('gulp-concat'), // плагин для обединения js файлов
    uglify = require('gulp-uglify'), // плагин для минимизации js файлов
    cssmin = require('gulp-cssmin'); // плагин для минимизации css файлов

gulp.task('sass', () => {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass({ outputStyle: 'compressed' })) //переводим в css (минимизованным)
        .pipe(rename({ suffix: '.min' })) // добавит суфикс к имени файла
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 8 versions'] // вендерные префиксы для последних 8 версий браузера
        }))
        .pipe(gulp.dest('app/css')) // записываем в нужное место
        .pipe(browserSync.reload({ stream: true })); // для автообновления страницы в браузере
});

gulp.task('style', () => {
    return gulp.src([
            'node_modules/normalize.css/normalize.css',
            'node_modules/slick-carousel/slick/slick.css', // файли для объединения
            'node_modules/magnific-popup/dist/magnific-popup.css',
            'node_modules/jquery.formstyler/jquery.formstyler.css',
            'node_modules/rateyo/src/jquery.rateyo.css',
            'node_modules/ion-rangeslider/css/ion.rangeSlider.css',
            'node_modules/tooltipster/dist/css/tooltipster.bundle.css'
        ])
        .pipe(concat('libs.min.css')) // объединяем и называем
        .pipe(cssmin()) // минимизация css
        .pipe(gulp.dest('app/css')); // запись в нужное место
});

gulp.task('libs-script', () => {
    return gulp.src([
            'node_modules/slick-carousel/slick/slick.js', // файли для объединения
            'node_modules/magnific-popup/dist/jquery.magnific-popup.js',
            'node_modules/jquery.formstyler/jquery.formstyler.js',
            'node_modules/rateyo/src/jquery.rateyo.js',
            'node_modules/mixitup/dist/mixitup.js',
            'node_modules/ion-rangeslider/js/ion.rangeSlider.js',
            'node_modules/tooltipster/dist/js/tooltipster.bundle.js'
        ])
        .pipe(concat('libs.min.js')) // объединяем и называем
        .pipe(uglify()) // минимизация js
        .pipe(gulp.dest('app/js')); // запись в нужное место
});

gulp.task('main-script', () => {
    return gulp.src([
            'app/js/main.js'
        ])
        .pipe(concat('main.min.js')) // объединяем и называем
        .pipe(uglify()) // минимизация js
        .pipe(gulp.dest('app/js')); // запись в нужное место
});

gulp.task('html', () => {
    return gulp.src('app/*.html')
        .pipe(browserSync.reload({ stream: true })); // для автообновления страницы в браузере
});

gulp.task('browser-sync', () => { // https://www.browsersync.io
    browserSync.init({ // вертуальный сервер, можно смотреть по сети wi-fi по адресу http://192.168.0.103:3000
        server: {
            baseDir: "app/"
        }
    });
});

gulp.task('watch', () => { // для обновления файлов при изминении
    gulp.watch('app/scss/**/*.scss', gulp.parallel('sass')); // если *.scss измениться, запустить sass
    gulp.watch('app/*.html', gulp.parallel('html')); // если app/любой.html измениться, запустить task html
    gulp.watch('app/js/main.js', gulp.parallel('main-script', 'html')); // если aapp/js/main.оі измениться, запустить task main-script, 'html
});

gulp.task('default', gulp.parallel( // запуск по дефолту командой в консоли- gulp
    'sass',
    'style',
    'libs-script',
    'main-script',
    'watch',
    'browser-sync'
));