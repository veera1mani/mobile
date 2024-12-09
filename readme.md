    // "alphabetical-scroll-bar": "^2.1.2",


    For ios========================

For audio recording===========
<key>NSMicrophoneUsageDescription</key>
<string>We need access to the microphone to record audio</string>
==============
For location==============
<key>NSLocationWhenInUseUsageDescription</key>
<string>We need your location to show you nearby places.</string>
<key>NSLocationAlwaysUsageDescription</key>
<string>We need your location for full functionality of the app.</string>
==============



For Android 
===========
<uses-permission android:name="android.permission.RECORD_AUDIO" />
  <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
  <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
  <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
  <uses-feature android:name="android.hardware.location.gps" />