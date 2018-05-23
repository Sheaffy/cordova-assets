# Cordova Assets generator

Docker image to generate Cordova app icons and splash screen images.

## Generate splash screen images

Generates all necessary splash screen images (launch screen images) for Android and iOS. Supports PNG and JPG. Mount a directory on `/app` in the Docker container and specify the path where the source image can be found.

For example, mounting the current working directory:

```sh
$ docker run --rm -v "$(pwd):/app" leonderijke/cordova-assets splash splash.jpg
<platform name="ios">
  <splash src="/app/ios/Default@2x~universal~anyany.jpg" />
</platform>

<platform name="android">
  <splash density="land-ldpi" src="/app/android/drawable-land-ldpi/screen.jpg" />
  <splash density="land-mdpi" src="/app/android/drawable-land-mdpi/screen.jpg" />
  <splash density="land-hdpi" src="/app/android/drawable-land-hdpi/screen.jpg" />
  <splash density="land-xhdpi" src="/app/android/drawable-land-xhdpi/screen.jpg" />
  <splash density="land-xxhdpi" src="/app/android/drawable-land-xxhdpi/screen.jpg" />
  <splash density="land-xxxhdpi" src="/app/android/drawable-land-xxxhdpi/screen.jpg" />
  <splash density="port-ldpi" src="/app/android/drawable-port-ldpi/screen.jpg" />
  <splash density="port-mdpi" src="/app/android/drawable-port-mdpi/screen.jpg" />
  <splash density="port-hdpi" src="/app/android/drawable-port-hdpi/screen.jpg" />
  <splash density="port-xhdpi" src="/app/android/drawable-port-xhdpi/screen.jpg" />
  <splash density="port-xxhdpi" src="/app/android/drawable-port-xxhdpi/screen.jpg" />
  <splash density="port-xxxhdpi" src="/app/android/drawable-port-xxxhdpi/screen.jpg" />
</platform>
```

Inside the mounted directory you'll find the generated splash screen images. Warning: existing images will be overwritten.

The command outputs the paths to the generated images, which you can copy to your project's Cordova `config.xml`. Be sure to update the paths to the images to match your project structure.

## Generate app icons

Generate all necessary app icons for Android and iOS. Supports PNG.

```sh
$ docker run --rm -v "$(pwd):/app" leonderijke/cordova-assets icon icon.png
```

## License

MIT license.
