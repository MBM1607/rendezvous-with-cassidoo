const METRIC_LENGTH_UNITS = ["mm", "cm", "m"] as const;

const IMPERIAL_LENGTH_UNITS = ["in", "ft"] as const;

const FEET_IN_METERS = 0.3048;
const INCHES_IN_FEET = 12;
const CENTI = 100;
const MILLI = 1000;
const MILLI_IN_CENTI = 10;

type TMetricLengthUnit = typeof METRIC_LENGTH_UNITS[number];
type TImperialLengthUnit = typeof IMPERIAL_LENGTH_UNITS[number];
export type TLengthUnit = TMetricLengthUnit | TImperialLengthUnit;

const isImperial = (unit: TLengthUnit): unit is TImperialLengthUnit => {
  return IMPERIAL_LENGTH_UNITS.includes(unit as TImperialLengthUnit);
};

export const convertUnits = (value: number, unit: TLengthUnit): string => {
  if (isImperial(unit)) {
    const valueInFeet = unit === "ft" ? value : value / INCHES_IN_FEET;
    const valueInMeters = valueInFeet * FEET_IN_METERS;
    const valueInCentimeters = valueInMeters * CENTI - Math.floor(valueInMeters) * CENTI;
    const valueInMillimeters =
      valueInCentimeters * MILLI_IN_CENTI - Math.floor(valueInCentimeters) * MILLI_IN_CENTI;

    const meters = Math.floor(valueInMeters);
    const centimeters = Math.floor(valueInCentimeters);
    const millimeters = Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(
      valueInMillimeters,
    );

    if (valueInCentimeters < 1e-2) return `${meters}m`;
    if (valueInMillimeters < 1e-2) {
      if (meters === 0) return `${centimeters}cm`;
      return `${meters}m ${centimeters}cm`;
    }

    if (meters === 0 && centimeters === 0) return `${millimeters}mm`;
    if (meters === 0) return `${centimeters}cm ${millimeters}mm`;
    return `${meters}m ${centimeters}cm ${millimeters}mm`;
  } else {
    const valueInMeters = unit === "m" ? value : unit === "cm" ? value / CENTI : value / MILLI;
    const valueInFeet = valueInMeters / FEET_IN_METERS;
    const feet = Math.floor(valueInFeet);
    if (valueInFeet === feet) return `${feet}ft`;

    const inches = Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(
      (valueInFeet - feet) * INCHES_IN_FEET,
    );
    if (valueInFeet < 1) return `${inches}in`;
    return `${feet}ft ${inches}in`;
  }
};
