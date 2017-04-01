// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var htmlReplace = require('gulp-html-replace');
var ts = require('gulp-typescript');

var tsProject = ts.createProject('tsconfig.json', {
  typescript: require('typescript'),
  outFile: 'app.js'
});

gulp.task('tscompile', function () {
  var tsResult = gulp.src(['node_modules/angular2/typings/browser.d.ts', 'app/**/*.ts'])
                     .pipe(tsProject());

  return tsResult.js.pipe(concat('app.min.js'))
                    .pipe(uglify())
                    .pipe(gulp.dest('dist_test'));
});

gulp.task("libs", () => {
  return gulp.src([
          // 'core-js/client/shim.min.js',
          // 'zone.js/dist/zone.js',
          // 'reflect-metadata/Reflect.js',
          // 'systemjs/dist/system.src.js',
          'jquery/dist/jquery.min.js',
          'bootstrap/dist/js/bootstrap.min.js'

      ], {cwd: "node_modules/**"})
      .pipe(concat('vendors.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest("dist/lib"));
});

gulp.task('boot-bundle', function() {
  gulp.src('config.prod.js')
    .pipe(concat('boot.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
 });

 gulp.task('html', function() {
  gulp.src('index.html')
    .pipe(htmlReplace({
      'vendor': 'vendors.min.js',
      'app': 'app.min.js',
      'boot': 'boot.min.js'
    }))
    .pipe(gulp.dest('dist'));
});

// Lint Task
gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile and concat Sass
gulp.task('sass', function() {
    return gulp.src('app/**/*.scss')
        .pipe(concat('styles.scss'))
        .pipe(sass())
        .pipe(gulp.dest('.tmp'));
});

// Minify the generated styles.css
gulp.task('minify-css', function() {
    return gulp.src([
          'node_modules/bootstrap/dist/css/bootstrap.css',
          '.tmp/styles.css'
        ])
        .pipe(concat('styles.css'))
        .pipe(cleanCSS({debug: true}, function(details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        }))
        .pipe(rename('styles.min.css'))
        .pipe(gulp.dest('dist'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['lint', 'scripts']);
    gulp.watch('app/**/*.scss', ['sass', 'minify-css']);
});

// Default Task
gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);
