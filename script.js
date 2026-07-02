const ziggs = {
    name: "Ziggs",
    role: "Mage",
    resource: "Mana",
    abilities: [
        {
            name: "Bouncing Bomb",
            slot: "Q",
            description: "Throws a bouncing bomb that deals magic damage to enemies.",
            damage: [80,130,180,230,280],
            cooldown: [6,5.5,5,4.5,4],
            manaCost: [50,55,60,65,70]
        },
        {
            name: "Satchel Charge",
            slot: "W",
            description: "Places a satchel charge that can be detonated to deal magic damage and knock back enemies.",
            damage: 70,
            cooldown: 12,
            manaCost: 60
        },
        {
            name: "Hexplosive Minefield",
            slot: "E",
            description: "Deploys a field of mines that explode when enemies step on them, dealing magic damage.",
            damage: 30,
            cooldown: 20,
            manaCost: 80
        },
        {
            name: "Mega Inferno Bomb",
            slot: "R",
            description: "Throws a massive bomb that deals significant magic damage in a large area.",
            damage: 300,
            cooldown: 120,
            manaCost: 100
        },
    ],
    stats: {
        hp: 606,
        hpGrowth: 106,
        mana: 480,
        manaGrowth: 23.5,
        armor: 21,
        armorGrowth: 4.7,
        magicResist: 30,
        mrGrowth: 1.3,
        movementSpeed: 325
    },
};

console.log(ziggs);


const leona = {
    name: "Leona",
    role: "Tank",
    resource: "Mana",
    stats: {
        hp: 646,
        hpGrowth: 101,
        mana: 302,
        manaGrowth: 40,
        armor: 43,
        armorGrowth: 4.8,
        magicResist: 32,
        mrGrowth: 2.05,
        movementSpeed: 335,
    },
};

console.log(leona);

const offenseChampion = document.getElementById("offenseChampion");
const defenseChampion = document.getElementById("defenseChampion");

const offenseLevel = document.getElementById("offenseLevel");
const defenseLevel = document.getElementById("defenseLevel");

const ability = document.getElementById("ability");
const abilityLevel = document.getElementById("abilityLevel");

const damageResult = document.getElementById("damageResult");
const remainingHealthResult = document.getElementById("remainingHealthResult");

const calculateButton = document.getElementById("calculate");

function calculateStat(baseStat, growthStat, level) {
    return Math.round(
        baseStat +
        growthStat * (level - 1) * (0.7025 + 0.0175 * (level - 1))
    );
}

calculateButton.addEventListener("click", () => {
    console.log("Calculate button clicked");

    console.log("Offense Champion:", offenseChampion.value);
    console.log("Offense Level:", offenseLevel.value);
    console.log("Ability:", ability.value);
    console.log("Ability Level:", abilityLevel.value);

    console.log("Defense Champion:", defenseChampion.value);
    console.log("Defense Level:", defenseLevel.value);

    damageResult.textContent = "Damage:";
    remainingHealthResult.textContent = "Remaining Health:";
});
