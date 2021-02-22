# VueTube Front

> This is the frontend (VueJS) of the VueTube clone

### Originally developed by Reagan Ekhameye (Tech Reagan)

Reach him on twitter [@techreagan](https://www.twitter.com/techreagan)

My goal here is essentially to rewrite his repo with modern techs (notably buildless Vue3 in front, and FoalTS, typescript and postgresql in serverside)

## API

Backend RESTFUL API Repository [API](https://github.com/Sharlaan/Vuetube-api)

## Features

- Sign in / Sign Up to create channel
- Video
  - Upload video
  - Upload video thumbnail
  - Watch video
  - Increase Views
  - Like and dislike video
  - Download video
  - Comment & reply for video
  - Update video details
  - Delete video
- Subscribe to a channel
- View liked videos
- Trending
- Subscriptions
- History
  - Watch history
  - Search history
- Settings
  - Modify channel name and email
  - Change password
  - Upload channel avatar

## Tech Stack
- Vue3 (composition API)
- VueX (hooks)
- Vue-Router
- Vite
- Typescript (strict)
- ESLint/Prettier/StyleLint
- PostCSS (instead of SASS, with same functionalities, via plugins), and SASS-like theming
- ElementPlus (only Vue3-compatible CSS framework at time of writing)
- Native fetch wrapped as useFetch hook with  integrated auth token / queries / timeout / global loading
- OAuth2 Authentication/autorization with 5mins-refreshed signed token
- Architecture as feature modules (instead of /components, /pages, /store, ...)
- Recommended VSCode extensions

## Project setup

Create .env.development.local for development then .env.production.local for production ready app.
Then put in your api URL

```env
VUE_APP_URL=http://localhost:3001
```

### Install packages

```sh
yarn
```

### Compiles and hot-reloads for development

```sh
yarn dev
```

### Compiles and minifies for production

```sh
yarn build
```

### Lints and fixes files

```sh
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Screenshots

> Delete the screenshot folder if you download this code (Screenshots folder is 3.14mb in size).

### Sign In (/signin)

![Screenshot](assets/screenshots/20%20-%20Sign%20in.jpg)

### Sign Up (/signup)

![Screenshot](assets/screenshots/21%20-%20Sign%20up.jpg)

### Home Page (/)

![Screenshot](assets/screenshots/1%20-%20Home.jpg)

### Trending Page (/trending)

![Screenshot](assets/screenshots/2%20-%20Trending.jpg)

### Subscriptions Page (/subscriptions)

![Screenshot](assets/screenshots/3%20-%20Subscriptions.jpg)

### History (Watch) Page (/history)

![Screenshot](assets/screenshots/4%20-%20Watch%20History.jpg)

### History (Search) Page (/history)

![Screenshot](assets/screenshots/5%20-%20Search%20History.jpg)

### Liked Videos Page (/liked-videos)

![Screenshot](assets/screenshots/6%20-%20Liked%20Videos.jpg)

### Search Page (/search)

![Screenshot](assets/screenshots/19%20-%20Search.jpg)

### Watch Page (/watch/:videoId)

![Screenshot](assets/screenshots/7%20-%20Watch.jpg)

### Comment & Reply (/watch/:videoId)

![Screenshot]assets/(screenshots/8%20-%20Comment%20-%20Reply.jpg)

### Channel Page (/channels/:channelId)

![Screenshot](assets/screenshots/9%20-%20Channel.jpg)

### Dashboard Page (/studio)

![Screenshot](assets/screenshots/10%20-%20Dashboard.jpg)

### Subscribers Modal (/studio)

![Screenshot]assets/(screenshots/11%20-%20Subscribers%20Modal.jpg)

### Upload Video Modal

![Screenshot](assets/screenshots/12%20-%20Upload%20Modal.jpg)

### Upload Video Detail Modal

![Screenshot](assets/screenshots/13%20-%20Video%20Details.jpg)

### Videos Page (/studio/videos)

![Screenshot](assets/screenshots/14%20-%20Videos.jpg)

### Edit Video Details (/studio/details/:videoId)

![Screenshot]assets/(screenshots/15%20-%20Edit%20Video%20Details.jpg)

### Upload Thumbnail Modal (/studio/details/:videoId)

![Screenshot]assets/(screenshots/16%20-%20Upload%20Thumbnail%20Modal.jpg)

### Delete Video Modal (/studio/videos)

![Screenshot]assets/(screenshots/17%20-%20Delete%20Video%20Modal.jpg)

### Settings Modal

![Screenshot]assets/(screenshots/17%20-%20Delete%20Video%20Modal.jpg)

If you like the UI, I developed it in a seperate repo [VueTube](https://github.com/techreagan/vuetify-youtube-clone-template)

## License

This project is licensed under the MIT License

## Developed by Reagan Ekhameye (Tech Reagan)

Reach me on twitter [@techreagan](https://www.twitter.com/techreagan)
