# 🚀 Professional APK Generation & Hosting Guide

This guide ensures you can generate a standalone APK for **Target Integrated Solution Trading PLC** for direct distribution to your clients.

## 📦 1. Generating a Standalone APK
The APK (Android Package) is the file you give to users to install your app.

### Command to run:
```bash
cd ethio_telecom_app
flutter build apk --release --split-per-abi
```
*Note: Using `--split-per-abi` creates smaller files optimized for different phone types.*

### Output Location:
Your files will be in:
`ethio_telecom_app/build/app/outputs/flutter-apk/`

## 🌐 2. Hosting your APK for Download
If you want a "Download App" button on your website, follow these steps:

1.  **Rename the file:** Rename `app-release.apk` to `target-solution-v1.apk`.
2.  **Upload to your Host:** Place the file in your website's `public/downloads/` folder.
3.  **Link it:** In `LandingPage.tsx`, update the download button to link to `/downloads/target-solution-v1.apk`.

## 🏪 3. Play Store Deployment (The Official Way)
For a professional presence for **Target Integrated Solution**, follow these steps:

### A. Digital Signing (Crucial)
1. Run: `keytool -genkey -v -keystore ~/target-upload-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias upload`
2. Save the password securely.
3. Configure `android/key.properties`.

### B. Build App Bundle (.aab)
Google Play requires `.aab` files, not `.apk`.
```bash
flutter build appbundle
```

### C. Play Console Checklist
- [ ] Create Developer Account ($25)
- [ ] Complete "App Content" (Privacy Policy, Data Safety)
- [ ] Upload `.aab` to Production track.
- [ ] Submit for review (takes 2-7 days).

---

### 📞 Support for APK Building
If you are unable to build the APK locally, please contact the **Target Solution** technical team.
📧 **Email:** ethiopianappsale@gmail.com