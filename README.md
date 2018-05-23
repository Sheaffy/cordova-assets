# Cordova Assets generator

Docker image to generate Cordova app icons and splash screen images.

## Usage

Generate all necessary splash screen images (launch screen images) for Android and iOS. Supports PNG and JPG.

```sh
docker run --rm -v "$(pwd):/app" leonderijke/cordova-assets splash path/to/splash.jpg
```

Generate all necessary app icons for Android and iOS. Supports PNG.

```sh
docker run --rm -v "$(pwd):/app" leonderijke/cordova-assets icon path/to/icon.png
```

## License

MIT license.
