# Digital Marketplace Status

DM Status allows you to see which apps are running at any given time.

![screenshot](https://i.imgur.com/RUoV9il.png)

## Installation instructions
1. Download the latest release from https://github.com/DilwoarH/digitalmarketplace-status/releases
2. Uncompress file
3. Copy ``<uncompressed_folder>/DM-STATUS-darwin-x64/DM-Status.app`` > ``/Applications``
4. Open ``/Applications/DM-Status.app``
5. You should now see a "cat" icon on your toolbar, next to you time.


# Developer Guide
----

## init

`npm install;  
npm install -g electron;
`

## run app
`electron .`

## package application
`npm install -g electron-packager;  
electron-packager . DM-STATUS --electronVersion 1.4.13;`

