// import path from 'path';
import express from 'express';
// import render from '../../../client';
// import manifest from '../../../client/static/build/manifest.json';

import bodyParser from "body-parser";

import request from 'request';
import { RESOURCE_HOST, RESOURCE_PROTOCOL } from '../config';

// const client = require.resolve('../../../client');
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// Service worker
// router.use('/sw.js', (_, res) => {
//   res.sendFile(path.resolve(client, '../../static/build/sw.js'));
// });

// Progressive web app
// router.use('/manifest.json', ({ i18n }, res) => {
//   res.json({
//     name: i18n.t('meta.title', { defaultValue: '' }),
//     short_name: i18n.t('meta.title_short', { defaultValue: '' }),
//     display: 'standalone',
//     icons: [
//       {
//         src: '/android-chrome.png',
//         size: '250x250',
//         type: 'image/png',
//       },
//     ],
//     start_url: '/activities',
//     theme_color: '#F80652',
//     background_color: '#C70542',
//   });
// });

// Server side rendering
// router.use(async (req, res) => {
//   const result = await render({
//     manifest,
//     i18n: req.i18n,
//     location: req.url,
//   });

//   res.status(result.statusCode);
//   res.send(`<!DOCTYPE html>\n${result.staticMarkup}`);
// });

// Bind /api/* to original API server
router.use('/api', (req, res) => {
  const boundPath: string = `${RESOURCE_PROTOCOL}://${RESOURCE_HOST}${req.path}`;
  req.pipe(request(boundPath)).pipe(res);
});

export const routes = router;
