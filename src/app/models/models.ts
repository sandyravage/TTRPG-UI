//TODO: rename
export class DisplayThing {
    image: string;
}

export class BaseCard extends DisplayThing {
    cost: number;
}

export class CommandCard extends BaseCard {
    name: string;
    effect: string;
    //TODO: change to phase enum
    phase: string;
}

export class SkillCard extends BaseCard {
    rolls: Array<RollEffect>;
}

export class RollEffect {
    name: string;
    values: Array<Die>;
    //TODO: make enum with attack type
    type: string;
    effect: string;
}

export class StatusEffect extends DisplayThing {
    limit: number;
    name: string;
    effect: string;
}

export class Defense extends DisplayThing {
    value: number;
    //TODO: Make enum with defense type
    type: string;
}

export class Die extends DisplayThing {
    value: number;
    label: string;
    held: boolean;

    constructor(input: number) {
        super();
        this.value = input;
        this.held = false;
    }
}

export class Character extends DisplayThing {
    effects: Array<StatusEffect>;
    lifePoints: number;
    commandPoints: number;
    defenses: Array<Defense>;
    skills: Array<SkillCard>;
    dice: Array<Die>;
    deck: Array<BaseCard>;
}

