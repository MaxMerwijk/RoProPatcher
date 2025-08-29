# RoPro Patcher
This automatically patches the [RoPro](https://chrome.google.com/webstore/detail/ropro-enhance-your-roblox/adbacgifemdbhdkfppmeilbgppmhaobf?hl=en-GB) extension for you, allowing you to have `pro_tier` for free.

This is **not** a stealer of any sort. You can view all of the code on here and see that it is safe. If you have any issues / features not working, please look at the [note](#note)

![Preview of the user interface](preview.png)

## ⚠️ Current Status (2025)

**This patcher has known issues and may not work reliably:**

1. **Proxy servers are down** - The listed proxies in `proxies.txt` are no longer functional
2. **Incomplete API coverage** - The original patcher only covered 5 API endpoints, but RoPro uses many more
3. **Extension updates** - RoPro may have changed their API since this patcher was created

## ✅ Recent Fixes

- **Fixed regex pattern** to cover ALL RoPro API endpoints instead of just 5
- **Updated proxy list** (you'll need to find working proxies)
- **Improved patching logic** to handle more URL patterns

## Requirements

- **Working proxy servers** that forward requests to `api.ropro.io` with proper headers
- **Updated proxies.txt** with functional proxy URLs

## Links

1. ~~[Video tutorial (v1.1.4 and below)](https://www.youtube.com/watch?v=Do1X2COTq_8)~~ Striked down
2. [Video tutorial (v2.0.0 and above)](https://cdn.discordapp.com/attachments/1131228889113432166/1131230523390439424/Sequence_01.mp4)
3. [V3rmillion thread](https://v3rmillion.net/showthread.php?tid=1197674)

## NOTE

If you have any issues / feautres not working, please visit the current open issues [here](https://github.com/Stefanuk12/RoProPatcher/issues).

## Documentation

You can view all of the documentation [here](./docs/), make sure to read any [notices above](#note) too.

1. [Automatic download](./docs/auto_download.md)
2. [Manual download](./docs/manual_download.md)
3. [Installing](./docs/installing.md)
4. [Verification token](./docs/verification_token.md)
