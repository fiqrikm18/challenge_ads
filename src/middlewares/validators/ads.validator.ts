import { NextFunction, Request, Response } from "express";

export function validateCreateAds(req: Request, res: Response, next: NextFunction) {
  const { name, adset_id, creative_id } = req.body;

  if (!name || name === "") {
    return res.json({
      "code": 422,
      "msg": "Field name is required",
      "data": {}
    });
  }

  if (!adset_id || adset_id === "") {
    return res.json({
      "code": 422,
      "msg": "Field adset_id is required",
      "data": {}
    });
  }

  if (!creative_id || creative_id === "") {
    return res.json({
      "code": 422,
      "msg": "Field creative_id is required",
      "data": {}
    });
  }

  return next();
}

export function validateCreateAdsSet(req: Request, res: Response, next: NextFunction) {
  const { name, lifetime_budget, campaign_id, bid_amount } = req.body;

  if (!name || name === "") {
    return res.json({
      "code": 422,
      "msg": "Field name is required",
      "data": {}
    });
  }

  if (!lifetime_budget || lifetime_budget === "") {
    return res.json({
      "code": 422,
      "msg": "Field lifetime_budget is required",
      "data": {}
    });
  }

  if (!campaign_id || campaign_id === "") {
    return res.json({
      "code": 422,
      "msg": "Field campaign_id is required",
      "data": {}
    });
  }

  if (!bid_amount || bid_amount === "") {
    return res.json({
      "code": 422,
      "msg": "Field bid_amount is required",
      "data": {}
    });
  }
  return next();
}

export function validateCreateCampaign(req: Request, res: Response, next: NextFunction) {
  const { campaign_name, campaign_objective, campaign_type, campaign_options } = req.body;

  if (!campaign_name || campaign_name === "") {
    return res.json({
      "code": 422,
      "msg": "Field campaign_name is required",
      "data": {}
    });
  }

  if (!campaign_objective || campaign_objective === "") {
    return res.json({
      "code": 422,
      "msg": "Field campaign_objective is required",
      "data": {}
    });
  }

  if (!campaign_type || campaign_type === "") {
    return res.json({
      "code": 422,
      "msg": "Field campaign_type is required",
      "data": {}
    });
  }

  if (!campaign_options || campaign_options === "") {
    return res.json({
      "code": 422,
      "msg": "Field campaign_options is required",
      "data": {}
    });
  }

  return next();
}