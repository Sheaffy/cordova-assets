# Cordova Assets generator

Docker image to generate Cordova app icons and splash screen images.

## Generate splash screen images

Generates all necessary splash screen images (launch screen images) for Android and iOS. Supports PNG and JPG. Mount a directory on `/app` in the Docker container and specify the path where the source image can be found (absolute path inside container).

For the best results, use an image of size 2732x2732px.

For example, mounting the current working directory:

```sh
$ docker run --rm -v "$(pwd):/app" leonderijke/cordova-assets splash /app/splash.jpg
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

Generate all necessary app icons for Android and iOS. Supports PNG. For the best results, use an image of size 2048x2048 or 1024x1024px.

Mount a directory on `/app` in the Docker container and specify the path where the source image can be found (absolute path inside container). For example, mounting the current working directory:

```sh
$ docker run --rm -v "$(pwd):/app" leonderijke/cordova-assets icon /app/icon.png
<platform name="ios">
  <icon src="/app/ios/icon.png" width="57" height="57" />
  <icon src="/app/ios/icon@2x.png" width="114" height="114" />
  <icon src="/app/ios/icon-40.png" width="40" height="40" />
  <icon src="/app/ios/icon-40@2x.png" width="80" height="80" />
  <icon src="/app/ios/icon-50.png" width="50" height="50" />
  <icon src="/app/ios/icon-50@2x.png" width="100" height="100" />
  <icon src="/app/ios/icon-60.png" width="60" height="60" />
  <icon src="/app/ios/icon-60@2x.png" width="120" height="120" />
  <icon src="/app/ios/icon-60@3x.png" width="180" height="180" />
  <icon src="/app/ios/icon-72.png" width="72" height="72" />
  <icon src="/app/ios/icon-72@2x.png" width="144" height="144" />
  <icon src="/app/ios/icon-76.png" width="76" height="76" />
  <icon src="/app/ios/icon-76@2x.png" width="152" height="152" />
  <icon src="/app/ios/icon-small.png" width="29" height="29" />
  <icon src="/app/ios/icon-small@2x.png" width="58" height="58" />
  <icon src="/app/ios/icon-small@3x.png" width="87" height="87" />
</platform>

<platform name="android">
  <icon density="ldpi" src="/app/android/drawable-ldpi/icon.png" />
  <icon density="mdpi" src="/app/android/drawable-mdpi/icon.png" />
  <icon density="hdpi" src="/app/android/drawable-hdpi/icon.png" />
  <icon density="xhdpi" src="/app/android/drawable-xhdpi/icon.png" />
  <icon density="xxhdpi" src="/app/android/drawable-xxhdpi/icon.png" />
  <icon density="xxxhdpi" src="/app/android/drawable-xxxhdpi/icon.png" />
</platform>
```

Inside the mounted directory you'll find the generated icons. Warning: existing images will be overwritten.

The command outputs the paths to the generated images, which you can copy to your project's Cordova `config.xml`. Be sure to update the paths to the images to match your project structure.

## Motivation

> Why yet another splash screen and app icon generator?

Great question :smile:. There were a couple of reasons to create this:

1. Existing command line tools like [Ionic Cordova Resources](https://ionicframework.com/docs/cli/cordova/resources/) require a Ionic account.
2. Existing command line tools like [cordova-splash](https://github.com/AlexDisler/cordova-splash) only support PNG and only work inside a real Cordova project.
3. Online tools like [Image Gorilla](https://apetools.webprofusion.com/app/#/tools/imagegorilla) and [Resource Generator](https://www.resource-generator.com/) only support PNG.

For photo-like splash screen images it makes sense to use JPG instead of PNG. Device support is pretty good, in my experience.

So, in the end, I _just_ wanted to resize some JPG images. Therefore I created this.

## License

MIT license.
