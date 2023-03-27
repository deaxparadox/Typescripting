enum VehicleType {
    PedalCycle,
    MotorCycle,
    Car, Van, Bus, Lorry
}

const type = VehicleType.Lorry;
const typeName = VehicleType[type];

if (type === VehicleType.Lorry) {
    console.log("True")
}