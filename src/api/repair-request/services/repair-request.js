'use strict';

/**
 * repair-request service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::repair-request.repair-request');
