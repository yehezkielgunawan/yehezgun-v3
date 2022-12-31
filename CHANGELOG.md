# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.2.1](https://github.com/yehezkielgunawan/yehezgun-v3/compare/v0.2.0...v0.2.1) (2022-12-31)

### Features

- **\_document:** :sparkles: add snow effect ([c87078e](https://github.com/yehezkielgunawan/yehezgun-v3/commit/c87078ef8328e03f4b9e2ddeeffd87f542e39e0f))
- :sparkles: implement track event umami ([b6e313d](https://github.com/yehezkielgunawan/yehezgun-v3/commit/b6e313d2a6bd2a9ad75af5c88f8738bf9b7c0cb1))
- **aboutme, slug:** :sparkles: track funding modal ([bfda91c](https://github.com/yehezkielgunawan/yehezgun-v3/commit/bfda91c2ff5544a855c03027650401eb3f4a19c8))
- **package.json:** :sparkles: install umami data type ([99a99c8](https://github.com/yehezkielgunawan/yehezgun-v3/commit/99a99c8f762abe1f1a48d2782fbe5c6826d399b2))
- **track, trackEvent.ts:** :sparkles: add event type ([c5f831e](https://github.com/yehezkielgunawan/yehezgun-v3/commit/c5f831e0aa5eefbf2304e1d1e7f35fc015a1b91a))
- **trackEvent, track.ts:** :sparkles: create base helper function to track using umami ([777423d](https://github.com/yehezkielgunawan/yehezgun-v3/commit/777423df1a4e50b578842be304942c04134e28a2))
- **trackEvent.ts:** :bug: add web_id ([4e0441b](https://github.com/yehezkielgunawan/yehezgun-v3/commit/4e0441bcf61b7dba322f486f75c1d1cc55daaee8))
- **useScroll.tsx:** :sparkles: create hooks to detect scroll behavior ([8b853ae](https://github.com/yehezkielgunawan/yehezgun-v3/commit/8b853aeff1f509987531a8a6b44bc8c906babb26))

### Bug Fixes

- **\_document:** :bug: add data-cache for the tracker ([d145a83](https://github.com/yehezkielgunawan/yehezgun-v3/commit/d145a839ac4ff9818b2ebddfe5d808daa5512b78))
- **\_document.tsx:** :bug: use next/script for tracker ([24d1a26](https://github.com/yehezkielgunawan/yehezgun-v3/commit/24d1a2673b11582171f90c4228fcd04a0fc25141))
- :bug: add url for tracking purpose ([01a9278](https://github.com/yehezkielgunawan/yehezgun-v3/commit/01a9278d4a8300148c36fc5dbe5636b6f659fa59))
- :bug: implement useCallback for every function ([574bbce](https://github.com/yehezkielgunawan/yehezgun-v3/commit/574bbcee120b63f2fea86de801241778e1ff2c5a))
- :bug: use id of the array item when using looping function ([8fc75da](https://github.com/yehezkielgunawan/yehezgun-v3/commit/8fc75da8f91faeebf55cfdc6a9d5e149518408ea))
- **aboutme:** :bug: fix tracking snippet ([12c3e91](https://github.com/yehezkielgunawan/yehezgun-v3/commit/12c3e911c4217774598fcd2a70ef55c69b11fce4))
- **BottomNav, HeaderComponent:** :bug: quick fix on scroll behavior ([e646feb](https://github.com/yehezkielgunawan/yehezgun-v3/commit/e646febe55775599740ad1d7216dfe5490aa1e68))
- **footerLink.ts:** :bug: update umami link ([0a6f2c2](https://github.com/yehezkielgunawan/yehezgun-v3/commit/0a6f2c24a4338afba69868aa88c7513e32d6ae25))
- **next.config:** :bug: fix variable typo ([fd543ba](https://github.com/yehezkielgunawan/yehezgun-v3/commit/fd543ba140d5d8b439fad77003b924ce0165dae9))
- **slug.tsx:** :bug: update import statement ([9c42a4c](https://github.com/yehezkielgunawan/yehezgun-v3/commit/9c42a4c1764ab0434bf5ff9e8493f511695b4d30))
- **slug.tsx:** :lipstick: quick fix upper slug flex items ([0a0167a](https://github.com/yehezkielgunawan/yehezgun-v3/commit/0a0167a3e84bf3913cf34c91f21392eb89485fad))

## [0.2.0](https://github.com/yehezkielgunawan/yehezgun-v3/compare/v0.1.3...v0.2.0) (2022-11-05)

### Bug Fixes

- **main page:** :bug: remove unecessary objectFit props ([010e47a](https://github.com/yehezkielgunawan/yehezgun-v3/commit/010e47a1b2eb50af9923913d46c25fc4d6926091))

### [0.1.3](https://github.com/yehezkielgunawan/yehezgun-v3/compare/v0.1.2...v0.1.3) (2022-10-27)

### Features

- **articles page:** :sparkles: add search article feature ([6cd9585](https://github.com/yehezkielgunawan/yehezgun-v3/commit/6cd9585747a03aaa25ad9a02501c8613af121b5f))
- **fetcher and types:** :sparkles: initiate the fetcher function to get experience list via sanity ([540700d](https://github.com/yehezkielgunawan/yehezgun-v3/commit/540700d51d312268bc4c7dd72d64ff82767d0e54))
- **fetcher.ts and types.ts:** :sparkles: create function to fetch the project list from sanity CMS ([cc36024](https://github.com/yehezkielgunawan/yehezgun-v3/commit/cc3602437fb7ae72799a80f1e7adb5423ee8847c))
- **fetcher.ts:** :sparkles: create function to fetch article data through sanity ([f7aa963](https://github.com/yehezkielgunawan/yehezgun-v3/commit/f7aa9630e7c5d2cdebc52326b120deff23ec80d3))
- **formatDate.ts:** :sparkles: create special formatDate helper function for experience ([e452988](https://github.com/yehezkielgunawan/yehezgun-v3/commit/e452988c948456f1138e24c685e52feac32dd7d6))
- **index.test:** :white_check_mark: add simple unit test to check if the page is rendered well ([f17698b](https://github.com/yehezkielgunawan/yehezgun-v3/commit/f17698b705c89dc655392cc2d97c3afa3ef3fa39))
- **jest and testing file:** :sparkles: add base setup unit test ([07f744a](https://github.com/yehezkielgunawan/yehezgun-v3/commit/07f744acd5d47a2e0a51f8b9a7c33f842dd9bacd))
- **package.json and sanity-config:** :sparkles: add sanity-client for image url ([80e7090](https://github.com/yehezkielgunawan/yehezgun-v3/commit/80e709038e471cd56487fa844ab750b289617c69))
- **package.json, sanity-config:** :sparkles: create base setup for sanity through next-sanity ([a4980e3](https://github.com/yehezkielgunawan/yehezgun-v3/commit/a4980e34fadd5317d333ee309cbfc5b51b4c3ef5))
- **Projects page:** :recycle: use data from sanity ([3606e17](https://github.com/yehezkielgunawan/yehezgun-v3/commit/3606e175165eab53a0d7cda243490b2472f79e55))
- **yehezgun.yml:** :construction_worker: add base action ([f31853d](https://github.com/yehezkielgunawan/yehezgun-v3/commit/f31853d639a2448adfeb9996df4a4333d507ff41))

### Bug Fixes

- **articles:** :bug: remove autofocus props ([c0f64fe](https://github.com/yehezkielgunawan/yehezgun-v3/commit/c0f64fecf38e1257d0742e47f4834221d15c2688))
- **fetcher.ts:** :bug: fix fetch article post statement ([ca5bc6e](https://github.com/yehezkielgunawan/yehezgun-v3/commit/ca5bc6e68c59ab456eaf481c6173f933b720ad71))
- **Funding.ts and slug:** :speech_balloon: add trakteer acc for funding purpose ([25d8532](https://github.com/yehezkielgunawan/yehezgun-v3/commit/25d85328200df37b741b3d5fb2a779ea82b4a85e))
- **next.config:** :bug: use serverruntimeconfig ([18cdb0b](https://github.com/yehezkielgunawan/yehezgun-v3/commit/18cdb0b867798ebd3774404fe22c5283631cc408))
- **sanity-config:** :bug: update the type alias ([0fdde0a](https://github.com/yehezkielgunawan/yehezgun-v3/commit/0fdde0aad6fedad88be1320358824d1a4adc0e7a))
- **yehezgun.yml:** :bug: fix env ([b473f7b](https://github.com/yehezkielgunawan/yehezgun-v3/commit/b473f7bb4f91cc5948746d130f6a50604d18a6a3))
- **yehezgun.yml:** :green_heart: add env variable in yml ([2d62cc2](https://github.com/yehezkielgunawan/yehezgun-v3/commit/2d62cc2d93d0c6437bfb772277dff0d52ba8603f))
- **yehezgun.yml:** :green_heart: fix CI build ([6dc4d72](https://github.com/yehezkielgunawan/yehezgun-v3/commit/6dc4d72c05ebeff6ef99d65220922ce415c7c48c))

### [0.1.2](https://github.com/yehezkielgunawan/yehezgun-v3/compare/v0.1.1...v0.1.2) (2022-10-07)

### Features

- **\_app:** :sparkles: implement n progress lib ([27c8c5f](https://github.com/yehezkielgunawan/yehezgun-v3/commit/27c8c5f189d1c78bcedf60d0892147d3e37d3c1b))

### [0.1.1](https://github.com/yehezkielgunawan/yehezgun-v3/compare/v0.1.0...v0.1.1) (2022-08-07)

### Features

- **aboutme page:** :lipstick: implement the funding modal ([c3dc9b0](https://github.com/yehezkielgunawan/yehezgun-v3/commit/c3dc9b09b4c5a7e1cdd9c9642ade8a09c33ab38e))
- **ExperienceCard.tsx:** :sparkles: create seperate component for experiences ([b6f1643](https://github.com/yehezkielgunawan/yehezgun-v3/commit/b6f1643fc4309d19edf8e6050d1b3cca4480e99b))
- **footerLink.tsx:** :sparkles: add showwcase link ([4e977b3](https://github.com/yehezkielgunawan/yehezgun-v3/commit/4e977b3fae8abfd68b1535f87ab9435674626518))
- **Funding.ts:** :sparkles: create funding list const ([c663f8d](https://github.com/yehezkielgunawan/yehezgun-v3/commit/c663f8dc7ee4644ae601356c318cffe3b5ec9f5d))
- **FundingModal:** :sparkles: create seperate modal for funding support ([b9e2bbf](https://github.com/yehezkielgunawan/yehezgun-v3/commit/b9e2bbf6c7c6cba7248bf719e01cc6c7588baf6e))

### Bug Fixes

- **yehezOGImage.ts:** :ambulance: fix wording on OG again ([dfa4acf](https://github.com/yehezkielgunawan/yehezgun-v3/commit/dfa4acfd86262575804dff993536d445e3be2c28))
- **yehezOGImage.ts:** :bug: fix image width on OG ([e3f5639](https://github.com/yehezkielgunawan/yehezgun-v3/commit/e3f5639149c146a6351351d05370e58d6cfae866))
- **yehezOGImage.ts:** :bug: fix wording on OG ([b465d51](https://github.com/yehezkielgunawan/yehezgun-v3/commit/b465d51e86962b7a10f2837ffb46100f49668ba2))

## [0.1.0](https://github.com/yehezkielgunawan/yehezgun-v3/compare/v0.0.11...v0.1.0) (2022-06-26)

### [0.0.11](https://github.com/yehezkielgunawan/yehezgun-v3/compare/v0.0.10...v0.0.11) (2022-06-26)

### Features

- **aboutme and home page:** :sparkles: use tippy js to display tooltip ([52f9bc5](https://github.com/yehezkielgunawan/yehezgun-v3/commit/52f9bc5a3c34c0b11783c4e070b2c89946e01e66))

### Bug Fixes

- **HeaderComponent:** :bug: adjust mounted logic for next-themes ([0620eeb](https://github.com/yehezkielgunawan/yehezgun-v3/commit/0620eeb1ab49092e28e15dfa387e5d4328dba3c8))
- **home page:** :bug: add flex wrap for Hero Button Links ([1ba32c5](https://github.com/yehezkielgunawan/yehezgun-v3/commit/1ba32c5c08c7e0d0ac286a29d83997f1020b1838))
- **resume.tsx:** :bug: use iframe instead of embed (not supported on mobile browser) ([24d2094](https://github.com/yehezkielgunawan/yehezgun-v3/commit/24d2094d6998e9f9523e0256ac5b291ef365e1c4))

### [0.0.10](https://github.com/yehezkielgunawan/yehezgun-v3/compare/v0.0.9...v0.0.10) (2022-05-21)

### Features

- **resume page:** :sparkles: add resume page ([60dd71f](https://github.com/yehezkielgunawan/yehezgun-v3/commit/60dd71f7952cf921b85312948f56145ccdeff220))

### Bug Fixes

- **preloadContext.tsx:** :lipstick: fix color in preload provider to solve flashing issue ([14a0822](https://github.com/yehezkielgunawan/yehezgun-v3/commit/14a0822b39787cd8a2a926d8b6d74ef226a1aa7f))

### [0.0.9](https://github.com/yehezkielgunawan/yehezgun-v3/compare/v0.0.8...v0.0.9) (2022-05-04)

### Features

- **ArticleCard.tsx:** :art: create seperate component for article card ([30b7eaa](https://github.com/yehezkielgunawan/yehezgun-v3/commit/30b7eaa6f2b7f26342b3b72b45ecef90da5f19f2))

### Bug Fixes

- **ProjectCard & article page:** :lipstick: adjust base bg color ([30ebd7e](https://github.com/yehezkielgunawan/yehezgun-v3/commit/30ebd7e9b26443663be8799a62ff7e15c11e697a))

### [0.0.8](https://github.com/yehezkielgunawan/yehezgun-v3/compare/v0.0.7...v0.0.8) (2022-04-22)

### [0.0.7](https://github.com/yehezkielgunawan/yehezgun-v3/compare/v0.0.6...v0.0.7) (2022-04-21)

### Bug Fixes

- **aboutme:** :speech_balloon: fix ko-fi link and add it in slug ([0ceace3](https://github.com/yehezkielgunawan/yehezgun-v3/commit/0ceace3291e576621747dae737176228ac553136))
- **Headercomponent:** :bug: fix hydration issue on header component ([1e31b29](https://github.com/yehezkielgunawan/yehezgun-v3/commit/1e31b292858b8b77b7e6926d01dbed09a41eac66))

### [0.0.6](https://github.com/yehezkielgunawan/yehezgun-v3/compare/v0.0.5...v0.0.6) (2022-04-02)

### [0.0.5](https://github.com/yehezkielgunawan/yehezgun-v3/compare/v0.0.4...v0.0.5) (2022-03-21)

### [0.0.4](https://github.com/yehezkielgunawan/yehezgun-v3/compare/v0.0.3...v0.0.4) (2022-03-19)

### Features

- **footerComponent:** :lipstick: change footerlink to unstyled link ([dff82ec](https://github.com/yehezkielgunawan/yehezgun-v3/commit/dff82ecf2b4285a87f56efdd0650edddae470c99))
- **useLoaded:** :sparkles: add new hook to check if the elements is loaded ([b16b988](https://github.com/yehezkielgunawan/yehezgun-v3/commit/b16b9886eb3cba0da0467fbb90620aaddbcd5d8c))

### Bug Fixes

- **global.css:** :bug: fix class name fade-in-start to fade-start ([7b03adb](https://github.com/yehezkielgunawan/yehezgun-v3/commit/7b03adb7dcee65433cef6b8d0741ecfe09583a19))
- **slug:** :bug: fix html structure so the article will be loaded ([f3fa389](https://github.com/yehezkielgunawan/yehezgun-v3/commit/f3fa389f868ea8a96a6c6467c61513bfeb361e4e))

### [0.0.3](https://github.com/yehezkielgunawan/yehezgun-v3/compare/v0.0.2...v0.0.3) (2022-03-13)

### [0.0.2](https://github.com/yehezkielgunawan/yehezgun-v3/compare/v0.0.1...v0.0.2) (2022-03-03)

### Features

- :sparkles: add share to twitter button link at article post ([8a02909](https://github.com/yehezkielgunawan/yehezgun-v3/commit/8a0290998ce8f8a930480db66e8653b2b3d1dabf))
- **baseConstant and \_document:** :sparkles: add umami snippet code ([9b2558b](https://github.com/yehezkielgunawan/yehezgun-v3/commit/9b2558b7469ac5dbe589385855eb132b49b42dd6))
- **categoryList and categoryColor:** :sparkles: initiate object and base variable for category ([f5bd5a7](https://github.com/yehezkielgunawan/yehezgun-v3/commit/f5bd5a7f37d9ecc0ea7c7fa1de00af9669b4343c))
- **types.ts:** :sparkles: add alternative_link and translation_link at SingleArticle Type ([be47ff2](https://github.com/yehezkielgunawan/yehezgun-v3/commit/be47ff234698baad42ddf9cafbc9b605a5513fcc))

### Bug Fixes

- **aboutme:** :bug: fix saweria link ([651a77c](https://github.com/yehezkielgunawan/yehezgun-v3/commit/651a77c8b9af39163b3fd2f4ed4315648801331a))
- **slug:** :bug: fix share twitter link bug ([1121185](https://github.com/yehezkielgunawan/yehezgun-v3/commit/112118535a2b387a649f6bf8a4aaaf96fc638333))
- **slug:** :bug: fix twitter button link bug ([699fcfa](https://github.com/yehezkielgunawan/yehezgun-v3/commit/699fcfa7188c25ccda8c547139ce5303a2584e60))
- **slug:** :bug: fix twitter url bug on twitter button ([eda3b7a](https://github.com/yehezkielgunawan/yehezgun-v3/commit/eda3b7af12cc3da169bb97a22cfe6edfff7479f6))
- **slug:** :bug: implement URI Component to url and twitter caption ([27dc23c](https://github.com/yehezkielgunawan/yehezgun-v3/commit/27dc23c1f52982855ae3b9a8dcc3315313c19835))
- **tailwind.config:** :wrench: change font into fira-sans and pt-serif ([cd49cea](https://github.com/yehezkielgunawan/yehezgun-v3/commit/cd49cea9455038ba91b3595ef9d16b4ab1031770))

### 0.0.1 (2022-02-27)

### Features

- **[slug]:** :sparkles: add base page slug ([51c1d07](https://github.com/yehezkielgunawan/yehezgun-v3/commit/51c1d07845beb85904e8ff7d961a9b93187f735a))
- **aboutme, articles, projects:** :sparkles: initiate base pages ([e6e4c6a](https://github.com/yehezkielgunawan/yehezgun-v3/commit/e6e4c6a6821df19df29e8e52ef9f8cd765dcac11))
- **aboutme:** :sparkles: set base UI for aboutme page ([549ff92](https://github.com/yehezkielgunawan/yehezgun-v3/commit/549ff92f416a4784144a7055352c46502629bd5d))
- **all pages:** :sparkles: implement preload and css transition (fading) ([406b454](https://github.com/yehezkielgunawan/yehezgun-v3/commit/406b454eb53968d3dcc4e552b4ea0f318fa68d83))
- **all pages:** :sparkles: implement the next-seo for all pages ([e38390c](https://github.com/yehezkielgunawan/yehezgun-v3/commit/e38390c951c567100431d6e280c14f5e3488a911))
- **articles:** :sparkles: initiate base article list page ([9b2e78d](https://github.com/yehezkielgunawan/yehezgun-v3/commit/9b2e78d8a0f3f2cebb83a135d98ef85b631881db))
- **contactList:** :sparkles: set constant for contact list ([a670bbd](https://github.com/yehezkielgunawan/yehezgun-v3/commit/a670bbd048be7e96d524a7acf4793ab94d349bd2))
- **env and constants folder:** :sparkles: install and initiate airtable function fetcher ([4938fa6](https://github.com/yehezkielgunawan/yehezgun-v3/commit/4938fa617b8e22ce430946cb2c87d3313ec12577))
- **Footer, Header, Layout:** :sparkles: set the base navigation ([b902122](https://github.com/yehezkielgunawan/yehezgun-v3/commit/b90212227bb7f2a2cd6c987e9280d4aa269a2a0c))
- **formatDate:** :sparkles: initiate helper function for date formatting ([fdd47d2](https://github.com/yehezkielgunawan/yehezgun-v3/commit/fdd47d22b0059f6ef7bc888a4324efc69fc72b6a))
- **home page:** :sparkles: add hover effect for tech stack icon ([0d9db51](https://github.com/yehezkielgunawan/yehezgun-v3/commit/0d9db51b83270035888feddd6d143693e16be673))
- **home page:** :sparkles: initiate base layout and content for home page ([0bce0d3](https://github.com/yehezkielgunawan/yehezgun-v3/commit/0bce0d3ef69cbb4b8f730ecb2d920c322fc57272))
- **menuIcon helper:** :art: modularize the helper function to display menu icon ([b9d748c](https://github.com/yehezkielgunawan/yehezgun-v3/commit/b9d748c17a345506d5c5a974cad141fc91bfa87b))
- **MetaHead ang yehezOgImage:** :sparkles: initiate base NextSeo for each page ([5067ef6](https://github.com/yehezkielgunawan/yehezgun-v3/commit/5067ef6173104dba45b0a605c0f7da99e62ec6bf))
- **newTheme, convertToIdLink, and [slug]:** :sparkles: layouting and set base theme for md texts ([35ca3c6](https://github.com/yehezkielgunawan/yehezgun-v3/commit/35ca3c6d97fe43e36fcefa400724a022c1f77781))
- **newTheme:** :lipstick: add syntax highliter ([7858b6a](https://github.com/yehezkielgunawan/yehezgun-v3/commit/7858b6a5ac14c710a879ddfa12399713bebcf0f2))
- **newTheme:** :sparkles: fix and handle some new html tag markdown styling ([bd39aef](https://github.com/yehezkielgunawan/yehezgun-v3/commit/bd39aeff4596c2116ae1d49e8c653cd53c810a4f))
- **package.json:** :heavy_plus_sign: install react-giscus ([0278e0a](https://github.com/yehezkielgunawan/yehezgun-v3/commit/0278e0a8bcdb22488246336b8c7e48f4df7217d0))
- **PreloadContext and Layout:** :sparkles: inititate base context for preloader ([322a6c2](https://github.com/yehezkielgunawan/yehezgun-v3/commit/322a6c2dc6e7082c38899f596fa8a4d345401fa1))
- **projects:** :sparkles: initiate base projects page ([0e40a1e](https://github.com/yehezkielgunawan/yehezgun-v3/commit/0e40a1ebf5d47b0298c25e50d03af43a59a6e37e))
- **techStacks:** :sparkles: add techStack constants ([2ce8527](https://github.com/yehezkielgunawan/yehezgun-v3/commit/2ce8527e04aa69d07abe33f4d982d41fe1e072dd))
- **yehezOgImage.ts:** :sparkles: add helper function to generate OG Image ([cd96dcc](https://github.com/yehezkielgunawan/yehezgun-v3/commit/cd96dccd6799fa87c7cade815575f9a7ebf33fd4))

### Bug Fixes

- **Footer and Header:** :bug: fix flickering at header and fix flexbox in footer ([e38dc83](https://github.com/yehezkielgunawan/yehezgun-v3/commit/e38dc836b933e2e823ad970bc3437b9629a3240e))
- **Layout.tsx:** :lipstick: adjust styling for bottom navbar ([560fab0](https://github.com/yehezkielgunawan/yehezgun-v3/commit/560fab0ad8147de90accc8d6fb5ec24a7fbf4962))
- **next-seo:** :pencil2: fix typo in image alt ([9760488](https://github.com/yehezkielgunawan/yehezgun-v3/commit/97604880c38afc05b467bbdb5cb89ba15859af46))
