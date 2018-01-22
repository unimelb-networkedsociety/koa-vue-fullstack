/**
 * GET      /api/things         -> index
 * POST     /api/things         -> create
 * GET      /api/things/:id     -> show
 * PUT      /api/things/:id     -> update
 * DELETE   /api/things/:id     -> delete
 */

'use strict';
const Router = require('koa-router');
var Thing = require('./thing.model');

let router = new Router({
	prefix: '/api/things'
});

router
    .get('/', async (ctx, next) => {
		// index
		ctx.body = await Thing.find({});
    })

    .post('/', (ctx, next) => {
        // create
        ctx.body = 'Thing create!';
    })

    .get('/:id', (ctx, next) => {
        // show
        ctx.body = 'Thing show!';
    })

    .put('/:id', (ctx, next) => {
        // update
        ctx.body = 'Thing update!';
    })

    .delete('/:id', (ctx, next) => {
        // delete
        ctx.body = 'Thing delete!';
    });

module.exports = router;