# PowTrack

PowTrack is a mobile app developed with React Native that helps you track your own personal records for powerlifting big 3 (Squat, Bench and Deadlift) lifts and also the paused versions. This app is ideal for linear programs specially for Candito's linear program. Even do it has been developed using React Native and as a result there is an Android/iOS version, it has only been fully tested in Android. PowTrack uses Firebase to handle Google sign in and also Google drive/sheets as a database, this means that all data displayed in the app can also be modify and view in a Google Spreadsheet named POWTRACK_SPREADSHEET_FILE created by the app.

PowTrack its in [Google Play](https://play.google.com/store/apps/details?id=com.powtrack)

## Screenshots

### App

![PowTrack1](https://image.ibb.co/kh3oh8/powtrack1.png)

### Spreadsheet

![PowTrack2](https://image.ibb.co/hjoM28/powtrack2.png)

## Requirements

You need a two files to make the android app run: google-services.json and .env

#### google-services.json

Is a JSON file provided by Firebase when you create a new android app.


If you need help with this step you can refer to [this guide](https://github.com/react-native-community/react-native-google-signin/blob/master/get-config-file.md)

#### .env

File located in the root directory of the project that contains the web client id provided in google console. 

```
WEB_CLIENT_ID=654935199294-7325kdqclmface0aeu4j8rp6s28kq6gt.apps.googleusercontent.com
```

## Building project

Run the following command

```
yarn install
```

## Running project

Start react-native

```
react-native start
```

In another terminal start android

```
react-native run-android
```

To reload android app when making new changes run the following command

```
adb shell input text "RR"
```

## License

MIT
