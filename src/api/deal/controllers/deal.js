"use strict";

/**
 *  deal controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::deal.deal", ({ strapi }) => ({
  async create(ctx) {
    ctx.request.body.data.owner = ctx.state.user.id;

    const response = await super.create(ctx);

    return response;
  },

  async update(ctx) {
    const { id } = ctx.params;
    const claimer = ctx.state.user.id;

    const isOwner =
      (await strapi.service("api::deal.deal").findOne(id).owner) === claimer;

    if (!isOwner) return ctx.unauthorized(`You can't update this entry`);

    const response = await super.update(ctx);

    return response;
  },
}));
