export class RequiresProPlanError extends Error {
  constructor(message = "This action requires a pro plan") {
    super(message);
  }
}

export class LimitedFeaturesInEarlyAccess extends Error {
  constructor(message = "This action is limited in the early access") {
    super(message);
  }
}
