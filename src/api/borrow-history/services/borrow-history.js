'use strict';

/**
 * borrow-history service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::borrow-history.borrow-history');
