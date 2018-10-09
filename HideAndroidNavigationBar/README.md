
# react-native-hide-android-navigation-bar

## Getting started

`$ npm install react-native-hide-android-navigation-bar --save`

### Mostly automatic installation

`$ react-native link react-native-hide-android-navigation-bar`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-hide-android-navigation-bar` and add `RNHideAndroidNavigationBar.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNHideAndroidNavigationBar.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNHideAndroidNavigationBarPackage;` to the imports at the top of the file
  - Add `new RNHideAndroidNavigationBarPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-hide-android-navigation-bar'
  	project(':react-native-hide-android-navigation-bar').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-hide-android-navigation-bar/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-hide-android-navigation-bar')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNHideAndroidNavigationBar.sln` in `node_modules/react-native-hide-android-navigation-bar/windows/RNHideAndroidNavigationBar.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Hide.Android.Navigation.Bar.RNHideAndroidNavigationBar;` to the usings at the top of the file
  - Add `new RNHideAndroidNavigationBarPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNHideAndroidNavigationBar from 'react-native-hide-android-navigation-bar';

// TODO: What to do with the module?
RNHideAndroidNavigationBar;
```
  