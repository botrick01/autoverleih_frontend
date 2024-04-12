interface ICar {
    type: number;
    seats: number;
    carBrand: String;
    model: String;
    trunkSpace: number;
}

enum CarTypes {
    Estate,
    Sedan,
    SUV,
    PickUp,
    Hatchback
}