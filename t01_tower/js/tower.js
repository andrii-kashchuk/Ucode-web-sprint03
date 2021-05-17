class Building {
    constructor(floors, material, address) {
        this.floors = floors;
        this.material = material;
        this.address = address;
    }
}

class Tower extends Building {
    constructor(floors, material, address, hasElevator, arcCapacity, height) {
        super(floors, material, address);
        this.hasElevator = hasElevator;
        this.arcCapacity = arcCapacity;
        this.height = height;
    }

    getFloorHeight() {
        let heightFloor = this.height / this.floors;
        return heightFloor;
    }

    elevator() {
        if (this.hasElevator === true) {
            return "Elevator: +";
        } else {
            return "Elevator: -";
        }
    }

    toString() {
        return (
                "Floors: " + this.floors + "\n" +
                "Material: " + this.material + "\n" +
                "Address: " + this.address + "\n" +
                this.elevator() + "\n" +
                "Arc reactor capacity: " + this.arcCapacity + "\n" +
                "Height: " + this.height + "\n" +
                "Floor height: " + this.getFloorHeight()
        ).toString();
    }
}

const starkTower = new Tower(93, 'Different', 'Manhattan, NY');
starkTower.hasElevator = true;
starkTower.arcCapacity = 70;
starkTower.height = 1130;
console.log(starkTower.toString());

/*
Floors: 93
Material: Different
Address: Manhattan, NY
Elevator: +
Arc reactor capacity: 70
Height: 1130
Floor height: 12.150537634408602
*/
