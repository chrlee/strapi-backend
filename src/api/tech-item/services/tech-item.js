'use strict';

/**
 * tech-item service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tech-item.tech-item');
