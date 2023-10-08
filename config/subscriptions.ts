import { SubscriptionPlan } from "types";

export const freePlan: SubscriptionPlan = {
  name: "Free",
  description:
    "The free plan is limited in use.",
  stripePriceId: "",
  price: 0,
};

export const proPlan: SubscriptionPlan = {
  name: "PRO",
  description:
    "The PRO plan is pretty sweet. You should try it.",
  stripePriceId: process.env.STRIPE_PRO_MONTHLY_PLAN_ID || "",
  price: 99.95, // Make sure to be aligned with stripe pricing
};
