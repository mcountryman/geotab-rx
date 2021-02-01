/* eslint-disable @typescript-eslint/no-empty-interface */

/** All the system Ids. */
export interface IKnownId {
  /** Gets the controller aerodynamic control identifier. */
  controllerAerodynamicControlId: string;
  /** Gets the controller aerodynamic control unit identifier. */
  controllerAerodynamicControlUnitId: string;
  /** Gets the controller aftertreatment system gas intake identifier. */
  controllerAftertreatmentSystemGasIntakeId: string;
  /** Gets the controller aftertreatment system gas outlet identifier. */
  controllerAftertreatmentSystemGasOutletId: string;
  /** Gets the controller alternator electrical charging system identifier. */
  controllerAlternatorElectricalChargingSystemId: string;
  /** Gets the controller auxiliary heater no1 identifier. */
  controllerAuxiliaryHeaterNo1Id: string;
  /** Gets the controller auxiliary heater no2 identifier. */
  controllerAuxiliaryHeaterNo2Id: string;
  /** Gets the controller auxiliary valve control identifier. */
  controllerAuxiliaryValveControlId: string;
  /** Gets the controller axle drive no1 identifier. */
  controllerAxleDriveNo1Id: string;
  /** Gets the controller axle drive no2 identifier. */
  controllerAxleDriveNo2Id: string;
  /** Gets the controller axle power unit identifier. */
  controllerAxlePowerUnitId: string;
  /** Gets the controller axle steering identifier. */
  controllerAxleSteeringId: string;
  /** Gets the controller axle trailer identifier. */
  controllerAxleTrailerId: string;
  /** Gets the controller body controller identifier. */
  controllerBodyControllerId: string;
  /** Gets the controller brakes drive axle no1 identifier. */
  controllerBrakesDriveAxleNo1Id: string;
  /** Gets the controller brakes drive axle no2 identifier. */
  controllerBrakesDriveAxleNo2Id: string;
  /** Gets the controller brakes power unit identifier. */
  controllerBrakesPowerUnitId: string;
  /** Gets the controller brakes steer axle identifier. */
  controllerBrakesSteerAxleId: string;
  /** Gets the controller brakes system controller identifier. */
  controllerBrakesSystemControllerId: string;
  /** Gets the controller brakes trailer no1 identifier. */
  controllerBrakesTrailerNo1Id: string;
  /** Gets the controller brakes trailer no2 identifier. */
  controllerBrakesTrailerNo2Id: string;
  /** Gets the controller brakes trailer no3 identifier. */
  controllerBrakesTrailerNo3Id: string;
  /** Gets the identifier for the fixed controller assigned for BRP specific faults. */
  controllerBrpFaultId: string;
  /** Gets the controller CAB climate control identifier. */
  controllerCabClimateControlId: string;
  /** Gets the controller CAB controller primary identifier. */
  controllerCabControllerPrimaryId: string;
  /** Gets the controller CAB controller secondary identifier. */
  controllerCabControllerSecondaryId: string;
  /** Gets the controller CAB display no1 identifier. */
  controllerCabDisplayNo1Id: string;
  /** Gets the controller CAB display no2 identifier. */
  controllerCabDisplayNo2Id: string;
  /** Gets the controller cargo refrigeration heating trailer identifier. */
  controllerCargoRefrigerationHeatingTrailerId: string;
  /** Gets the controller chassis controller no1 identifier. */
  controllerChassisControllerNo1Id: string;
  /** Gets the controller chassis controller no2 identifier. */
  controllerChassisControllerNo2Id: string;
  /** Gets the controller clutch converter unit identifier. */
  controllerClutchConverterUnitId: string;
  /** Gets the controller communications unit cellular identifier. */
  controllerCommunicationsUnitCellularId: string;
  /** Gets the controller communications unit radio identifier. */
  controllerCommunicationsUnitRadioId: string;
  /** Gets the controller communications unit satellite identifier. */
  controllerCommunicationsUnitSatelliteId: string;
  /** Gets the controller communication unit ground identifier. */
  controllerCommunicationUnitGroundId: string;
  /** Gets the controller communication unit satellite identifier. */
  controllerCommunicationUnitSatelliteId: string;
  /** Gets the controller cranking starting system identifier. */
  controllerCrankingStartingSystemId: string;
  /** Gets the controller data logging computer identifier. */
  controllerDataLoggingComputerId: string;
  /** Gets the geotab ai model controller identifier. */
  controllerDefaultGeotabAiModelId: string;
  /** Gets the controller diagnostic systems power unit identifier. */
  controllerDiagnosticSystemsPowerUnitId: string;
  /** Gets the controller diagnostic systems trailer identifier. */
  controllerDiagnosticSystemsTrailerId: string;
  /** Gets the controller driver information center no1 identifier. */
  controllerDriverInformationCenterNo1Id: string;
  /** Gets the controller electrical charging system identifier. */
  controllerElectricalChargingSystemId: string;
  /** Gets the controller electrical identifier. */
  controllerElectricalId: string;
  /** Gets the controller electrical system identifier. */
  controllerElectricalSystemId: string;
  /** Gets the controller endurance braking system identifier. */
  controllerEnduranceBrakingSystemId: string;
  /** Gets the controller engine no2 identifier. */
  controllerEngineNo2Id: string;
  /** Gets the controller engine no3 identifier. */
  controllerEngineNo3Id: string;
  /** Gets the controller engine retarder identifier. */
  controllerEngineRetarderId: string;
  /** Gets the controller engine valve controller identifier. */
  controllerEngineValveControllerId: string;
  /** Gets the controller exhaust emission controller identifier. */
  controllerExhaustEmissionControllerId: string;
  /** Gets the controller fan drive controller identifier. */
  controllerFanDriveControllerId: string;
  /** Gets the geotab ai model controller identifier. */
  controllerGeotabAiModelFaultId: string;
  /** Gets the identifier for the fixed controller assigned for GMCCC specific faults. */
  controllerGmcccFaultId: string;
  /** Gets the identifier for the fixed controller assigned to the GO device. */
  controllerGoDeviceId: string;
  /** Gets the controller headway controller identifier. */
  controllerHeadwayControllerId: string;
  /** Gets the controller hitch control identifier. */
  controllerHitchControlId: string;
  /** Gets the controller hydraulic pump controller identifier. */
  controllerHydraulicPumpControllerId: string;
  /** Gets the controller ignition control module no1 identifier. */
  controllerIgnitionControlModuleNo1Id: string;
  /** Gets the controller ignition control module no2 identifier. */
  controllerIgnitionControlModuleNo2Id: string;
  /** Gets the controller information system controller no1 identifier. */
  controllerInformationSystemControllerNo1Id: string;
  /** Gets the controller instrument cluster identifier. */
  controllerInstrumentClusterId: string;
  /** Gets the controller instrument cluster no1 identifier. */
  controllerInstrumentClusterNo1Id: string;
  /** Gets the controller J1708 cruise control identifier. */
  controllerJ1708CruiseControlId: string;
  /** Gets the controller J1708 engine identifier. */
  controllerJ1708EngineId: string;
  /** Gets the controller J1708 fuel system identifier. */
  controllerJ1708FuelSystemId: string;
  /** Gets the controller J1708 pneumatic system controller identifier. */
  controllerJ1708PneumaticSystemControllerId: string;
  /** Gets the controller J1708 power takeoff identifier. */
  controllerJ1708PowerTakeoffId: string;
  /** Gets the controller J1708 trip recorder identifier. */
  controllerJ1708TripRecorderId: string;
  /** Gets the controller J1708 turbocharger identifier. */
  controllerJ1708TurbochargerId: string;
  /** Gets the controller J1708 vehicle security identifier. */
  controllerJ1708VehicleSecurityId: string;
  /** Gets the controller J1939 cruise control identifier. */
  controllerJ1939CruiseControlId: string;
  /** Gets the controller J1939 engine no1 identifier. */
  controllerJ1939EngineNo1Id: string;
  /** Gets the controller J1939 engine no2 identifier. */
  controllerJ1939EngineNo2Id: string;
  /** Gets the controller J1939 fuel system identifier. */
  controllerJ1939FuelSystemId: string;
  /** Gets the controller J1939 pneumatic system controller identifier. */
  controllerJ1939PneumaticSystemControllerId: string;
  /** Gets the controller J1939 power take off main rear identifier. */
  controllerJ1939PowerTakeOffMainRearId: string;
  /** Gets the controller J1939 trip recorder identifier. */
  controllerJ1939TripRecorderId: string;
  /** Gets the controller J1939 turbocharger identifier. */
  controllerJ1939TurbochargerId: string;
  /** Gets the controller J1939 vehicle security identifier. */
  controllerJ1939VehicleSecurityId: string;
  /**
   * Gets the identifier for the fixed controller assigned for legacy manufacturer specific
   * faults.
   */
  controllerLegacyFaultId: string;
  /** Gets the controller lighting operator controls identifier. */
  controllerLightingOperatorControlsId: string;
  /** Gets the controller management computer no1 identifier. */
  controllerManagementComputerNo1Id: string;
  /** Gets the controller multiplex identifier. */
  controllerMultiplexId: string;
  /** Gets the controller none identifier. */
  controllerNoneId: string;
  /** Gets the controller OBD body identifier. */
  controllerObdBodyId: string;
  /** Gets the controller OBD chassis identifier. */
  controllerObdChassisId: string;
  /** Gets the controller OBD networking identifier. */
  controllerObdNetworkingId: string;
  /** Gets the controller OBD powertrain identifier. */
  controllerObdPowertrainId: string;
  /** Gets the controller WWH OBD body identifier. */
  controllerObdWwhBodyId: string;
  /** Gets the controller WWH OBD chassis identifier. */
  controllerObdWwhChassisId: string;
  /** Gets the controller WWH OBD networking identifier. */
  controllerObdWwhNetworkingId: string;
  /** Gets the controller WWH OBD powertrain identifier. */
  controllerObdWwhPowertrainId: string;
  /** Gets the controller off-board diagnostics no1 identifier. */
  controllerOffboardDiagnosticsNo1Id: string;
  /** Gets the controller off-board diagnostics no2 identifier. */
  controllerOffboardDiagnosticsNo2Id: string;
  /** Gets the controller off-board programming station identifier. */
  controllerOffboardProgrammingStationId: string;
  /** Gets the controller off vehicle gateway identifier. */
  controllerOffVehicleGatewayId: string;
  /** Gets the controller oil sensor identifier. */
  controllerOilSensorId: string;
  /** Gets the controller on board diagnostic unit identifier. */
  controllerOnBoardDiagnosticUnitId: string;
  /** Gets the controller parking brake controller identifier. */
  controllerParkingBrakeControllerId: string;
  /** Gets the controller particulate trap system identifier. */
  controllerParticulateTrapSystemId: string;
  /** Gets the controller passenger operator climate control1 identifier. */
  controllerPassengerOperatorClimateControl1Id: string;
  /** Gets the controller passenger operator climate control no2 identifier. */
  controllerPassengerOperatorClimateControlNo2Id: string;
  /** Gets the controller power take off front secondary identifier. */
  controllerPowerTakeOffFrontSecondaryId: string;
  /**
   * Gets the identifier for the fixed controller assigned for manufacturer specific
   * faults.
   */
  controllerProprietaryFaultId: string;
  /** Gets the controller propulsion battery charger identifier. */
  controllerPropulsionBatteryChargerId: string;
  /** Gets the controller proximity detector front identifier. */
  controllerProximityDetectorFrontId: string;
  /** Gets the controller proximity detector rear identifier. */
  controllerProximityDetectorRearId: string;
  /** Gets the controller ramp control identifier. */
  controllerRampControlId: string;
  /** Gets the controller rear axle steering controller identifier. */
  controllerRearAxleSteeringControllerId: string;
  /** Gets the controller rear axle steering controller no1 identifier. */
  controllerRearAxleSteeringControllerNo1Id: string;
  /** Gets the controller retarder driveline identifier. */
  controllerRetarderDrivelineId: string;
  /** Gets the controller retarder engine identifier. */
  controllerRetarderEngineId: string;
  /** Gets the controller retarder exhaust engine no1 identifier. */
  controllerRetarderExhaustEngineNo1Id: string;
  /** Gets the controller retarder exhaust engine no2 identifier. */
  controllerRetarderExhaustEngineNo2Id: string;
  /** Gets the controller road speed indicator identifier. */
  controllerRoadSpeedIndicatorId: string;
  /** Gets the controller safety restraint system identifier. */
  controllerSafetyRestraintSystemId: string;
  /** Gets the controller seat control no1 identifier. */
  controllerSeatControlNo1Id: string;
  /** Gets the controller seat control no2 identifier. */
  controllerSeatControlNo2Id: string;
  /** Gets the controller shift console primary identifier. */
  controllerShiftConsolePrimaryId: string;
  /** Gets the controller shift console secondary identifier. */
  controllerShiftConsoleSecondaryId: string;
  /** Gets the controller starter system identifier. */
  controllerStarterSystemId: string;
  /** Gets the controller steering column unit identifier. */
  controllerSteeringColumnUnitId: string;
  /** Gets the controller steering controller identifier. */
  controllerSteeringControllerId: string;
  /** Gets the Controller suspension drive axle no1 identifier. */
  controllerSuspensionDriveAxleNo1Id: string;
  /** Gets the controller suspension drive axle no2 identifier. */
  controllerSuspensionDriveAxleNo2Id: string;
  /** Gets the controller suspension power unit identifier. */
  controllerSuspensionPowerUnitId: string;
  /** Gets the controller suspension steer axle identifier. */
  controllerSuspensionSteerAxleId: string;
  /** Gets the controller suspension system controller no1 identifier. */
  controllerSuspensionSystemControllerNo1Id: string;
  /** Gets the controller suspension system controller no2 identifier. */
  controllerSuspensionSystemControllerNo2Id: string;
  /** Gets the controller suspension trailer identifier. */
  controllerSuspensionTrailerId: string;
  /** Gets the controller tire pressure controller identifier. */
  controllerTirePressureControllerId: string;
  /** Gets the controller tires control unit identifier. */
  controllerTiresControlUnitId: string;
  /** Gets the controller tires power unit identifier. */
  controllerTiresPowerUnitId: string;
  /** Gets the controller tires trailer identifier. */
  controllerTiresTrailerId: string;
  /** Gets the controller tires trailer no2 identifier. */
  controllerTiresTrailerNo2Id: string;
  /** Gets the controller tires trailer no3 identifier. */
  controllerTiresTrailerNo3Id: string;
  /** Gets the controller tractor trailer bridge no1 identifier. */
  controllerTractorTrailerBridgeNo1Id: string;
  /** Gets the controller transmission additional hybrid control module identifier. */
  controllerTransmissionAdditionalHybridControlModuleId: string;
  /** Gets the controller transmission display primary identifier. */
  controllerTransmissionDisplayPrimaryId: string;
  /** Gets the controller transmission display secondary identifier. */
  controllerTransmissionDisplaySecondaryId: string;
  /** Gets the controller transmission identifier. */
  controllerTransmissionId: string;
  /** Gets the controller transmission no1 identifier. */
  controllerTransmissionNo1Id: string;
  /** Gets the controller transmission no2 identifier. */
  controllerTransmissionNo2Id: string;
  /** Gets the controller vehicle dynamic stability controller identifier. */
  controllerVehicleDynamicStabilityControllerId: string;
  /** Gets the controller vehicle management system identifier. */
  controllerVehicleManagementSystemId: string;
  /** Gets the controller vehicle management system no2 identifier. */
  controllerVehicleManagementSystemNo2Id: string;
  /** Gets the controller vehicle management system no3 identifier. */
  controllerVehicleManagementSystemNo3Id: string;
  /** Gets the controller vehicle navigation identifier. */
  controllerVehicleNavigationId: string;
  /** Gets the controller vehicle navigation unit identifier. */
  controllerVehicleNavigationUnitId: string;
  /** Gets the controller vehicle sensors to data converter identifier. */
  controllerVehicleSensorsToDataConverterId: string;
  /** Gets the controller virtual terminal identifier. */
  controllerVirtualTerminalId: string;
  /** Gets the controller water pump controller identifier. */
  controllerWaterPumpControllerId: string;
  /** Gets the diagnostic ABS system active identifier. */
  diagnosticAbsSystemActiveId: string;
  /** Gets the diagnostic ABS warning light identifier. */
  diagnosticAbsWarningLightId: string;
  /** Gets the diagnostic acceleration event before calibration identifier. */
  diagnosticAccelerationEventbeforeCalibrationId: string;
  /** Gets the diagnostic acceleration forward braking identifier. */
  diagnosticAccelerationForwardBrakingId: string;
  /** Gets the diagnostic acceleration side to side identifier. */
  diagnosticAccelerationSideToSideId: string;
  /** Gets the diagnostic acceleration up down identifier. */
  diagnosticAccelerationUpDownId: string;
  /** Gets the diagnostic accelerometer calibrated identifier. */
  diagnosticAccelerometerCalibratedId: string;
  /** Gets the diagnostic accelerometer failed to initialize identifier. */
  diagnosticAccelerometerFailedToInitializeId: string;
  /** Gets the diagnostic accelerometer interrupt failure identifier. */
  diagnosticAccelerometerInterruptFailureId: string;
  /** Gets the diagnostic accident data upload event identifier. */
  diagnosticAccidentDataUploadEventId: string;
  /** Gets the diagnostic accident level acceleration event identifier. */
  diagnosticAccidentLevelAccelerationEventId: string;
  /** Gets the diagnostic ac control unit status identifier. */
  diagnosticAcControlUnitStatusId: string;
  /** Gets the diagnostic airbag deployed identifier. */
  diagnosticAirbagDeployedId: string;
  /** Gets the diagnostic airbag nearly deployed identifier. */
  diagnosticAirbagNearlyDeployedId: string;
  /** Gets the diagnostic airbag warning light identifier. */
  diagnosticAirbagWarningLightId: string;
  /** Gets the diagnostic air conditioner refrigerant pressure identifier. */
  diagnosticAirConditionerRefrigerantPressureId: string;
  /** Gets the diagnostic id for analog auxiliary 1. */
  diagnosticAnalogAux1Id: string;
  /** Gets the diagnostic id for analog auxiliary 2. */
  diagnosticAnalogAux2Id: string;
  /** Gets the diagnostic id for analog auxiliary 3. */
  diagnosticAnalogAux3Id: string;
  /** Gets the diagnostic id for analog auxiliary 4. */
  diagnosticAnalogAux4Id: string;
  /** Gets the diagnostic id for analog auxiliary 5. */
  diagnosticAnalogAux5Id: string;
  /** Gets the diagnostic id for analog auxiliary 6. */
  diagnosticAnalogAux6Id: string;
  /** Gets the diagnostic id for analog auxiliary 7. */
  diagnosticAnalogAux7Id: string;
  /** Gets the diagnostic id for analog auxiliary 8. */
  diagnosticAnalogAux8Id: string;
  /** Gets the diagnostic APN re scan started due to connection failure identifier. */
  diagnosticApnReScanStartedDueToConnectionFailureId: string;
  /** Gets the diagnostic aux1 identifier. */
  diagnosticAux1Id: string;
  /** Gets the diagnostic aux2 identifier. */
  diagnosticAux2Id: string;
  /** Gets the diagnostic aux3 identifier. */
  diagnosticAux3Id: string;
  /** Gets the diagnostic aux4 identifier. */
  diagnosticAux4Id: string;
  /** Gets the diagnostic aux5 identifier. */
  diagnosticAux5Id: string;
  /** Gets the diagnostic aux6 identifier. */
  diagnosticAux6Id: string;
  /** Gets the diagnostic aux7 identifier. */
  diagnosticAux7Id: string;
  /** Gets the diagnostic aux8 identifier. */
  diagnosticAux8Id: string;
  /** Gets the diagnostic auxiliary module failure identifier. */
  diagnosticAuxiliaryModuleFailureId: string;
  /** Gets the diagnostic average fuel economy identifier. */
  diagnosticAverageFuelEconomyId: string;
  /** Gets the diagnostic average fuel economy natural gas identifier. */
  diagnosticAverageFuelEconomynaturalGasId: string;
  /** Gets the diagnostic battery current identifier. */
  diagnosticBatteryCurrentId: string;
  /** Gets the diagnostic battery temperature identifier. */
  diagnosticBatteryTemperatureId: string;
  /** Gets the diagnostic Bluetooth Ammonia (NH3) concentration identifier. */
  diagnosticBluetoothAmmoniaConcentrationId: string;
  /** Gets the diagnostic Bluetooth beacon battery level identifier. */
  diagnosticBluetoothBeaconBatteryLevelId: string;
  /** Gets the diagnostic Bluetooth beacon category identifier. */
  diagnosticBluetoothBeaconCategoryId: string;
  /** Gets the diagnostic Bluetooth beacon in range identifier. */
  diagnosticBluetoothBeaconInRangeId: string;
  /** Gets the diagnostic Bluetooth beacon live altitude identifier. */
  diagnosticBluetoothBeaconLiveAltitudeId: string;
  /** Gets the diagnostic Bluetooth beacon live barometric pressure identifier. */
  diagnosticBluetoothBeaconLiveBarometricPressureId: string;
  /** Gets the diagnostic Bluetooth beacon live impact identifier. */
  diagnosticBluetoothBeaconLiveImpactId: string;
  /** Gets the diagnostic Bluetooth beacon live light identifier. */
  diagnosticBluetoothBeaconLiveLightId: string;
  /** Gets the diagnostic Bluetooth beacon live relative humidity identifier. */
  diagnosticBluetoothBeaconLiveRelativeHumidityId: string;
  /** Gets the diagnostic Bluetooth beacon live temperature identifier. */
  diagnosticBluetoothBeaconLiveTemperatureId: string;
  /**
   * Gets the diagnostic Bluetooth beacon particulate matter less than 10 micrometers
   * identifier.
   */
  diagnosticBluetoothBeaconParticulateMatter10MicronId: string;
  /** Gets the diagnostic Bluetooth beacon particulate matter less than 1 micrometer identifier. */
  diagnosticBluetoothBeaconParticulateMatter1MicronId: string;
  /**
   * Gets the diagnostic Bluetooth beacon particulate matter less than 2.5 micrometers
   * identifier.
   */
  diagnosticBluetoothBeaconParticulateMatter2P5MicronId: string;
  /** Gets the diagnostic Bluetooth Carbon Dioxide (CO2) concentration identifier. */
  diagnosticBluetoothCarbonDioxideConcentrationId: string;
  /** Gets the diagnostic Bluetooth Carbon Monoxide (CO) concentration identifier. */
  diagnosticBluetoothCarbonMonoxideConcentrationId: string;
  /** Gets the diagnostic Bluetooth generic timer for identifer 255. */
  diagnosticBluetoothCustomData255Id: string;
  /** Gets the diagnostic Bluetooth Ethanol (C2H5OH) concentration identifier. */
  diagnosticBluetoothEthanolConcentrationId: string;
  /** Gets the diagnostic Bluetooth fuel level identifier. */
  diagnosticBluetoothFuelLevelId: string;
  /** Gets the diagnostic Bluetooth generic byte for identifer 230. */
  diagnosticBluetoothGenericByte230Id: string;
  /** Gets the diagnostic Bluetooth generic byte for identifer 231. */
  diagnosticBluetoothGenericByte231Id: string;
  /** Gets the diagnostic Bluetooth generic byte for identifer 232. */
  diagnosticBluetoothGenericByte232Id: string;
  /** Gets the diagnostic Bluetooth generic byte for identifer 233. */
  diagnosticBluetoothGenericByte233Id: string;
  /** Gets the diagnostic Bluetooth generic byte for identifer 234. */
  diagnosticBluetoothGenericByte234Id: string;
  /** Gets the diagnostic Bluetooth generic byte for identifer 235. */
  diagnosticBluetoothGenericByte235Id: string;
  /** Gets the diagnostic Bluetooth generic byte for identifer 236. */
  diagnosticBluetoothGenericByte236Id: string;
  /** Gets the diagnostic Bluetooth generic byte for identifer 237. */
  diagnosticBluetoothGenericByte237Id: string;
  /** Gets the diagnostic Bluetooth generic byte for identifer 238. */
  diagnosticBluetoothGenericByte238Id: string;
  /** Gets the diagnostic Bluetooth generic byte for identifer 239. */
  diagnosticBluetoothGenericByte239Id: string;
  /** Gets the diagnostic Bluetooth generic timer for identifer 240. */
  diagnosticBluetoothGenericTimer240Id: string;
  /** Gets the diagnostic Bluetooth generic timer for identifer 241. */
  diagnosticBluetoothGenericTimer241Id: string;
  /** Gets the diagnostic Bluetooth generic timer for identifer 242. */
  diagnosticBluetoothGenericTimer242Id: string;
  /** Gets the diagnostic Bluetooth generic timer for identifer 243. */
  diagnosticBluetoothGenericTimer243Id: string;
  /** Gets the diagnostic Bluetooth generic timer for identifer 244. */
  diagnosticBluetoothGenericTimer244Id: string;
  /** Gets the diagnostic Bluetooth generic timer for identifer 245. */
  diagnosticBluetoothGenericTimer245Id: string;
  /** Gets the diagnostic Bluetooth generic timer for identifer 246. */
  diagnosticBluetoothGenericTimer246Id: string;
  /** Gets the diagnostic Bluetooth generic timer for identifer 247. */
  diagnosticBluetoothGenericTimer247Id: string;
  /** Gets the diagnostic Bluetooth generic timer for identifer 248. */
  diagnosticBluetoothGenericTimer248Id: string;
  /** Gets the diagnostic Bluetooth generic timer for identifer 249. */
  diagnosticBluetoothGenericTimer249Id: string;
  /** Gets the diagnostic Bluetooth Hydrogen (H2) concentration identifier. */
  diagnosticBluetoothHydrogenConcentrationId: string;
  /** Gets the diagnostic Bluetooth Methane (CH4) concentration identifier. */
  diagnosticBluetoothMethaneConcentrationId: string;
  /** Gets the diagnostic Bluetooth Nitric Oxide (NO) concentration identifier. */
  diagnosticBluetoothNitricOxideConcentrationId: string;
  /** Gets the diagnostic Bluetooth Nitrogen Dioxide (NO2) concentration identifier. */
  diagnosticBluetoothNitrogenDioxideConcentrationId: string;
  /** Gets the diagnostic bootloader update has failed identifier. */
  diagnosticBootloaderUpdateHasFailedId: string;
  /** Gets the diagnostic brake pedal on identifier. */
  diagnosticBrakePedalOnId: string;
  /** Gets the diagnostic brake temperature identifier. */
  diagnosticBrakeTemperatureId: string;
  /** Gets the diagnostic bus access door identifier. */
  diagnosticBusAccessDoorId: string;
  /** Gets the diagnostic CAB interior temperature identifier. */
  diagnosticCabInteriorTemperatureId: string;
  /** Gets the diagnostic CANBUS disabled identifier. */
  diagnosticCanBusDisabledId: string;
  /** Gets the diagnostic CANBUS excessive listen identifier. */
  diagnosticCanBusExcessiveListenId: string;
  /** Gets the diagnostic CANBUS failed to initialize identifier. */
  diagnosticCanBusFailedToInitializeId: string;
  /** Gets the diagnostic CANBUS oscillating active passive identifier. */
  diagnosticCanBusOscillatingActivePassiveId: string;
  /** Gets the diagnostic CANBUS short identifier. */
  diagnosticCanBusShortId: string;
  /** Gets the diagnostic CAN mode initialization failure identifier. */
  diagnosticCanModeInitializationFailureId: string;
  /** Gets the diagnostic can transmit error count exceeded identifier. */
  diagnosticCanTransmitErrorCountExceededId: string;
  /** Gets the diagnostic change clean exhaust filter warning light identifier. */
  diagnosticChangeCleanExhaustFilterWarningLightId: string;
  /** Gets the diagnostic change fuel filter warning light identifier. */
  diagnosticChangeFuelFilterWarningLightId: string;
  /** Gets the diagnostic charge state identifier. */
  diagnosticChargeStateId: string;
  /** Gets the diagnostic winter operation controller status. */
  diagnosticControllerStatusId: string;
  /** Gets the diagnostic coolant level identifier. */
  diagnosticCoolantLevelId: string;
  /** Gets the diagnostic cranking voltage identifier. */
  diagnosticCrankingVoltageId: string;
  /** Gets the diagnostic cruise control active identifier. */
  diagnosticCruiseControlActiveId: string;
  /** Gets the diagnostic cruise control enabled identifier. */
  diagnosticCruiseControlEnabledId: string;
  /** Gets the diagnostic dash warning light amber lamp identifier. */
  diagnosticDashWarningLightAmberLampId: string;
  /** Gets the diagnostic dash warning light protect lamp identifier. */
  diagnosticDashWarningLightProtectLampId: string;
  /** Gets the diagnostic dash warning light red lamp identifier. */
  diagnosticDashWarningLightRedLampId: string;
  /** Gets the diagnostic device disabled identifier. */
  diagnosticDeviceDisabledId: string;
  /** Gets the diagnostic device has been unplugged identifier. */
  diagnosticDeviceHasBeenUnpluggedId: string;
  /** Gets the diagnostic device logging disabled identifier. */
  diagnosticDeviceLoggingDisabledId: string;
  /** Gets the diagnostic device oscillator issue identifier. */
  diagnosticDeviceOscillatorIssueId: string;
  /** Gets the diagnostic device power change identifier. */
  diagnosticDevicePowerChangeId: string;
  /** Gets the diagnostic device restarted because all power was removed identifier. */
  diagnosticDeviceRestartedBecauseAllPowerWasRemovedId: string;
  /** Gets the diagnostic device restarted because of firmware update identifier. */
  diagnosticDeviceRestartedBecauseOfFirmwareUpdateId: string;
  /** Gets the diagnostic device restarted because of low voltage in power supply identifier. */
  diagnosticDeviceRestartedBecauseOfLowVoltageInPowerSupplyId: string;
  /** Gets the diagnostic device restarted due to internal reset condition identifier. */
  diagnosticDeviceRestartedDueToInternalResetConditionId: string;
  /** Gets the diagnostic device restarted due to internal watchdog condition identifier. */
  diagnosticDeviceRestartedDueToInternalWatchdogConditionId: string;
  /** Gets the diagnostic device total fuel identifier. */
  diagnosticDeviceTotalFuelId: string;
  /** Gets the diagnostic device total idle fuel identifier. */
  diagnosticDeviceTotalIdleFuelId: string;
  /** Gets the diagnostic diesel exhaust fluid identifier. */
  diagnosticDieselExhaustFluidId: string;
  /** Gets the diagnostic diesel particulate filter lamp identifier. */
  diagnosticDieselParticulateFilterLampId: string;
  /** Gets the diagnostic disabled excessive accelerometer data identifier. */
  diagnosticDisabledExcessiveAccelerometerDataId: string;
  /** Gets the diagnostic driver airbag deployed identifier. */
  diagnosticDriverAirbagDeployedId: string;
  /** Gets the diagnostic driver audible alert for idle shutdown timer identifier. */
  diagnosticDriverAudibleAlertForIdleShutdownTimerId: string;
  /** Gets the diagnostic driver seat belt identifier. */
  diagnosticDriverSeatbeltId: string;
  /** Gets the diagnostic electrical system rating identifier. */
  diagnosticElectricalSystemRatingId: string;
  /** Gets the electric vehicle battery total driving energy in identifier. Units: kWh */
  diagnosticElectricEnergyInId: string;
  /** Gets the electric vehicle battery total driving energy out identifier. Units: kWh */
  diagnosticElectricEnergyOutId: string;
  /** Gets the diagnostic id for electric vehicle battery power. */
  diagnosticElectricVehicleBatteryPowerId: string;
  /** Gets the diagnostic id for charge type (AC or DC). */
  diagnosticElectricVehicleChargingStateId: string;
  /** Gets the diagnostic id for the IsCharging signal */
  diagnosticElectricVehicleIsChargingId: string;
  /** Gets the diagnostic engine check fuel filler cap warning light identifier. */
  diagnosticEngineCheckFuelFillerCapWarningLightId: string;
  /** Gets the diagnostic engine coolant temperature identifier. */
  diagnosticEngineCoolantTemperatureId: string;
  /** Gets the diagnostic engine cooling fan speed identifier. */
  diagnosticEngineCoolingFanSpeedId: string;
  /** Gets the diagnostic engine data active identifier. */
  diagnosticEngineDataActiveId: string;
  /** Gets the diagnostic engine hot warning light identifier. */
  diagnosticEngineHotWarningLightId: string;
  /** Gets the diagnostic engine hours adjustment identifier. */
  diagnosticEngineHoursAdjustmentId: string;
  /** Gets the diagnostic engine hours identifier. */
  diagnosticEngineHoursId: string;
  /** Gets the diagnostic engine oil level identifier. */
  diagnosticEngineOilLevelId: string;
  /** Gets the diagnostic engine oil life remaining identifier. */
  diagnosticEngineOilLifeRemainingId: string;
  /** Gets the diagnostic engine oil starvation indicator on identifier. */
  diagnosticEngineOilStarvationIndicatorOnId: string;
  /** Gets the diagnostic engine oil temperature identifier. */
  diagnosticEngineOilTemperatureId: string;
  /** Gets the diagnostic engine on time identifier. */
  diagnosticEngineOnTimeId: string;
  /** Gets the diagnostic engine operating in reduced power mode warning light identifier. */
  diagnosticEngineOperatingInReducedPowerModeWarningLightId: string;
  /** Gets the diagnostic engine road speed identifier. */
  diagnosticEngineRoadSpeedId: string;
  /** Gets the diagnostic engine running due to vehicle remote starter identifier. */
  diagnosticEngineRunningDueToVehicleRemoteStarterId: string;
  /** Gets the diagnostic engine shutdown by idle timer identifier. */
  diagnosticEngineShutdownByIdleTimerId: string;
  /** Gets the diagnostic engine speed identifier. */
  diagnosticEngineSpeedId: string;
  /** Gets the diagnostic engine starting disabled warning light identifier. */
  diagnosticEngineStartingDisabledWarningLightId: string;
  /** Gets the diagnostic engine transmission oil temperature identifier. */
  diagnosticEngineTransmissionOilTemperatureId: string;
  /** Gets the diagnostic engine warning light identifier. */
  diagnosticEngineWarningLightId: string;
  /** Gets the diagnostic excessive accelerometer events identifier. */
  diagnosticExcessiveAccelerometerEventsId: string;
  /** Gets the diagnostic excessive accelerometer events over accident threshold identifier. */
  diagnosticExcessiveAccelerometerEventsOverAccidentThresholdId: string;
  /** Gets the diagnostic excessive accelerometer logs in a single event identifier. */
  diagnosticExcessiveAccelerometerLogsInASingleEventId: string;
  /** Gets the diagnostic excessive logging detected identifier. */
  diagnosticExcessiveLoggingDetectedId: string;
  /** Gets the diagnostic exhaust differential pressure identifier. */
  diagnosticExhaustDifferentialPressureId: string;
  /** Gets the diagnostic first row middle seat belt identifier. */
  diagnosticFirstRowMiddleSeatbeltId: string;
  /** Gets the diagnostic flash error count identifier. */
  diagnosticFlashErrorCountId: string;
  /** Gets the diagnostic flashing amber light identifier. */
  diagnosticFlashingAmberLightId: string;
  /** Gets the diagnostic flashing red light identifier. */
  diagnosticFlashingRedLightId: string;
  /** Gets the diagnostic flash memory failure identifier. */
  diagnosticFlashMemoryFailureId: string;
  /** Gets the diagnostic Ford ISO protocol detected identifier. */
  diagnosticFordIsoProtocolDetectedId: string;
  /** Gets the diagnostic frontal impact pretensioner severity achieved identifier. */
  diagnosticFrontalImpactPretensionerSeverityAchievedId: string;
  /** Gets the diagnostic frontal impact stage1 severity achieved identifier. */
  diagnosticFrontalImpactStage1SeverityAchievedId: string;
  /** Gets the diagnostic frontal impact stage2 severity achieved identifier. */
  diagnosticFrontalImpactStage2SeverityAchievedId: string;
  /** Gets the diagnostic fuel alcohol composition identifier. */
  diagnosticFuelAlcoholCompositionId: string;
  /** Gets the diagnostic fuel filter life remaining identifier. */
  diagnosticFuelFilterLifeRemainingId: string;
  /** Gets the diagnostic fuel level identifier. */
  diagnosticFuelLevelId: string;
  /** Gets the diagnostic fuel tank capacity identifier. */
  diagnosticFuelTankCapacityId: string;
  /** Gets the diagnostic fuel units identifier. */
  diagnosticFuelUnitsId: string;
  /** Gets the diagnostic gear position identifier. */
  diagnosticGearPositionId: string;
  /** Gets the diagnostic general vehicle warning light identifier. */
  diagnosticGeneralVehicleWarningLightId: string;
  /** Gets the diagnostic Geotab driver key read error identifier. */
  diagnosticGeotabDriverKeyReadErrorId: string;
  /** Gets the diagnostic GMLAN high speed engine protocol detected identifier. */
  diagnosticGmlanHighspeedEngineProtocolDetectedId: string;
  /** Gets the diagnostic GMLAN low speed engine protocol detected identifier. */
  diagnosticGmlanLowspeedEngineProtocolDetectedId: string;
  /** Gets the diagnostic GM SWC low speed protocol detected identifier. */
  diagnosticGmSwcLowSpeedProtocolDetectedId: string;
  /** Gets the diagnostic GO device voltage identifier. */
  diagnosticGoDeviceVoltageId: string;
  /** Gets the diagnostic GPS antenna short circuit identifier. */
  diagnosticGpsAntennaShortCircuitId: string;
  /** Gets the diagnostic GPS antenna unplugged identifier. */
  diagnosticGpsAntennaUnpluggedId: string;
  /** Gets the diagnostic GPS configuration retry identifier. */
  diagnosticGpsConfigurationRetryId: string;
  /** Gets the diagnostic GPS log reason. */
  diagnosticGpsLogReasonId: string;
  /** Gets the diagnostic GPS not responding identifier. */
  diagnosticGpsNotRespondingId: string;
  /** Gets the diagnostic hard corner identifier. */
  diagnosticHardCornerId: string;
  /** Gets the diagnostic harness detected6 pin identifier. */
  diagnosticHarnessDetected6PinId: string;
  /** Gets the diagnostic harness detected9 pin identifier. */
  diagnosticHarnessDetected9PinId: string;
  /** Gets the diagnostic harsh acceleration identifier. */
  diagnosticHarshAccelerationId: string;
  /** Gets the diagnostic harsh brake identifier. */
  diagnosticHarshBrakeId: string;
  /** Gets the diagnostic high voltage while ignition off identifier. */
  diagnosticHighVoltageWhileIgnitionOffId: string;
  /** Gets the diagnostic Honda IDO engine protocol detected identifier. */
  diagnosticHondaIsoEngineProtocolDetectedId: string;
  /** Gets the diagnostic hybrid engine status identifier. */
  diagnosticHybridEngineStatusId: string;
  /** Gets the diagnostic hybrid vehicle detected identifier. */
  diagnosticHybridVehicleDetectedId: string;
  /** Gets the diagnostic idle shutdown timer active identifier. */
  diagnosticIdleShutdownTimerActiveId: string;
  /** Gets the diagnostic idle shutdown timer enabled identifier. */
  diagnosticIdleShutdownTimerEnabledId: string;
  /** Gets the diagnostic idle shutdown timer override identifier. */
  diagnosticIdleShutdownTimerOverrideId: string;
  /** Gets the diagnostic ignition identifier. */
  diagnosticIgnitionId: string;
  /** Gets the diagnostic instantaneous fuel economy identifier. */
  diagnosticInstantaneousFuelEconomyId: string;
  /** Gets the diagnostic instantaneous fuel rate identifier. */
  diagnosticInstantaneousFuelRateId: string;
  /** Gets the diagnostic intermittent connection communications identifier. */
  diagnosticIntermittentConnectionCommunicationsId: string;
  /** Gets the diagnostic internal clock stopped identifier. */
  diagnosticInternalClockStoppedId: string;
  /** Gets the diagnostic invalid device type detected identifier. */
  diagnosticInvalidDeviceTypeDetectedId: string;
  /** Gets the diagnostic invalid driver identifier. */
  diagnosticInvalidDriverIdId: string;
  /** Gets the diagnostic invalid GPS messages received identifier. */
  diagnosticInvalidGpsMessagesReceivedId: string;
  /** Gets the diagnostic invalid opcode reset identifier. */
  diagnosticInvalidOpcodeResetId: string;
  /** Gets the diagnostic Iridium accelerometer event identifier. */
  diagnosticIridiumAccelerometerEventId: string;
  /** Gets the diagnostic Iridium low voltage identifier. */
  diagnosticIridiumLowVoltageId: string;
  /** Gets the diagnostic ISO14230 legacy engine protocol detected identifier. */
  diagnosticIso14230LegacyEngineProtocolDetectedId: string;
  /** Gets the diagnostic ISO9141 legacy engine protocol detected identifier. */
  diagnosticIso9141LegacyEngineProtocolDetectedId: string;
  /** Gets the diagnostic J1708 ALDL harness detected identifier. */
  diagnosticJ1708AldlHarnessDetectedId: string;
  /** Gets the diagnostic J1708 engine hours identifier. */
  diagnosticJ1708EngineHoursId: string;
  /** Gets the diagnostic J1708 engine protocol detected identifier. */
  diagnosticJ1708EngineProtocolDetectedId: string;
  /** Gets the diagnostic J1708 total vehicle distance identifier. */
  diagnosticJ1708TotalVehicleDistanceId: string;
  /** Gets the diagnostic J1850 PWM legacy engine protocol detected identifier. */
  diagnosticJ1850PwmLegacyEngineProtocolDetectedId: string;
  /** Gets the diagnostic J1850 VPW legacy engine protocol detected identifier. */
  diagnosticJ1850VpwLegacyEngineProtocolDetectedId: string;
  /** Gets the diagnostic J1939 CAN engine protocol detected identifier. */
  diagnosticJ1939CanEngineProtocolDetectedId: string;
  /** Gets the diagnostic J1939 engine hours identifier. */
  diagnosticJ1939EngineHoursId: string;
  /** Gets the diagnostic J1939 total vehicle distance identifier. */
  diagnosticJ1939TotalVehicleDistanceId: string;
  /** Gets the diagnostic left side airbag deployed identifier. */
  diagnosticLeftSideAirbagDeployedId: string;
  /** Gets the diagnostic left side severity achieved identifier. */
  diagnosticLeftSideSeverityAchievedId: string;
  /** Gets the diagnostic left turn signal identifier. */
  diagnosticLeftTurnSignalId: string;
  /** Gets the diagnostic liquid material rate. */
  diagnosticLiquidMaterialRateId: string;
  /** Gets the diagnostic liquid material type. */
  diagnosticLiquidMaterialTypeId: string;
  /** Gets the diagnostic third party (custom device) log data buffer overrun value. */
  diagnosticLogDataBufferOverrunId: string;
  /** Gets the diagnostic low priority warning light identifier. */
  diagnosticLowPriorityWarningLightId: string;
  /** Gets the diagnostic memory allocation error identifier. */
  diagnosticMemoryAllocationErrorId: string;
  /** Gets the diagnostic memory pointer error identifier. */
  diagnosticMemoryPointerErrorId: string;
  /** Gets the diagnostic OBDCAN 11 Bit 250 K engine protocol detected identifier. */
  diagnosticObdcan11Bit250KEngineProtocolDetectedId: string;
  /** Gets the diagnostic OBDCAN 11 Bit 500 K engine protocol detected identifier. */
  diagnosticObdcan11Bit500KEngineProtocolDetectedId: string;
  /** Gets the diagnostic OBDCAN 29 Bit 250 K engine protocol detected identifier. */
  diagnosticObdcan29Bit250KEngineProtocolDetectedId: string;
  /** Gets the diagnostic OBDCAN 29 Bit 500 K engine protocol detected identifier. */
  diagnosticObdcan29Bit500KEngineProtocolDetectedId: string;
  /** Gets the diagnostic OBD odometer reader identifier. */
  diagnosticObdOdometerReaderId: string;
  /** Gets the diagnostic OBD port alert status identifier. */
  diagnosticObdPortAlertStatusId: string;
  /** Gets the diagnostic odometer adjustment identifier. */
  diagnosticOdometerAdjustmentId: string;
  /** Gets the diagnostic odometer identifier. */
  diagnosticOdometerId: string;
  /** Gets the diagnostic oil change due warning light identifier. */
  diagnosticOilChangeDueWarningLightId: string;
  /** Gets the diagnostic oil level low warning light identifier. */
  diagnosticOilLevelLowWarningLightId: string;
  /** Gets the diagnostic oil light on identifier. */
  diagnosticOilLightOnId: string;
  /** Gets the diagnostic oil pressure identifier. */
  diagnosticOilPressureId: string;
  /**
   * Gets the diagnostic id for the power going into the on-board charger from an AC
   * EVSE (W).
   */
  diagnosticOnBoardChargerACInputPowerId: string;
  /** Gets the diagnostic id for AC voltage. */
  diagnosticOnBoardChargerAcInputVoltageId: string;
  /**
   * Gets the diagnostic id for the power coming out of the on-board charger in the form
   * of DC (W).
   */
  diagnosticOnBoardChargerDCOutputPowerId: string;
  /** Gets the diagnostic outside temperature identifier. */
  diagnosticOutsideTemperatureId: string;
  /** Gets the diagnostic panic identifier. */
  diagnosticPanicId: string;
  /** Gets the diagnostic parking brake identifier. */
  diagnosticParkingBrakeId: string;
  /** Gets the diagnostic passenger airbag deployed identifier. */
  diagnosticPassengerAirbagDeployedId: string;
  /** Gets the diagnostic passenger occupancy identifier. */
  diagnosticPassengerOccupancyId: string;
  /** Gets the diagnostic passenger seat belt violation identifier. */
  diagnosticPassengerSeatbeltViolationId: string;
  /** Gets the diagnostic position valid identifier from device. */
  diagnosticPositionValidAtDeviceId: string;
  /** Gets the diagnostic position valid identifier. */
  diagnosticPositionValidId: string;
  /** Gets the diagnostic possible collision detected identifier. */
  diagnosticPossibleCollisionDetectedId: string;
  /** Gets the diagnostic potential bad install identifier. */
  diagnosticPotentialBadInstallId: string;
  /** Gets the diagnostic power takeoff engaged identifier. */
  diagnosticPowerTakeoffEngagedId: string;
  /** Gets the diagnostic power takeoff total fuel used identifier. */
  diagnosticPowerTakeoffTotalFuelUsedId: string;
  /** Gets the diagnostic pre wet material rate. */
  diagnosticPreWetMaterialRateId: string;
  /** Gets the diagnostic pre wet material type. */
  diagnosticPreWetMaterialTypeId: string;
  /** Gets the diagnostic PTO enabled identifier. */
  diagnosticPtoEnabledId: string;
  /** Gets the diagnostic ram memory failure id. */
  diagnosticRamFailureId: string;
  /** Gets the diagnostic raw odometer identifier. */
  diagnosticRawOdometerId: string;
  /** Gets the diagnostic rear impact severity achieved identifier. */
  diagnosticRearImpactSeverityAchievedId: string;
  /** Gets the diagnostic id for peripheral device: reefer temp zone 1. */
  diagnosticReeferTemperatureZone1Id: string;
  /** Gets the diagnostic id for peripheral device: reefer temp zone 2. */
  diagnosticReeferTemperatureZone2Id: string;
  /** Gets the diagnostic id for peripheral device: reefer temp zone 3. */
  diagnosticReeferTemperatureZone3Id: string;
  /** Gets the diagnostic id for peripheral device: reefer temp zone 4. */
  diagnosticReeferTemperatureZone4Id: string;
  /** Gets the diagnostic restarted the modem manager state machine identifier. */
  diagnosticRestartedTheModemManagerStateMachineId: string;
  /** Gets the diagnostic restarted the modem state machine identifier. */
  diagnosticRestartedTheModemStateMachineId: string;
  /** Gets the diagnostic restarted the radio manager state machine identifier. */
  diagnosticRestartedTheRadioManagerStateMachineId: string;
  /** Gets the diagnostic restarted the radio state machine identifier. */
  diagnosticRestartedTheRadioStateMachineId: string;
  /** Gets the diagnostic restarted the WIFI manager state machine identifier. */
  diagnosticRestartedTheWifiManagerStateMachineId: string;
  /** Gets the diagnostic restarted the WIFI state machine identifier. */
  diagnosticRestartedTheWifiStateMachineId: string;
  /** Gets the diagnostic RF module failure identifier. */
  diagnosticRfModuleFailureId: string;
  /** Gets the diagnostic RF module mac address error identifier. */
  diagnosticRfModuleMacAddressErrorId: string;
  /** Gets the diagnostic right side airbag deployed identifier. */
  diagnosticRightSideAirbagDeployedId: string;
  /** Gets the diagnostic right side severity achieved identifier. */
  diagnosticRightSideSeverityAchievedId: string;
  /** Gets the diagnostic right turn signal identifier. */
  diagnosticRightTurnSignalId: string;
  /** Gets the diagnostic rollover severity achieved identifier. */
  diagnosticRolloverSeverityAchievedId: string;
  /** Gets the diagnostic secondary can bus failed to initialize identifier. */
  diagnosticSecondaryCanBusFailedToInitializeId: string;
  /** Gets the diagnostic second row left seat belt identifier. */
  diagnosticSecondRowLeftSeatbeltId: string;
  /** Gets the diagnostic second row middle seat belt identifier. */
  diagnosticSecondRowMiddleSeatbeltId: string;
  /** Gets the diagnostic second row right seat belt identifier. */
  diagnosticSecondRowRightSeatbeltId: string;
  /** Gets the diagnostic slave processor failure identifier. */
  diagnosticSlaveProcessorFailureId: string;
  /** Gets the diagnostic solid material active. */
  diagnosticSolidMaterialActiveId: string;
  /** Gets the diagnostic solid material rate. */
  diagnosticSolidMaterialRateId: string;
  /** Gets the diagnostic solid material type. */
  diagnosticSolidMaterialTypeId: string;
  /** Gets the diagnostic standard harness detected identifier. */
  diagnosticStandardHarnessDetectedId: string;
  /** Gets the diagnostic id for State of Charge (SOC). */
  diagnosticStateOfChargeId: string;
  /** Gets the diagnostic panic identifier. */
  diagnosticSystemAlertId: string;
  /** Gets the diagnostic third party (custom device) device power change value. */
  diagnosticThirdPartyDevicePowerChangeId: string;
  /** Gets the diagnostic third party (custom device) engine data active value. */
  diagnosticThirdPartyEngineDataActiveId: string;
  /** Gets the diagnostic engine road speed identifier. */
  diagnosticThirdPartyEngineRoadSpeedId: string;
  /** Gets the diagnostic third party (custom device) engine hours identifier. */
  diagnosticThirdPartyEngineRunTimeId: string;
  /** Gets the diagnostic log third party data buffer overrun value. */
  diagnosticThirdPartyLogDataBufferOverrunId: string;
  /** Gets the third party (custom device) diagnostic odometer identifier. */
  diagnosticThirdPartyOdometerId: string;
  /** Gets the diagnostic third row left seat belt identifier. */
  diagnosticThirdRowLeftSeatbeltId: string;
  /** Gets the diagnostic third row middle seat belt identifier. */
  diagnosticThirdRowMiddleSeatbeltId: string;
  /** Gets the diagnostic third row right seat belt identifier. */
  diagnosticThirdRowRightSeatbeltId: string;
  /** Gets the diagnostic tire pressure front left identifier. */
  diagnosticTirePressureFrontLeftId: string;
  /** Gets the diagnostic tire pressure front right identifier. */
  diagnosticTirePressureFrontRightId: string;
  /** Gets the diagnostic tire pressure rear left identifier. */
  diagnosticTirePressureRearLeftId: string;
  /** Gets the diagnostic tire pressure rear right identifier. */
  diagnosticTirePressureRearRightId: string;
  /** Gets the diagnostic tire pressure spare identifier. */
  diagnosticTirePressureSpareId: string;
  /** Gets the diagnostic tire warning light identifier. */
  diagnosticTireWarningLightId: string;
  /** Gets the diagnostic too many engine records identifier. */
  diagnosticTooManyEngineRecordsId: string;
  /** Gets the diagnostic too many logs in multilog identifier. */
  diagnosticTooManyLogsInMultilogId: string;
  /** Gets the diagnostic total air used identifier. */
  diagnosticTotalAirUsedId: string;
  /** Gets the diagnostic total fuel used identifier. */
  diagnosticTotalFuelUsedId: string;
  /** Gets the diagnostic total idle air used identifier. */
  diagnosticTotalIdleAirUsedId: string;
  /** Gets the diagnostic total idle fuel used identifier. */
  diagnosticTotalIdleFuelUsedId: string;
  /** Gets the diagnostic total idle hours identifier. */
  diagnosticTotalIdleHoursId: string;
  /** Gets the diagnostic id for total lifetime battery energy in during AC charging. */
  diagnosticTotalLifetimeBatteryEnergyInDuringACChargingId: string;
  /** Gets the diagnostic id for total lifetime battery energy in during DC charging. */
  diagnosticTotalLifetimeBatteryEnergyInDuringDCChargingId: string;
  /** Gets the diagnostic id for total lifetime battery energy out during AC charging. */
  diagnosticTotalLifetimeBatteryEnergyOutDuringACChargingId: string;
  /** Gets the diagnostic id for total lifetime battery energy out during DC charging. */
  diagnosticTotalLifetimeBatteryEnergyOutDuringDCChargingId: string;
  /** Gets the diagnostic id for total lifetime on board charger energy from an AC EVSE. */
  diagnosticTotalLifetimeOnBoardChargerEnergyInDuringACChargingInId: string;
  /**
   * Gets the diagnostic id for Electric vehicle on-board charger total energy out during
   * AC charging (since telematics device install).
   */
  diagnosticTotalLifetimeOnBoardChargerEnergyOutDuringACChargingId: string;
  /** Gets the diagnostic total PTO hours identifier. */
  diagnosticTotalPtoHoursId: string;
  /** Gets the diagnostic total trip fuel used identifier. */
  diagnosticTotalTripFuelUsedId: string;
  /** Gets the diagnostic total trip idle fuel used identifier. */
  diagnosticTotalTripIdleFuelUsedId: string;
  /** Gets the diagnostic Toyota ISO engine protocol detected identifier. */
  diagnosticToyotaIsoEngineProtocolDetectedId: string;
  /** Gets the diagnostic traction control system active identifier. */
  diagnosticTractionControlSystemActiveId: string;
  /** Gets the diagnostic traction control system enabled identifier. */
  diagnosticTractionControlSystemEnabledId: string;
  /** Gets the diagnostic transmission oil change warning light identifier. */
  diagnosticTransmissionOilChangeWarningLightId: string;
  /** Gets the diagnostic transmission oil level identifier. */
  diagnosticTransmissionOilLevelId: string;
  /** Gets the diagnostic trip distance identifier. */
  diagnosticTripDistanceId: string;
  /** Gets the diagnostic truck liquid material total. */
  diagnosticTruckLiquidMaterialTotalId: string;
  /** Gets the diagnostic truck pre wet material total. */
  diagnosticTruckPreWetMaterialTotalId: string;
  /** Gets the diagnostic truck solid material total. */
  diagnosticTruckSolidMaterialTotalId: string;
  /** Gets the diagnostic undefined engine protocol detected identifier. */
  diagnosticUndefinedEngineProtocolDetectedId: string;
  /** Gets the diagnostic vehicle ABS system failed identifier. */
  diagnosticVehicleAbsSystemFailedId: string;
  /** Gets the diagnostic vehicle active (idle or driving) id. */
  diagnosticVehicleActiveId: string;
  /** Gets the diagnostic vehicle AWD system failed identifier. */
  diagnosticVehicleAwdSystemFailedId: string;
  /** Gets the diagnostic vehicle battery low voltage identifier. */
  diagnosticVehicleBatteryLowVoltageId: string;
  /** Gets the diagnostic vehicle programmed cruise high speed limit identifier. */
  diagnosticVehicleProgrammedCruiseHighSpeedLimitId: string;
  /** Gets the diagnostic vehicle programmed maximum road speed limit enabled identifier. */
  diagnosticVehicleProgrammedMaximumRoadspeedLimitEnabledId: string;
  /** Gets the diagnostic vehicle programmed maximum road speed limit identifier. */
  diagnosticVehicleProgrammedMaximumRoadspeedLimitId: string;
  /** Gets the diagnostic VIN request failure identifier. */
  diagnosticVinRequestFailureId: string;
  /** Gets the diagnostic washer fluid level identifier. */
  diagnosticWasherFluidLevelId: string;
  /** Gets the diagnostic water detected in fuel warning light identifier. */
  diagnosticWaterDetectedInFuelWarningLightId: string;
  /** Gets the diagnostic wifi hotspot data usage identifier. */
  diagnosticWiFiHotspotDataUsageId: string;
  /** Gets DisplayMeasurementProfile United States Identity. */
  displayMeasurementProfileAfricaId: string;
  /** Gets DisplayMeasurementProfile Asia Identity. */
  displayMeasurementProfileAsiaId: string;
  /** Gets DisplayMeasurementProfile Australia and New Zealand Identity. */
  displayMeasurementProfileAustraliaNewZealandId: string;
  /** Gets DisplayMeasurementProfile Canada Identity. */
  displayMeasurementProfileCanadaId: string;
  /** Gets DisplayMeasurementProfile Central and South America Identity. */
  displayMeasurementProfileCentralSouthAmericaId: string;
  /** Gets DisplayMeasurementProfile Default Identity. */
  displayMeasurementProfileDefaultId: string;
  /** Gets DisplayMeasurementProfile Europe Identity. */
  displayMeasurementProfileEuropeId: string;
  /** Gets DisplayMeasurementProfile Mexico Identity. */
  displayMeasurementProfileMexicoId: string;
  /** Gets DisplayMeasurementProfile UK Identity. */
  displayMeasurementProfileUKId: string;
  /** Gets DisplayMeasurementProfile United States Identity. */
  displayMeasurementProfileUnitedStatesId: string;
  /** Gets Identity DisplayUnitOfMeasure. */
  displayUnitOfMeasureIdentityId: string;
  /** Gets the distribution list import/export identifier. */
  distributionListImportExportId: string;
  /** Gets the distribution list news identifier. */
  distributionListNewsId: string;
  /** Gets the email template default application exception identifier. */
  emailTemplateDefaultApplicationExceptionId: string;
  /** Gets the email template default exception rule identifier. */
  emailTemplateDefaultExceptionRuleId: string;
  /** Gets the engine type generic identifier. */
  engineTypeGenericId: string;
  /** Gets the engine type none identifier. */
  engineTypeNoneId: string;
  /** Gets the event type lease expiry identifier. */
  eventTypeLeaseExpiryId: string;
  /** Gets the event type license plate expiry identifier. */
  eventTypeLicensePlateExpiryId: string;
  /** Gets the event type oil change identifier. */
  eventTypeOilChangeId: string;
  /** Gets the event type tire rotation identifier. */
  eventTypeTireRotationId: string;
  /** Gets the group company identifier. */
  groupCompanyId: string;
  /** Gets the group defects identifier. */
  groupDefectsId: string;
  /** Gets the group drive user security identifier. */
  groupDriveUserSecurityId: string;
  /** Gets the group everything security identifier. */
  groupEverythingSecurityId: string;
  /** Gets the group nothing security identifier. */
  groupNothingSecurityId: string;
  /** Gets the group private user identifier. */
  groupPrivateUserId: string;
  /** Gets the group root identifier. */
  groupRootId: string;
  /** Gets the group security identifier. */
  groupSecurityId: string;
  /** Gets the group supervisor security identifier. */
  groupSupervisorSecurityId: string;
  /** Gets the group trailer defects identifier. */
  groupTrailerDefectsId: string;
  /** Gets the group user security identifier. */
  groupUserSecurityId: string;
  /** Gets the group vehicle defects identifier. */
  groupVehicleDefectsId: string;
  /** Gets the group view only security identifier. */
  groupViewOnlySecurityId: string;
  /** Gets Alaska Passenger 70-hour/7-day */
  hosRuleSetAlaskaPassenger7Day: string;
  /** Gets Alaska Passenger 80-hour/8-day */
  hosRuleSetAlaskaPassenger8Day: string;
  /** Gets Alaska Property 70-hour/7-day */
  hosRuleSetAlaskaProperty7Day: string;
  /** Gets Alaska Property 70-hour/7-day Sleeper */
  hosRuleSetAlaskaProperty7DaySleeper: string;
  /** Gets Alaska Property 80-hour/8-day */
  hosRuleSetAlaskaProperty8Day: string;
  /** Gets Alaska Property 80-hour/8-day Sleeper */
  hosRuleSetAlaskaProperty8DaySleeper: string;
  /** Gets hos Ruleset Id America7Day. */
  hosRuleSetAmerica7Day: string;
  /** Gets hos Ruleset Id America7DayBig. */
  hosRuleSetAmerica7DayBig: string;
  /** Gets hos Ruleset Id America7DayBigSleeper. */
  hosRuleSetAmerica7DayBigSleeper: string;
  /** Gets hos Ruleset Id 7-day without 34-h. */
  hosRuleSetAmerica7DayNo34h: string;
  /** Gets hos Ruleset Id 7-day without 34-h with Sleeper. */
  hosRuleSetAmerica7DayNo34hSleeper: string;
  /** Gets hos Ruleset Id America7DayPassenger. */
  hosRuleSetAmerica7DayPassenger: string;
  /** Gets hos Ruleset Id America7DaySleeper. */
  hosRuleSetAmerica7DaySleeper: string;
  /** Gets hos Ruleset Id America8Day. */
  hosRuleSetAmerica8Day: string;
  /** Gets hos Ruleset Id America8DayBig. */
  hosRuleSetAmerica8DayBig: string;
  /** Gets hos Ruleset Id America8DayBigSleeper. */
  hosRuleSetAmerica8DayBigSleeper: string;
  /** Gets hos Ruleset Id 8-day without 34-h. */
  hosRuleSetAmerica8DayNo34h: string;
  /** Gets hos Ruleset Id 8-day without 34-h with Sleeper. */
  hosRuleSetAmerica8DayNo34hSleeper: string;
  /** Gets hos Ruleset Id America8DayPassenger. */
  hosRuleSetAmerica8DayPassenger: string;
  /** Gets hos Ruleset Id America8DaySleeper. */
  hosRuleSetAmerica8DaySleeper: string;
  /** Gets hos Ruleset Id America Non-CDL 7 day. */
  hosRuleSetAmericaNonCdlShortHaul7Day: string;
  /** Gets hos Ruleset Id America Non-CDL 8 day. */
  hosRuleSetAmericaNonCdlShortHaul8Day: string;
  /** Gets hos Ruleset Id America No Rest Requirement 7 Day. */
  hosRuleSetAmericaNoRestRequirement7Day: string;
  /** Gets hos Ruleset Id America No Rest Requirement 7 Day Big. */
  hosRuleSetAmericaNoRestRequirement7DayBig: string;
  /** Gets hos Ruleset Id America No Rest Requirement 7 Day Big with Sleeper. */
  hosRuleSetAmericaNoRestRequirement7DayBigSleeper: string;
  /** Gets hos Ruleset Id America No Rest Requirement 7 Day with Sleeper. */
  hosRuleSetAmericaNoRestRequirement7DaySleeper: string;
  /** Gets hos Ruleset Id America No Rest Requirement 8 Day. */
  hosRuleSetAmericaNoRestRequirement8Day: string;
  /** Gets hos Ruleset Id America No Rest Requirement 8 Day Big. */
  hosRuleSetAmericaNoRestRequirement8DayBig: string;
  /** Gets hos Ruleset Id America No Rest Requirement 8 Day Big with Sleeper. */
  hosRuleSetAmericaNoRestRequirement8DayBigSleeper: string;
  /** Gets hos Ruleset Id America No Rest Requirement 8 Day with Sleeper. */
  hosRuleSetAmericaNoRestRequirement8DaySleeper: string;
  /** Gets hos Ruleset Id AmericaSalesperson. */
  hosRuleSetAmericaSalesperson: string;
  /** Gets hos Ruleset Id AmericaSalespersonNonCdlShortHaul. */
  hosRuleSetAmericaSalespersonNonCdlShortHaul: string;
  /** Gets hos Ruleset Id AmericaShortHaul. */
  hosRuleSetAmericaShortHaul: string;
  /** Gets hos Ruleset Id AmericaShortHaul14hrWorkday. */
  hosRuleSetAmericaShortHaul14hrWorkday: string;
  /** Gets hos Ruleset Id AmericaShortHaul8Day. */
  hosRuleSetAmericaShortHaul8Day: string;
  /** Gets hos Ruleset Id AmericaShortHaul8Day14hrWorkday. */
  hosRuleSetAmericaShortHaul8Day14hrWorkday: string;
  /** Gets hos Ruleset Id Short-haul 8-day without 34-h. */
  hosRuleSetAmericaShortHaul8DayNo34h: string;
  /** Gets hos Ruleset Id Short-haul 7-day without 34-h. */
  hosRuleSetAmericaShortHaulNo34h: string;
  /** Gets hos Ruleset Id AmericaShortHaulPassenger. */
  hosRuleSetAmericaShortHaulPassenger: string;
  /** Gets hos Ruleset Id AmericaShortHaulPassenger8Day. */
  hosRuleSetAmericaShortHaulPassenger8Day: string;
  /** Gets hos Ruleset Id AmericaTexas. */
  hosRuleSetAmericaTexas: string;
  /** Gets hos Ruleset Id AmericaTexasShortHaul. */
  hosRuleSetAmericaTexasShortHaul: string;
  /** Gets hos Ruleset Id AmericaTexasShortHaul8Day. */
  hosRuleSetAmericaTexasShortHaul8Day: string;
  /** Gets hos Ruleset Id Brazil property short haul. */
  hosRuleSetBrazilShortHaul: string;
  /** Gets California Property Intrastate */
  hosRuleSetCalifornia8day: string;
  /** Gets hos Ruleset Id CaliforniaFarmProduct. */
  hosRuleSetCaliforniaFarmProduct: string;
  /** Gets hos Ruleset Id CaliforniaFarmProduct With Rest Requirement. */
  hosRuleSetCaliforniaFarmProductWithRestRequirement: string;
  /** Gets hos Ruleset Id CaliforniaFlammableLiquid. */
  hosRuleSetCaliforniaFlammableLiquid: string;
  /** Gets hos Ruleset Id CaliforniaFlammableLiquid With Rest Requirement. */
  hosRuleSetCaliforniaFlammableLiquidWithRestRequirement: string;
  /** Gets hos Ruleset Id CaliforniaPassenger. */
  hosRuleSetCaliforniaPassenger: string;
  /** Gets hos Ruleset Id CaliforniaProperty. */
  hosRuleSetCaliforniaProperty: string;
  /** Gets hos Ruleset Id CaliforniaSchoolPupil. */
  hosRuleSetCaliforniaSchoolPupil: string;
  /** Gets hos Ruleset Id CaliforniaSchoolPupil With Rest Requirement. */
  hosRuleSetCaliforniaSchoolPupilWithRestRequirement: string;
  /** Gets hos Ruleset Id CanadaCycleOne. */
  hosRuleSetCanadaCycleOne: string;
  /** Gets hos Ruleset Id CanadaCycleOneTeam. */
  hosRuleSetCanadaCycleOneTeam: string;
  /** Gets hos Ruleset Id CanadaCycleTwo. */
  hosRuleSetCanadaCycleTwo: string;
  /** Gets hos Ruleset Id CanadaCycleTwoTeam. */
  hosRuleSetCanadaCycleTwoTeam: string;
  /** Gets hos Ruleset Id CanadaNorthOf60CycleOne. */
  hosRuleSetCanadaNorthOf60CycleOne: string;
  /** Gets hos Ruleset Id Canada North of 60 Cycle Two. */
  hosRuleSetCanadaNorthOf60CycleTwo: string;
  /** Gets hos Ruleset Id Carrier Exemption. */
  hosRuleSetCarrierExemption: string;
  /** Gets hos Ruleset Id Florida 7-day. */
  hosRuleSetFlorida7Day: string;
  /** Gets hos Ruleset Id Florida 8-day. */
  hosRuleSetFlorida8Day: string;
  /** Gets hos Ruleset Id Florida Short-haul 7 day. */
  hosRuleSetFloridaShortHaul7Day: string;
  /** Gets hos Ruleset Id Florida Short-haul 8 day. */
  hosRuleSetFloridaShortHaul8Day: string;
  /** Gets Maryland Short Haul 70-hour/7-day */
  hosRuleSetMarylandShortHaul7Day: string;
  /** Gets Maryland Short Haul 80-hour/8-day */
  hosRuleSetMarylandShortHaul8Day: string;
  /** Gets Nebraska 70-hour/7-day */
  hosRuleSetNebraska7day: string;
  /** Gets Nebraska 80-hour/8-day */
  hosRuleSetNebraska8day: string;
  /** Gets hos Ruleset Id None. */
  hosRuleSetNone: string;
  /** Gets hos Ruleset Id None Big Day. */
  hosRuleSetNone8Day: string;
  /** Gets hos Ruleset Id NoneCanada (South of 60). */
  hosRuleSetNoneCanada: string;
  /** Gets North Dakota 70-hour/7-day */
  hosRuleSetNorthDakota7Day: string;
  /** Gets North Dakota Short Haul 70-hour/7-day */
  hosRuleSetNorthDakotaShortHaul7Day: string;
  /** Gets hos Ruleset Id OilTransport7Day. */
  hosRuleSetOilTransport7Day: string;
  /** Gets hos Ruleset Id OilTransport7DayBig. */
  hosRuleSetOilTransport7DayBig: string;
  /** Gets hos Ruleset Id OilTransport7DayBigSleeper. */
  hosRuleSetOilTransport7DayBigSleeper: string;
  /** Gets hos Ruleset Id OilTransport7DaySleeper. */
  hosRuleSetOilTransport7DaySleeper: string;
  /** Gets hos Ruleset Id OilTransport8Day. */
  hosRuleSetOilTransport8Day: string;
  /** Gets hos Ruleset Id OilTransport8DayBig. */
  hosRuleSetOilTransport8DayBig: string;
  /** Gets hos Ruleset Id OilTransport8DayBigSleeper. */
  hosRuleSetOilTransport8DayBigSleeper: string;
  /** Gets hos Ruleset Id OilTransport8DaySleeper. */
  hosRuleSetOilTransport8DaySleeper: string;
  /** Gets hos Ruleset Id OilTransportCalifornia8day. */
  hosRuleSetOilTransportCalifornia8day: string;
  /** Gets hos Ruleset Id OilTransportCaliforniaProperty. */
  hosRuleSetOilTransportCaliforniaProperty: string;
  /** Gets hos Ruleset Id America No Rest Requirement 7 Day with 24 hour reset. */
  hosRuleSetOilTransportNoRestRequirement7Day: string;
  /** Gets hos Ruleset Id America No Rest Requirement 7 Day Big with 24 hour reset. */
  hosRuleSetOilTransportNoRestRequirement7DayBig: string;
  /**
   * Gets hos Ruleset Id America No Rest Requirement 7 Day Big with 24 hour reset and
   * split sleeper.
   */
  hosRuleSetOilTransportNoRestRequirement7DayBigSleeper: string;
  /**
   * Gets hos Ruleset Id America No Rest Requirement 7 Day with 24 hour reset and split
   * sleeper.
   */
  hosRuleSetOilTransportNoRestRequirement7DaySleeper: string;
  /** Gets hos Ruleset Id America No Rest Requirement 8 Day with 24 hour reset. */
  hosRuleSetOilTransportNoRestRequirement8Day: string;
  /** Gets hos Ruleset Id America No Rest Requirement 8 Day Big with 24 hour reset. */
  hosRuleSetOilTransportNoRestRequirement8DayBig: string;
  /**
   * Gets hos Ruleset Id America No Rest Requirement 8 Day Big with 24 hour reset and
   * split sleeper.
   */
  hosRuleSetOilTransportNoRestRequirement8DayBigSleeper: string;
  /**
   * Gets hos Ruleset Id America No Rest Requirement 8 Day with 24 hour reset and split
   * sleeper.
   */
  hosRuleSetOilTransportNoRestRequirement8DaySleeper: string;
  /** Gets hos Ruleset Id OilTransportShortHaul. */
  hosRuleSetOilTransportShortHaul: string;
  /** Gets hos Ruleset Id OilTransportShortHaul14hrWorkday. */
  hosRuleSetOilTransportShortHaul14hrWorkday: string;
  /** Gets hos Ruleset Id OilTransportShortHaul8Day. */
  hosRuleSetOilTransportShortHaul8Day: string;
  /** Gets hos Ruleset Id OilTransportShortHaul8Day14hrWorkday. */
  hosRuleSetOilTransportShortHaul8Day14hrWorkday: string;
  /** Gets hos Ruleset Id OilTransportTexas. */
  hosRuleSetOilTransportTexas: string;
  /** Gets hos Ruleset Id OilWell7Day. */
  hosRuleSetOilWell7Day: string;
  /** Gets hos Ruleset Id OilWell7DayBig. */
  hosRuleSetOilWell7DayBig: string;
  /** Gets hos Ruleset Id OilWell7DayBigSleeper. */
  hosRuleSetOilWell7DayBigSleeper: string;
  /** Gets hos Ruleset Id OilWell7DaySleeper. */
  hosRuleSetOilWell7DaySleeper: string;
  /** Gets hos Ruleset Id OilWell8Day. */
  hosRuleSetOilWell8Day: string;
  /** Gets hos Ruleset Id OilWell8DayBig. */
  hosRuleSetOilWell8DayBig: string;
  /** Gets hos Ruleset Id OilWell8DayBigSleeper. */
  hosRuleSetOilWell8DayBigSleeper: string;
  /** Gets hos Ruleset Id OilWell8DaySleeper. */
  hosRuleSetOilWell8DaySleeper: string;
  /** Gets hos Ruleset Id OilWellCalifornia8day. */
  hosRuleSetOilWellCalifornia8day: string;
  /** Gets hos Ruleset Id OilWellCaliforniaProperty. */
  hosRuleSetOilWellCaliforniaProperty: string;
  /**
   * Gets hos Ruleset Id America No Rest Requirement 7 Day with 24 hour reset and oil
   * well.
   */
  hosRuleSetOilWellNoRestRequirement7Day: string;
  /**
   * Gets hos Ruleset Id America No Rest Requirement 7 Day Big with 24 hour reset and
   * oil well.
   */
  hosRuleSetOilWellNoRestRequirement7DayBig: string;
  /**
   * Gets hos Ruleset Id America No Rest Requirement 7 Day Big with 24 hour reset and
   * oil well and split sleeper.
   */
  hosRuleSetOilWellNoRestRequirement7DayBigSleeper: string;
  /**
   * Gets hos Ruleset Id America No Rest Requirement 7 Day with 24 hour reset and oil
   * well and split sleeper.
   */
  hosRuleSetOilWellNoRestRequirement7DaySleeper: string;
  /**
   * Gets hos Ruleset Id America No Rest Requirement 8 Day with 24 hour reset and oil
   * well.
   */
  hosRuleSetOilWellNoRestRequirement8Day: string;
  /**
   * Gets hos Ruleset Id America No Rest Requirement 8 Day Big with 24 hour reset and
   * oil well.
   */
  hosRuleSetOilWellNoRestRequirement8DayBig: string;
  /**
   * Gets hos Ruleset Id America No Rest Requirement 8 Day Big with 24 hour reset and
   * oil well and split sleeper.
   */
  hosRuleSetOilWellNoRestRequirement8DayBigSleeper: string;
  /**
   * Gets hos Ruleset Id America No Rest Requirement 8 Day with 24 hour reset and oil
   * well and split sleeper.
   */
  hosRuleSetOilWellNoRestRequirement8DaySleeper: string;
  /** Gets hos Ruleset Id OilWellTexas. */
  hosRuleSetOilWellTexas: string;
  /** Gets Oregon 70-hour/7-day */
  hosRuleSetOregon7day: string;
  /** Gets Oregon 80-hour/8-day */
  hosRuleSetOregon8day: string;
  /** Gets South Carolina 70-hour/7-day */
  hosRuleSetSouthCarolina7Day: string;
  /** Gets South Carolina 80-hour/8-day */
  hosRuleSetSouthCarolina8Day: string;
  /** Gets hos Ruleset Id WashingtonIntrastate7Day. */
  hosRuleSetWashingtonIntrastate7Day: string;
  /** Gets hos Ruleset Id WashingtonIntrastate8Day. */
  hosRuleSetWashingtonIntrastate8Day: string;
  /** Gets the no device identifier. */
  noDeviceId: string;
  /** Gets the no diagnostic identifier. */
  noDiagnosticId: string;
  /** Gets the no display profile identifier. */
  noDisplayProfileId: string;
  /** Gets the no driver identifier. */
  noDriverId: string;
  /** Gets the no exception event identifier. */
  noExceptionEventId: string;
  /** Gets the no failure mode identifier. */
  noFailureModeId: string;
  /** Gets the no recipient identifier. */
  noRecipientId: string;
  /** Gets the no rule identifier. */
  noRuleId: string;
  /** Gets the no trailer identifier. */
  noTrailerId: string;
  /** Gets the no user identifier. */
  noUserId: string;
  /** Gets the parameter group none identifier. */
  parameterGroupNoneId: string;
  /** Gets the report template advanced audit log identifier. */
  reportTemplateAdvancedAuditLogId: string;
  /** Gets the report template advanced auxiliary detail identifier. */
  reportTemplateAdvancedAuxiliaryDetailId: string;
  /** Gets the report template advanced auxiliary summary identifier. */
  reportTemplateAdvancedAuxiliarySummaryId: string;
  /** Gets the report template advanced charge event identifier. */
  reportTemplateAdvancedChargeEventId: string;
  /** Gets the report template advanced congregation identifier. */
  reportTemplateAdvancedCongregationId: string;
  /** Gets the report template advanced customer visits detail identifier. */
  reportTemplateAdvancedCustomerVisitsDetailId: string;
  /** Gets the report template advanced customer visits summary identifier. */
  reportTemplateAdvancedCustomerVisitsSummaryId: string;
  /** Gets the report template advanced device install history identifier. */
  reportTemplateAdvancedDeviceInstallHistoryId: string;
  /** Gets the report template advanced diagnostics identifier. */
  reportTemplateAdvancedDiagnosticsId: string;
  /** Gets the report template advanced DVIR identifier. */
  reportTemplateAdvancedDVIRId: string;
  /** Gets the report template advanced engine fault identifier. */
  reportTemplateAdvancedEngineFaultId: string;
  /** Gets the report template advanced engine status identifier. */
  reportTemplateAdvancedEngineStatusId: string;
  /** Gets the report template advanced engine summary identifier. */
  reportTemplateAdvancedEngineSummaryId: string;
  /** Gets the report template advanced event history identifier. */
  reportTemplateAdvancedEventHistoryId: string;
  /** Gets the report template advanced event rule device identifier. */
  reportTemplateAdvancedEventRuleDeviceId: string;
  /** Gets the report template advanced exceptions detail identifier. */
  reportTemplateAdvancedExceptionsDetailId: string;
  /** Gets the report template advanced exceptions summary identifier. */
  reportTemplateAdvancedExceptionsSummaryId: string;
  /** Gets the report template advanced failure mode identifier. */
  reportTemplateAdvancedFailureModeId: string;
  /** Gets the report template advanced fuel tax identifier. */
  reportTemplateAdvancedFuelTaxId: string;
  /** Gets the report template advanced fuel usage identifier. */
  reportTemplateAdvancedFuelUsageId: string;
  /** Gets the report template advanced groups identifier. */
  reportTemplateAdvancedGroupsId: string;
  /** Gets the report template advanced HOS availability identifier. */
  reportTemplateAdvancedHOSAvailabilityId: string;
  /** Gets the report template advanced hos log identifier. */
  reportTemplateAdvancedHOSLogId: string;
  /** Gets the report template advanced hos violation identifier. */
  reportTemplateAdvancedHOSViolationId: string;
  /** Gets the report template advanced log details identifier. */
  reportTemplateAdvancedLogDetailsId: string;
  /** Gets the report template advanced maintenance reminders identifier. */
  reportTemplateAdvancedMaintenanceRemindersId: string;
  /** Gets the report template advanced material management identifier. */
  reportTemplateAdvancedMaterialManagementId: string;
  /** Gets the report template advanced notifications identifier. */
  reportTemplateAdvancedNotificationsId: string;
  /** Gets the report template advanced plan vs actual route identifier. */
  reportTemplateAdvancedPlanVsActualRouteId: string;
  /** Gets the report template advanced risk management identifier. */
  reportTemplateAdvancedRiskManagementId: string;
  /** Gets the report template advanced route directions identifier. */
  reportTemplateAdvancedRouteDirectionsId: string;
  /** Gets the report template advanced route summary identifier. */
  reportTemplateAdvancedRouteSummaryId: string;
  /** Gets the report template advanced service status identifier. */
  reportTemplateAdvancedServiceStatusId: string;
  /** Gets the report template advanced text messages identifier. */
  reportTemplateAdvancedTextMessagesId: string;
  /** Gets the report template advanced time card identifier. */
  reportTemplateAdvancedTimeCardId: string;
  /** Gets the report template advanced time performance identifier. */
  reportTemplateAdvancedTimePerformanceId: string;
  /** Gets the report template advanced trips detail identifier. */
  reportTemplateAdvancedTripsDetailId: string;
  /** Gets the report template advanced trips summary identifier. */
  reportTemplateAdvancedTripsSummaryId: string;
  /** Gets the report template advanced unmatched route identifier. */
  reportTemplateAdvancedUnmatchedRouteId: string;
  /** Gets the report template advanced users identifier. */
  reportTemplateAdvancedUsersId: string;
  /** Gets the report template advanced value performance identifier. */
  reportTemplateAdvancedValuePerformanceId: string;
  /** Gets the report template advanced vehicles identifier. */
  reportTemplateAdvancedVehiclesId: string;
  /** Gets the report template advanced zones identifier. */
  reportTemplateAdvancedZonesId: string;
  /** Gets the report template audit log identifier. */
  reportTemplateAuditLogId: string;
  /** Gets the report template auxiliary detail identifier. */
  reportTemplateAuxiliaryDetailId: string;
  /** Gets the report template auxiliary summary identifier. */
  reportTemplateAuxiliarySummaryId: string;
  /** Gets the report template charge event identifier. */
  reportTemplateChargeEventId: string;
  /** Gets the report template congregation identifier. */
  reportTemplateCongregationId: string;
  /** Gets the report template customer visits detail identifier. */
  reportTemplateCustomerVisitsDetailId: string;
  /** Gets the report template customer visits summary identifier. */
  reportTemplateCustomerVisitsSummaryId: string;
  /** Gets the report template device install history identifier. */
  reportTemplateDeviceInstallHistoryId: string;
  /** Gets the report template diagnostics identifier. */
  reportTemplateDiagnosticsId: string;
  /** Gets the report template DVIR identifier. */
  reportTemplateDVIRId: string;
  /** Gets the report template engine fault identifier. */
  reportTemplateEngineFaultId: string;
  /** Gets the report template engine status identifier. */
  reportTemplateEngineStatusId: string;
  /** Gets the report template engine summary identifier. */
  reportTemplateEngineSummaryId: string;
  /** Gets the report template event history identifier. */
  reportTemplateEventHistoryId: string;
  /** Gets the report template event rule device identifier. */
  reportTemplateEventRuleDeviceId: string;
  /** Gets the report template exceptions detail identifier. */
  reportTemplateExceptionsDetailId: string;
  /** Gets the report template exceptions summary identifier. */
  reportTemplateExceptionsSummaryId: string;
  /** Gets the report template failure mode identifier. */
  reportTemplateFailureModeId: string;
  /** Gets the report template Fill ups identifier. */
  reportTemplateFillUpsId: string;
  /** Gets the report template fuel tax identifier. */
  reportTemplateFuelTaxId: string;
  /** Gets the report template fuel usage identifier. */
  reportTemplateFuelUsageId: string;
  /** Gets the report template groups identifier. */
  reportTemplateGroupsId: string;
  /** Gets the report template HOS availability identifier. */
  reportTemplateHOSAvailabilityId: string;
  /** Gets the report template HOS log identifier. */
  reportTemplateHOSLogId: string;
  /** Gets the report template HOS violation identifier. */
  reportTemplateHOSViolationId: string;
  /** Gets the report template log details identifier. */
  reportTemplateLogDetailsId: string;
  /** Gets the report template maintenance reminders identifier. */
  reportTemplateMaintenanceRemindersId: string;
  /** Gets the report template material management identifier. */
  reportTemplateMaterialManagementId: string;
  /** Gets the report template notifications identifier. */
  reportTemplateNotificationsId: string;
  /** Gets the report template plan vs actual route identifier. */
  reportTemplatePlanVsActualRouteId: string;
  /** Gets the report template risk management identifier. */
  reportTemplateRiskManagementId: string;
  /** Gets the report template route directions identifier. */
  reportTemplateRouteDirectionsId: string;
  /** Gets the report template route summary identifier. */
  reportTemplateRouteSummaryId: string;
  /** Gets the report template service status identifier. */
  reportTemplateServiceStatusId: string;
  /** Gets the report template text messages identifier. */
  reportTemplateTextMessagesId: string;
  /** Gets the report template time card identifier. */
  reportTemplateTimeCardId: string;
  /** Gets the report template time performance identifier. */
  reportTemplateTimePerformanceId: string;
  /** Gets the report template trips detail identifier. */
  reportTemplateTripsDetailId: string;
  /** Gets the report template trips summary identifier. */
  reportTemplateTripsSummaryId: string;
  /** Gets the report template unmatched route identifier. */
  reportTemplateUnmatchedRouteId: string;
  /** Gets the report template users identifier. */
  reportTemplateUsersId: string;
  /** Gets the report template value performance identifier. */
  reportTemplateValuePerformanceId: string;
  /** Gets the report template vehicles identifier. */
  reportTemplateVehiclesId: string;
  /** Gets the report template watchdog identifier. */
  reportTemplateWatchdogId: string;
  /** Gets the report template zones identifier. */
  reportTemplateZonesId: string;
  /** Gets the rule accident identifier. */
  ruleAccidentId: string;
  /** Gets the rule after hours usage identifier. */
  ruleAfterHoursUsageId: string;
  /** Gets the rule alternator failed identifier. */
  ruleAlternatorFailedId: string;
  /** Gets the rule application exception identifier. */
  ruleApplicationExceptionId: string;
  /** Gets the rule at office longer than identifier. */
  ruleAtOfficeLongerThanId: string;
  /** Gets the rule dvir defect identifier. */
  ruleDvirDefectId: string;
  /** Gets the rule ELD yard move exemption identifier. */
  ruleDVIRPostTripMissingId: string;
  /** Gets the rule ELD yard move exemption identifier. */
  ruleDVIRPreTripMissingId: string;
  /** Gets the rule early leave identifier. */
  ruleEarlyLeaveId: string;
  /** Gets the rule engine abuse identifier. */
  ruleEngineAbuseId: string;
  /** Gets the rule engine light on identifier. */
  ruleEngineLightOnId: string;
  /** Gets the rule EV Done Charging identifier. */
  ruleEVDoneChargingId: string;
  /** Gets the rule EV Enter Charging Zone With Low Charge identifier. */
  ruleEVEnterChargingZoneWithLowChargeId: string;
  /** Gets the rule EV Exit Charging Zone With Low Charge identifier. */
  ruleEVExitChargingZoneWithLowChargeId: string;
  /** Gets the rule EV Low Charge identifier. */
  ruleEVLowChargeId: string;
  /** Gets the rule fleet idling identifier. */
  ruleFleetIdlingId: string;
  /** Gets the rule ELD yard move exemption identifier. */
  ruleFMCSAELDYardMoveExemptionId: string;
  /** Gets the rule harsh braking identifier. */
  ruleHarshBrakingId: string;
  /** Gets the rule harsh cornering identifier. */
  ruleHarshCorneringId: string;
  /** Gets the rule idling identifier. */
  ruleIdlingId: string;
  /** Gets the rule idling no PTO identifier. */
  ruleIdlingNoPtoId: string;
  /** Gets the rule jackrabbit starts identifier. */
  ruleJackrabbitStartsId: string;
  /** Gets the rule late arrival identifier. */
  ruleLateArrivalId: string;
  /** Gets the rule lights left on identifier. */
  ruleLightsLeftOnId: string;
  /** Gets the rule long lunch identifier. */
  ruleLongLunchId: string;
  /** Gets the rule long stops during work hours identifier. */
  ruleLongStopsDuringWorkHoursId: string;
  /** Gets the rule low fuel level identifier. */
  ruleLowFuelLevelId: string;
  /** Gets the rule Material management deadhead. */
  ruleMaterialManagementDeadheadId: string;
  /** Gets the rule Material management liquid application. */
  ruleMaterialManagementLiquidApplicationId: string;
  /** Gets the rule Material management plow. */
  ruleMaterialManagementPlowActiveId: string;
  /** Gets the rule Material management pre wet application. */
  ruleMaterialManagementPreWetApplicationId: string;
  /** Gets the rule Material management solid application. */
  ruleMaterialManagementSolidApplicationId: string;
  /** Gets the rule Material management unload. */
  ruleMaterialManagementUnloadId: string;
  /** Gets the rule posted speeding identifier. */
  rulePostedSpeedingId: string;
  /** Gets the rule reverse at start identifier. */
  ruleReverseAtStartId: string;
  /** Gets the rule seat belt identifier. */
  ruleSeatbeltId: string;
  /** Gets the rule unauthorized device removal identifier. */
  ruleUnauthorizedDeviceRemovalId: string;
  /** Gets the rule unauthorized home stop identifier. */
  ruleUnauthorizedHomeStopId: string;
  /** Gets the rule harsh braking identifier. */
  ruleVehicleMovementWithinZonesId: string;
  /** Gets the securityId, Allow viewing the about checkmate page. */
  securityIdAboutCheckmateId: string;
  /**
   * Gets the securityId, Allow user to view and edit accelerometer stock rules and device
   * settings.
   */
  securityIdAccelerometerDataClearanceId: string;
  /** Gets the securityId, Access to AccidentDebugReport. */
  securityIdAccidentDebugReportId: string;
  /** Gets the securityId, Allow access to create or download accident keys. */
  securityIdAccidentWizardId: string;
  /** Gets the securityId, Allow user to view turn on/off Active tracking feature. */
  securityIdActiveTrackingClearanceId: string;
  /**
   * Gets the securityId, Allow user to view the wifi settings tab and view/modify the
   * wifi hotspot SSID and password.
   */
  securityIdAdministerWiFiHotspotSettingsId: string;
  /** Gets the securityId, Access to AuditLog. */
  securityIdAuditLogId: string;
  /** Gets the securityId, Allow user to view auxiliary settings. */
  securityIdAuxiliaryClearanceId: string;
  /** Gets the securityId, Access to certify DVIR. */
  securityIdCertifyDVIRId: string;
  /** Gets the securityId, Access to ChangePassword. */
  securityIdChangePasswordId: string;
  /** Gets the securityId, Access to CongregationReport. */
  securityIdCongregationReportId: string;
  /** Gets the securityId, Access to CreateExtractKey. */
  securityIdCreateExtractKeyId: string;
  /** Gets the securityId, Access to CreateFirmwareKey. */
  securityIdCreateFirmwareKeyId: string;
  /** Gets the securityId, Access to CreateKeyBackup. */
  securityIdCreateKeyBackupId: string;
  /** Gets the securityId, Access to CreateProgrammingKey. */
  securityIdCreateProgrammingKeyId: string;
  /** Gets the securityId, Access to CreateTestKey. */
  securityIdCreateTestKeyId: string;
  /** Gets the securityId, Access to CreateWifiKey. */
  securityIdCreateWifiKeyId: string;
  /** Gets the securityId, Access to CustomerVisitsReport. */
  securityIdCustomerVisitsReportId: string;
  /** Gets the securityId, Allow deleting GPS Text Message. */
  securityIdDeleteGpsTextMessageId: string;
  /** Gets the securityId, Allow user to see advanced device settings. */
  securityIdDeviceAdminAdvancedId: string;
  /**
   * Gets the securityId, Access to removing vehicle, unpluging device, and replacing
   * device.
   */
  securityIdDeviceAdminDeleteUnplugReplaceId: string;
  /** Gets the securityId, Allow use to configure driver feedback settings. */
  securityIdDeviceAdminDriverFeedbackId: string;
  /** Gets the securityId, Access to DeviceAdmin. */
  securityIdDeviceAdminId: string;
  /** Gets the securityId, Allow user to view device current status link. */
  securityIdDeviceCurrentStatusClearanceId: string;
  /** Gets the securityId, Access to DeviceInstallHistoryReport. */
  securityIdDeviceInstallHistoryReportId: string;
  /** Gets the securityId, Access to Device List. */
  securityIdDeviceListId: string;
  /** Gets the securityId, Allow user to view and edit DirectSupport tickets. */
  securityIdDirectSupportAdminId: string;
  /** Gets the securityId, Display devices on a map. */
  securityIdDisplayMapId: string;
  /**
   * Gets the securityId, required to support ENGCO and is only applicable if their custom
   * code has been configured. Allow user to configure driver blacklist on devices.
   */
  securityIdDriverBlacklistId: string;
  /** Gets the securityId, Allow user to view driver identification (keys). */
  securityIdDriverIdentificationClearanceId: string;
  /**
   * Gets the securityId, Allow user to edit the odometer reading associated with the
   * device.
   */
  securityIdEditDeviceOdometerId: string;
  /** Gets the securityId, Allow user to edit a distribution list. */
  securityIdEditDistributionListId: string;
  /** Gets the securityId, Allow user to edit an exception rule using the wizard. */
  securityIdEditExceptionId: string;
  /** Gets the securityId, Allow changing exception email templates. */
  securityIdEditNotificationEmailTemplateId: string;
  /** Gets the securityId, Allow user to edit OSM road speeds. */
  securityIdEditRoadSpeedsId: string;
  /** Gets the securityId, Allow user to view and edit TripType Change Data. */
  securityIdEditTripTypeChangeDataId: string;
  /** Gets the securityId, Access to EngineDiagnosticList. */
  securityIdEngineDiagnosticListId: string;
  /** Gets the securityId, Access to EngineFailureModeList. */
  securityIdEngineFailureModeListId: string;
  /** Gets the securityId, Access to EngineFlashCodelist. */
  securityIdEngineFlashCodelistId: string;
  /** Gets the securityId, Access to EngineManagementReport. */
  securityIdEngineManagementReportId: string;
  /** Gets the securityId, Allow user to view and edit engine status stock rules. */
  securityIdEngineStatusDataClearanceId: string;
  /** Gets the securityId, Access to EngineStatusDataGraph. */
  securityIdEngineStatusDataGraphId: string;
  /** Gets the securityId, Access to EngineTypeList. */
  securityIdEngineTypeListId: string;
  /** Gets the securityId, Access to EngineUnitOfMeasureList. */
  securityIdEngineUnitOfMeasureListId: string;
  /** Gets the securityId, Access to EventOccurrenceList. */
  securityIdEventOccurrenceListId: string;
  /** Gets the securityId, Access to Everything. */
  securityIdEverythingId: string;
  /** Gets the securityId, Access to ExceptionsList. */
  securityIdExceptionsListId: string;
  /** Gets the securityId, Access to ExceptionsReport. */
  securityIdExceptionsReportId: string;
  /** Gets the securityId, Access to ExportFromOtherDatabase. */
  securityIdExportFromOtherDatabaseId: string;
  /** Gets the securityId, Allow user to view feature preview switcher. */
  securityIdFeaturePreviewClearanceId: string;
  /** Gets the securityId, Allow access to the Fuel Tax Report. */
  securityIdFuelTaxId: string;
  /** Gets the securityId, Access to FuelTransactionAdmin. */
  securityIdFuelTransactionAdminId: string;
  /** Gets the securityId, Access to FuelTransactionList. */
  securityIdFuelTransactionListId: string;
  /** Gets the securityId, Access to Fuel Usage Report. */
  securityIdFuelUsageReportId: string;
  /** Gets the securityId, Allow user to view GoTalk settings and version. */
  securityIdGoTalkClearanceId: string;
  /** Gets the securityId, Access to ImportFromOtherDatabase. */
  securityIdImportFromOtherDatabaseId: string;
  /** Gets the securityId, Access to ImportZones. */
  securityIdImportZonesId: string;
  /** Gets the securityId, Access to inspect DVIR. */
  securityIdInspectDVIRId: string;
  /** Gets the securityId, Access to KeyInformation. */
  securityIdKeyInformationId: string;
  /** Gets the securityId, Allows the user to Launch Custom Reports and Add-Ins. */
  securityIdLaunchAddInId: string;
  /** Gets the securityId, Allow user to add, edit, or remove AddInData objects. */
  securityIdManageAddInDataId: string;
  /** Gets the securityId, Allow user to view and edit addins. */
  securityIdManageAddinsClearanceId: string;
  /** Gets the securityId, Allow user to manage certificates. */
  securityIdManageCertificatesId: string;
  /** Gets the securityId, Allow user to edit DVIR logs. */
  securityIdManageDVIRLogsId: string;
  /** Gets the securityId, Allow user to edit HOS driver logs. */
  securityIdManageHOSLogsId: string;
  /** Gets the securityId, Allow user to add, set or remove media files. */
  securityIdManageMediaId: string;
  /** Gets the securityId, Allow access to managing report templates. */
  securityIdManageReportTemplatesId: string;
  /** Gets the securityId, All user to add/edit/remove trailers. */
  securityIdManageTrailersId: string;
  /** Gets the securityId, Access to Material Management. */
  securityIdMaterialManagementReportId: string;
  /** Gets the securityId, This is dashboard security. Allow access to dashboard and CustomReportSchedule. */
  securityIdMileageSummaryDashboardId: string;
  /** Gets the securityId, Allow user to view news notifications switcher. */
  securityIdNewsNotificationsClearanceId: string;
  /** Gets the securityId, Access to NodesList. */
  securityIdNodesListId: string;
  /** Gets the securityId, Access to NotificationList. */
  securityIdNotificationListId: string;
  /** Gets the securityId, Access to OrganizeViews. */
  securityIdOrganizeViewsId: string;
  /** Gets the securityId, Allow user to view product guide. */
  securityIdProductGuideClearanceId: string;
  /** Gets the securityId, Allow user to purchase paid items on the Marketplace. */
  securityIdPurchaseMarketplacePaidItemsId: string;
  /** Gets the securityId, Access to PurgeData. */
  securityIdPurgeDataId: string;
  /** Gets the securityId, Access to RadioDownloaderList. */
  securityIdRadioDownloaderListId: string;
  /** Gets the securityId, Access to ReminderReport. */
  securityIdReminderReportId: string;
  /** Gets the securityId, Access to ReminderRuleList. */
  securityIdReminderRuleListId: string;
  /** Gets the securityId, Access to repair DVIR. */
  securityIdRepairDVIRId: string;
  /** Gets the securityId, Access to ReprocessData. */
  securityIdReprocessDataId: string;
  /**
   * Gets the securityId, Requests the current GPS location from a GO device. Typical
   * implementation is for Iridium network.
   */
  securityIdRequestDeviceLocationId: string;
  /** Gets the securityId, Allow user to view reseller data. */
  securityIdResellerControlClearanceId: string;
  /** Gets the securityId, Access to RestoreKeyBackup. */
  securityIdRestoreKeyBackupId: string;
  /** Gets the securityId, Access to RiskManagementReport. */
  securityIdRiskManagementReportId: string;
  /** Gets the securityId, Allow user to run Route Comparison Report. */
  securityIdRouteComparisonReportId: string;
  /** Gets the securityId, Access to RouteList. */
  securityIdRouteListId: string;
  /** Gets the securityId, Access to RouteSummaryReport. */
  securityIdRouteSummaryReportId: string;
  /** Gets the securityId, Access to SecurityClearanceList. */
  securityIdSecurityClearanceListId: string;
  /** Gets the securityId, Allow external relay instruction to be send to the vehicle. */
  securityIdSendExternalRelayInstructionId: string;
  /** Gets the securityId, Allow sending GPS Text Message, Routes and Addresses.s */
  securityIdSendGpsTextMessageId: string;
  /** Gets the securityId, Allow user to view device service plans. */
  securityIdServicePlansClearanceId: string;
  /** Gets the securityId, "SecurityIdServices" settings tab. */
  securityIdServicesSettingsId: string;
  /** Gets the securityId, Access to SpeedProfileReport. */
  securityIdSpeedProfileReportId: string;
  /** Gets the securityId, Allow starting full version of MyGeotab from a web page. */
  securityIdStartFullVersionId: string;
  /** Gets the securityId, Allow user to view and edit status groups. */
  securityIdStatusGroupsClearanceId: string;
  /** Gets the securityId, Access to SystemSettings. */
  securityIdSystemSettingsId: string;
  /** Gets the securityId, Access to TimeCardReport. */
  securityIdTimeCardReportId: string;
  /**
   * Gets the securityId, required to support WATERMARK and is only applicable if their
   * custom code has been configured.
   */
  securityIdTrackHistoricDataId: string;
  /** Gets the securityId, Access to TripsActivityReport. */
  securityIdTripsActivityReportId: string;
  /** Gets the securityId, Access to UnassignedRouteReport. */
  securityIdUnassignedRouteReportId: string;
  /**
   * Gets the securityId, Unknown identifier is not used for security purposes. It's
   * used internally to indicate a particular type could not be translated into a security
   * identifier. This always yields in access denied.
   */
  securityIdUnknownId: string;
  /** Gets the securityId, Administer Users/Drivers. */
  securityIdUserAdminId: string;
  /** Gets the securityId, Access to User/Driver List. */
  securityIdUserListId: string;
  /** Gets the securityId, Access to UserSettings. */
  securityIdUserSettingsId: string;
  /** Gets the securityId, Allow user to view AddInData objects. */
  securityIdViewAddInDataId: string;
  /** Gets the securityId, Allow user to view the advanced help items. */
  securityIdViewAdvancedHelpId: string;
  /** Gets the securityId, Allow user to view BinaryData. */
  securityIdViewBinaryDataId: string;
  /**
   * Gets the securityId, Allow user to view Business Intelligence data (Fleet Industry
   * Trends and etc.)
   */
  securityIdViewBusinessIntelligenceId: string;
  /** Gets the securityId, Allow user to view certificates. */
  securityIdViewCertificatesId: string;
  /** Gets the securityId, Allow user to view DVIR logs. */
  securityIdViewDVIRLogsId: string;
  /** Gets the securityId, Allow viewing sent and received GPS Text Messages. */
  securityIdViewGpsTextMessageId: string;
  /** Gets the securityId, Allow user only to view groups. */
  securityIdViewGroupsId: string;
  /** Gets the securityId, Allow user to view HOS driver logs. */
  securityIdViewHOSLogsId: string;
  /** Gets the securityId, Allow user to see paid Marketplace items. */
  securityIdViewMarketplacePaidItemsId: string;
  /** Gets the securityId, Allow user to view media files. */
  securityIdViewMediaId: string;
  /** Gets the securityId, Allow viewing data using report template. */
  securityIdViewReportTemplateId: string;
  /** Gets the securityId, Allow user to view existing trailers. */
  securityIdViewTrailersId: string;
  /** Gets the securityId, Allow user to view TripType Change Data. */
  securityIdViewTripTypeChangeDataId: string;
  /** Gets the securityId, Allow user to view the wifi hotspot SSID and password. */
  securityIdViewWiFiHotspotSettingsId: string;
  /** Gets the securityId, Access to WorkHolidayList. */
  securityIdWorkHolidayListId: string;
  /** Gets the securityId, Access to WorkTimeList. */
  securityIdWorkTimeListId: string;
  /** Gets the securityId, Access to ZoneAdmin. */
  securityIdZoneAdminId: string;
  /** Gets the securityId, Access to ZoneList. */
  securityIdZoneListId: string;
  /** Gets the securityId, Access to List of ZoneType's. */
  securityIdZoneTypeListId: string;
  /** Gets the source AI Model identifier. */
  sourceAiModelId: string;
  /** Gets the source BRP obsolete identifier. */
  sourceAiModelObsoleteId: string;
  /** Gets the source BRP identifier. */
  sourceBrpId: string;
  /** Gets the source BRP obsolete identifier. */
  sourceBrpObsoleteId: string;
  /** Gets the source Geotab GO identifier. */
  sourceGeotabGoId: string;
  /** Gets the source Geotab GO obsolete identifier. */
  sourceGeotabGoObsoleteId: string;
  /** Gets the source GMCCC identifier. */
  sourceGmcccId: string;
  /** Gets the source GMCCC obsolete identifier. */
  sourceGmcccObsoleteId: string;
  /** Gets the source J1708 identifier. */
  sourceJ1708Id: string;
  /** Gets the source J1708 obsolete identifier. */
  sourceJ1708ObsoleteId: string;
  /** Gets the source J1939 identifier. */
  sourceJ1939Id: string;
  /** Gets the source J1939 obsolete identifier. */
  sourceJ1939ObsoleteId: string;
  /** Gets the source Legacy proprietary identifier. */
  sourceLegacyId: string;
  /** Gets the source Legacy proprietary obsolete identifier. */
  sourceLegacyObsoleteId: string;
  /** Gets the source OBD identifier. */
  sourceObdId: string;
  /** Gets the source OBD obsolete identifier. */
  sourceObdObsoleteId: string;
  /** Gets the source OBD Source Address identifier. */
  sourceObdSaId: string;
  /** Gets the source WWH OBD obsolete identifier. */
  sourceObdSaObsoleteId: string;
  /** Gets the source Proprietary identifier. */
  sourceProprietaryId: string;
  /** Gets the source Proprietary obsolete identifier. */
  sourceProprietaryObsoleteId: string;
  /** Gets the source system identifier. */
  sourceSystemId: string;
  /** Gets the source system obsolete identifier. */
  sourceSystemObsoleteId: string;
  /** Gets the source third-party identifier. */
  sourceThirdPartyId: string;
  /** Gets the source third-party obsolete identifier. */
  sourceThirdPartyObsoleteId: string;
  /** Gets the system user identifier. */
  systemUserId: string;
  /** Gets the text template default exception rule identifier. */
  textTemplateDefaultExceptionRuleId: string;
  /** Gets the text template default exception rule popup identifier. */
  textTemplateDefaultExceptionRulePopupId: string;
  /** Gets the unit of measure amps identifier. */
  unitOfMeasureAmpsId: string;
  /** Gets the unit of measure bytes identifier. */
  unitOfMeasureBytesId: string;
  /** Gets the unit of measure cubic meters identifier. */
  unitOfMeasureCubicMetersId: string;
  /** Gets the unit of measure cubic meters per second identifier. */
  unitOfMeasureCubicMetersPerSecondId: string;
  /** Gets the unit of measure degrees Celsius identifier. */
  unitOfMeasureDegreesCelsiusId: string;
  /** Gets the unit of measure grams identifier. */
  unitOfMeasureGramsId: string;
  /** Gets the unit of measure grams per second identifier. */
  unitOfMeasureGramsPerSecondId: string;
  /** Gets the unit of measure grams per square meter identifier. */
  unitOfMeasureGramsPerSquareMeterId: string;
  /** Gets the unit of measure Hertz identifier. */
  unitOfMeasureHertzId: string;
  /** Gets the unit of measure kilograms per kilometer identifier. */
  unitOfMeasureKilogramsPerKilometerId: string;
  /** Gets the unit of measure kilometers per hour identifier. */
  unitOfMeasureKilometersPerHourId: string;
  /** Gets the unit of measure kilometers per kilogram identifier. */
  unitOfMeasureKilometersPerKilogramId: string;
  /** Gets the unit of measure kilometers per liter identifier. */
  unitOfMeasureKilometersPerLiterId: string;
  /** Gets the unit of measure kilowatt-hours identifier. */
  unitOfMeasureKiloWattHoursId: string;
  /** Gets the unit of measure liters identifier. */
  unitOfMeasureLitersId: string;
  /** Gets the unit of measure liters per lane kilometer identifier. */
  unitOfMeasureLitersPerLaneKilometerId: string;
  /** Gets the unit of measure liters per tonne identifier. */
  unitOfMeasureLitersPerTonneId: string;
  /** Gets the unit of measure meters identifier. */
  unitOfMeasureMetersId: string;
  /** Gets the unit of measure meters per second squared identifier. */
  unitOfMeasureMetersPerSecondSquaredId: string;
  /** Gets the unit of measure Newton meters identifier. */
  unitOfMeasureNewtonMetersId: string;
  /** Gets the unit of measure Newtons identifier. */
  unitOfMeasureNewtonsId: string;
  /** Gets the unit of measure none identifier. */
  unitOfMeasureNoneId: string;
  /** Gets the unit of measure Ohms identifier. */
  unitOfMeasureOhmsId: string;
  /** Gets the unit of measure Ohms per second identifier. */
  unitOfMeasureOhmsPerSecondId: string;
  /** Gets the unit of measure parts per million identifier. */
  unitOfMeasurePartsPerMillionId: string;
  /** Gets the unit of measure Pascals identifier. */
  unitOfMeasurePascalsId: string;
  /** Gets the unit of measure percentage identifier. */
  unitOfMeasurePercentageId: string;
  /** Gets the unit of measure pulses per meter identifier. */
  unitOfMeasurePulsesPerMeterId: string;
  /** Gets the unit of measure radians identifier. */
  unitOfMeasureRadiansId: string;
  /** Gets the unit of measure revolutions identifier. */
  unitOfMeasureRevolutionsId: string;
  /** Gets the unit of measure revolutions per minute identifier. */
  unitOfMeasureRevolutionsPerMinuteId: string;
  /** Gets the unit of measure seconds identifier. */
  unitOfMeasureSecondsId: string;
  /** Gets the unit of measure Volts identifier. */
  unitOfMeasureVoltsId: string;
  /** Gets the unit of measure Watts identifier. */
  unitOfMeasureWattsId: string;
  /** Gets the unknown driver identifier. */
  unknownDriverId: string;
  /** Gets the user notification binary file start identifier. */
  userNotificationBinaryFileStartId: string;
  /** Gets the user report template identifier. */
  userReportTemplateId: string;
  /** Gets the user work time start identifier. */
  userWorkTimeStartId: string;
  /** Gets the work time all hours identifier. */
  workTimeAllHoursId: string;
  /** Gets the work time early departure hours identifier. */
  workTimeEarlyLeaveHoursId: string;
  /** Gets the work time late arrival hours identifier. */
  workTimeLateArrivalHoursId: string;
  /** Gets the work time lunch hours identifier. */
  workTimeLunchHoursId: string;
  /** Gets the work time standard hours identifier. */
  workTimeStandardHoursId: string;
  /** Gets the zone type address lookup identifier. */
  zoneTypeAddressLookupId: string;
  /** Gets the zone type customer identifier. */
  zoneTypeCustomerId: string;
  /** Gets the zone type home identifier. */
  zoneTypeHomeId: string;
  /** Gets the zone type office identifier. */
  zoneTypeOfficeId: string;
}
