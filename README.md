# ionic-hmsPushKitDemo
An Ionic 3 demo that uses the [cordova-hms-push-kit](https://github.com/ikamaru/cordova-hms-push-kit)

## Getting Started
Add the android platform to your project
```
ionic cordova platform add android
```
Build the APK release according to the build configuration file **build.json**
```
ionic cordova build android --buildConfig=build.json --release
```
Plug your android phone into the computer's USB port and install the apk
```
adb install "platforms\android\app\build\outputs\apk\release\app-release.apk"
```

## Notes
If you want to use the [cordova-hms-push-kit](https://github.com/ikamaru/cordova-hms-push-kit) in your ionic project, you must :
 
* Generate a keystore file 
```
keytool -genkey -v -keystore my-release-key.keystore -alias alias_name -keyalg RSA -keysize 2048 -validity 10000
```
* Change the keystore info here **build.json**
* Sign in to [HUAWEI Developer](https://developer.huawei.com/consumer/en/console) then create a new app in HUAWEI AppGallery > My Apps.
* Run the following keytool command and obtain the SHA-256 fingerprint from the result
```
keytool -list -v -keystore my-release-key.keystore
```
* In AppGallery Connect, click the app that you have created and go to Develop -> Overview -> App information , then Insert the SHA-256 
* Enable the services
  * Develop > Overview, click the settings icon, and choose Manage APIs. Then Enable HUAWEI Push Kit.
  * Click the Develop tab and go to Growing > Push from the navigation bar on the left. Then Click Enable to change the status of HUAWEI Push Kit to Enabled.
* Download the **agconnect-services.json** file and put it in the root directory of your ionic project

### Add the plugin
* Add the plugin to your project
```
ionic cordova plugin add https://github.com/ikamaru/cordova-hms-push-kit
```
* Check [the plugin's doc](https://github.com/ikamaru/cordova-hms-push-kit#readme) or this [demo](https://github.com/ikamaru/ionic-hmsPushKitDemo) and enjoy your coding

These preparation steps are base on these [Preparations for Integrating HUAWEI HMS Core](https://developer.huawei.com/consumer/en/codelab/HMSPreparation/index.html#0) (I tried to choose what we will need in our ionic project and automate the other steps inside the plugin)
