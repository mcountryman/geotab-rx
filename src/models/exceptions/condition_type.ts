/* eslint-disable @typescript-eslint/no-empty-interface */

/** Defines the different types of {@link ICondition}(s). */
export enum ConditionType {
  /** None */
  None = "None",
  /**
   * Operator: Condition for "And" operations. "And" conditions must have two or more
   * children that will act as the operands in the equation.
   */
  And = "And",
  /**
   * Operator: Condition for "Or" operations. "Or" conditions must have two or more children
   * that will act as the operands in the equation.
   */
  Or = "Or",
  /** Data: Evaluate the condition against active {@link IFaultData}. */
  Fault = "Fault",
  /** Data: Evaluate the condition against active or inactive {@link IFaultData}. */
  ActiveOrInactiveFault = "ActiveOrInactiveFault",
  /**
   * Zone Operator: Evaluate if related the asset(s) are inside the {@link IZone} specified
   * by this condition.
   */
  InsideArea = "InsideArea",
  /**
   * Zone Operator: Evaluate if the related asset(s) are outside the {@link IZone} specified
   * in this condition.
   */
  OutsideArea = "OutsideArea",
  /** Data: Evaluate against the related asset(s) trip stop value. */
  Stop = "Stop",
  /**
   * Zone Operator: Evaluate if the related asset(s) are stopped inside the {@link IZone}
   * specified in this condition.
   */
  ZoneStop = "ZoneStop",
  /**
   * Zone Operator: Evaluate if the related asset(s) are entering the bounds a {@link
   * IZone} specified in this condition.
   */
  EnteringArea = "EnteringArea",
  /**
   * Zone Operator: Evaluate if the related asset(s) are exiting the bounds a {@link
   * IZone} specified in this condition.
   */
  ExitingArea = "ExitingArea",
  /**
   * Auxiliary Operator: Evaluate against the asset(s) Auxiliary 1 value. Auxiliary conditions
   * can have the value of 0 (False) or 1 (True).
   */
  Aux1 = "Aux1",
  /**
   * Auxiliary Operator: Evaluate against the asset(s) Auxiliary 2 value. Auxiliary conditions
   * can have the value of 0 (False) or 1 (True).
   */
  Aux2 = "Aux2",
  /**
   * Auxiliary Operator: Evaluate against the asset(s) Auxiliary 3 value. Auxiliary conditions
   * can have the value of 0 (False) or 1 (True).
   */
  Aux3 = "Aux3",
  /**
   * Auxiliary Operator: Evaluate against the asset(s) Auxiliary 4 value. Auxiliary conditions
   * can have the value of 0 (False) or 1 (True).
   */
  Aux4 = "Aux4",
  /**
   * Auxiliary Operator: Evaluate against the asset(s) Auxiliary 5 value. Auxiliary conditions
   * can have the value of 0 (False) or 1 (True).
   */
  Aux5 = "Aux5",
  /**
   * Auxiliary Operator: Evaluate against the asset(s) Auxiliary 6 value. Auxiliary conditions
   * can have the value of 0 (False) or 1 (True).
   */
  Aux6 = "Aux6",
  /**
   * Auxiliary Operator: Evaluate against the asset(s) Auxiliary 7 value. Auxiliary conditions
   * can have the value of 0 (False) or 1 (True).
   */
  Aux7 = "Aux7",
  /**
   * Auxiliary Operator: Evaluate against the asset(s) Auxiliary 8 value. Auxiliary conditions
   * can have the value of 0 (False) or 1 (True).
   */
  Aux8 = "Aux8",
  /**
   * Ignition Operator: Evaluate against the asset(s) ignition value. Ignition conditions
   * can have the value of 0 (Off) or 1 (On).
   */
  Ignition = "Ignition",
  /**
   * Value Operator: The duration of the child condition must continue to be true for
   * longer than the value of this condition in seconds.
   */
  DurationLongerThan = "DurationLongerThan",
  /**
   * Value Operator: The duration of the child condition must continue to be true for
   * no longer than the value of this condition in seconds.
   */
  DurationShorterThan = "DurationShorterThan",
  /**
   * Value Operator: The duration of the child condition must continue to be true for
   * a distance longer than the value of this condition in km.
   */
  DistanceLongerThan = "DistanceLongerThan",
  /**
   * Value Operator: The duration of the child condition must continue to be true for
   * no longer distance than the value of this condition in km.
   */
  DistanceShorterThan = "DistanceShorterThan",
  /** Work Hours Operator: Occurs during the {@link IWorkTime}. */
  DeviceWorkHours = "DeviceWorkHours",
  /** Work Hours Operator: Occurs after the {@link IWorkTime}. */
  AfterDeviceWorkHours = "AfterDeviceWorkHours",
  /** Work Hours Operator: Occurs during the {@link IWorkTime} assigned to this condition. */
  RuleWorkHours = "RuleWorkHours",
  /** Work Hours Operator: Occurs after the {@link IWorkTime} assigned to this condition. */
  AfterRuleWorkHours = "AfterRuleWorkHours",
  /**
   * Asset: Apply to the {@link IRule}. When no asset condition is specified the rule
   * will apply to all assets in the rule's groups.
   */
  Device = "Device",
  /**
   * Asset: Apply to the {@link IRule}. When no asset condition is specified the rule
   * will apply to all assets in the rule's groups.
   */
  Driver = "Driver",
  /** System: A method of reporting application exceptions. */
  ApplicationException = "ApplicationException",
  /** Operator: Invert the results of the child condition(s). */
  InvertResult = "InvertResult",
  /**
   * Data: Evaluate the condition against {@link IDiagnostic}. This condition will have
   * the Diagnostic property populated and is used in conjunction with (as child of)
   * an operator (IsValueMoreThan, IsValueLessThan, IsValueEqualTo, AnyData).
   */
  FilterStatusDataByDiagnostic = "FilterStatusDataByDiagnostic",
  /** Operator: The result of the child condition is greater than value of this condition. */
  IsValueMoreThan = "IsValueMoreThan",
  /** Operator: The result of the child condition is less than value of this condition. */
  IsValueLessThan = "IsValueLessThan",
  /** Operator: The result of the child condition is equal to value of this condition. */
  IsValueEqualTo = "IsValueEqualTo",
  /**
   * Data: There is any recorded data of which is specified in the child condition during
   * this observation period.
   */
  AnyData = "AnyData",
  /**
   * Operator: True when the expected duration of the child condition meets this conditions
   * value in seconds.
   */
  ExpectedDuration = "ExpectedDuration",
  /**
   * Operator: True when the expected distance of the child condition meets this conditions
   * value in km.
   */
  ExpectedDistance = "ExpectedDistance",
  /**
   * Data: The trip duration of the asset in seconds. Compare against this value using
   * an operator. Example: DurationLongerThan(value) - child of TripDuration condition.
   */
  TripDuration = "TripDuration",
  /**
   * Data: The speed of the asset in km/h. Compare against this value using an operator.
   * Example: IsValueMoreThan(value) - child of Speed condition.
   */
  Speed = "Speed",
  /**
   * Data: The trip distance of the asset in km. Compare against this value using an
   * operator. Example: DistanceLongerThan(value) - child of TripDistance condition.
   */
  TripDistance = "TripDistance",
  /** A link to another {@link ICondition}. */
  Link = "Link",
  /**
   * Data: The posted road speed of the road the asset is located on in km/h. Compare
   * against this value using an operator and comparing to speed.
   */
  SpeedLimit = "SpeedLimit",
  /**
   * Data: Is the asset driving. Extract a sequence of values of +1 (at start of driving),
   * -1 (at beginning of stoppage), 0 (state unknown: usually occurs at start and the
   * end of available span of the {@link ILogRecord}(s)).
   */
  IsDriving = "IsDriving",
  /**
   * Data: The posted road speed of the road the asset is located on in km/h. Compare
   * against this value using an operator and comparing to speed; excludes estimate speed
   * values.
   */
  SpeedLimitExcludingEstimates = "SpeedLimitExcludingEstimates",
  /** Data: Time Between GPS points in seconds. */
  DurationBetweenGps = "DurationBetweenGps",
  /** Data: Distance Between GPS points in meters. */
  DistanceBetweenGps = "DistanceBetweenGps",
  /**
   * Data: The posted road speed of the road the asset is located on in km/h. Compare
   * against this value using an operator and comparing to speed, uses community speed
   * data only.
   */
  SpeedLimitCommunity = "SpeedLimitCommunity",
  /**
   * Data: The posted road speed of the road the asset is located on in km/h. Compare
   * against this value using an operator and comparing to speed, uses community speed
   * data only; excludes estimate speed values.
   */
  SpeedLimitCommunityExcludingEstimates = "SpeedLimitCommunityExcludingEstimates",
  /**
   * Data: The posted road speed of the road the asset is located on in km/h. Compare
   * against this value using an operator and comparing to speed, uses commercial speed
   * data only.
   */
  SpeedLimitCommercial = "SpeedLimitCommercial",
  /**
   * Data: The posted road speed of the road the asset is located on in km/h. Compare
   * against this value using an operator and comparing to speed, uses commercial speed
   * data only; excludes estimate speed values.
   */
  SpeedLimitCommercialExcludingEstimates = "SpeedLimitCommercialExcludingEstimates",
  /**
   * Data: The reference date is encoded as number of milliseconds since "epoch" date
   * of midnight of 2002/01/01.
   */
  ReferenceDate = "ReferenceDate",
  /** Data: Exception event for whenever is detected. */
  DVIRDefect = "DVIRDefect",
  /** Data: No Pre or Post DVIR check is performed between working days. */
  NoDVIRCheck = "NoDVIRCheck",
  /** Data: Exception event for the entire duration of a {@link ITrip}. */
  EntireTrip = "EntireTrip",
  /**
   * Operator: Condition for "Inclusive" operations. "Inclusive" conditions must have
   * two or more children that will act as the operands in the equation.
   */
  Inclusive = "Inclusive",
  /**
   * Data: The posted road speed of the road the asset is located on in km/h. Used as
   * measurement and filtered by its parent filters.
   */
  SpeedLimitAsMeasurement = "SpeedLimitAsMeasurement",
  /** Data: No Pre or Post DVIR check is performed between working days. */
  NoPreDVIRCheck = "NoPreDVIRCheck",
  /** Data: No Pre or Post DVIR check is performed between working days. */
  NoPostDVIRCheck = "NoPostDVIRCheck",
  /**
   * Operator: The result of the child condition is greater than a percentage of the
   * value of this condition.
   */
  IsValueMoreThanPercent = "IsValueMoreThanPercent",
  /**
   * Operator: The result of the child condition is less than a percentage of the value
   * of this condition.
   */
  IsValueLessThanPercent = "IsValueLessThanPercent",
  /**
   * Data: The average road speed of the road the asset is located on in km/h. Compare
   * against this value using an operator and comparing to speed.
   */
  AverageRoadSpeed = "AverageRoadSpeed",
}
