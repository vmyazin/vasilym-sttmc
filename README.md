# vasilym-sttmc
Blog of Vasily M based on Statamic CMS

## Installation
1. Clone the repo: `git clone git@github.com:vmyazin/vasilym-sttmc.git`
2. Copy the .env.example to .env: `cp .env.example .env`
3. Generate app key: `php artisan key:generate`
4. Install composer: `composer install`
5. Install npm dependencies: `npm install`
6. For production, compile the basic frontend files: `npm run prod`

## Development
1. Run for development: `php artisan serve`
2. Compile the basic frontend files and watch for changes: `npm run watch`

## Compiling CSS
To compile the SCSS files into CSS, follow these steps:
1. Make sure you have installed the npm dependencies: `npm install`
2. Run the CSS compilation command: `npm run dev`

This will compile the SCSS files located in the `resources/scss` directory and output the compiled CSS to the `public/css` directory. If you want to compile the CSS for production, use the `npm run prod` command instead.
