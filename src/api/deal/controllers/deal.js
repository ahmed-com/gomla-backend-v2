"use strict";

/**
 *  deal controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::deal.deal", () => ({
  async create(ctx) {
    ctx.request.body.owner = ctx.state.user.id;

    const response = await super.create(ctx);

    return response;
  },

  async update(ctx) {
    const response = await super.update(ctx);

    if (response.body.id !== ctx.state.user.id)
      return ctx.unauthorized(`You can't update this entry`);

    return response;
  },
}));
