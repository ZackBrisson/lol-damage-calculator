const offenseChampion = document.getElementById("offenseChampion");
const defenseChampion = document.getElementById("defenseChampion");

const offenseLevel = document.getElementById("offenseLevel");
const defenseLevel = document.getElementById("defenseLevel");

const ability = document.getElementById("ability");
const abilityLevel = document.getElementById("abilityLevel");

const damageResult = document.getElementById("damageResult");
const remainingHealthResult = document.getElementById("remainingHealthResult");

const calculateButton = document.getElementById("calculate");

let champions = {};

console.log("Script loaded");

fetch("https://ddragon.leagueoflegends.com/api/versions.json")
    .then(response => response.json())
    .then(versions => {
        const latestVersion = versions[0];
        console.log("Latest version:", latestVersion);

        fetch(`https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/en_US/champion.json`)
            .then(response => response.json())
           .then(championData => {
    champions = championData.data;

    console.log("Champion data:", champions);
    console.log("Ziggs data:", champions.Ziggs);

    populateChampionDropdown(offenseChampion, champions);
    populateChampionDropdown(defenseChampion, champions);
});
    })
    .catch(error => {
        console.log("Data Dragon error:", error);
    });

function populateChampionDropdown(dropdown, champions) {
    Object.values(champions).forEach(champion => {
        const option = document.createElement("option");

        option.value = champion.id;
        option.textContent = champion.name;

        dropdown.appendChild(option);
    });
}
    

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
