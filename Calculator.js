const prompt = require('prompt-sync')()
// Compound interest calculator that prompts a user for some inputs, and finally calculates the compounded interest value

// Step 1 - define a function that we can use to calculate the final value of the compounded interest

// Step 2 - define a function that would calculate the difference (the effect that compounding has had)

// Step 3 - to create a run function that then prompts the user for all necessary inputs required to calculate the final amounts

// Step 4 - inside of said function, make a nice pretty print statement using a template literal string that gives the financial breakdown

//

// step 1:
function compoundInterest(init_amount, monthly_contribution, number_of_years, interest_rate) {
    let total = init_amount
    let annual_contribution = monthly_contribution * 12

    for (let i = 0; i < number_of_years; i++) {
        total = total + annual_contribution
        total = total * ((100 + interest_rate) / 100)
    }
    return total.toFixed(2)
}
// Step 2:

function calculateRegular(init_amount, monthly_contribution, number_of_years) { //what the final value would be if we didn´t compund the interest
return (init_amount + monthly_contribution * 12 * number_of_years).toFixed(2)
}
// Step 3:
function run() {
let init_amount = parseFloat(prompt('What is your initial investment ($) ?')) //parseFloat is preferable for parseInt shaves off decimals!
let monthly_contribution = parseFloat(prompt('What is your monthly contribution ($) ?'))
let number_of_years = parseFloat(prompt('For how many years would you like to compound your investment?'))
let interest_rate = parseFloat(prompt('What is your expected interest rate (%) over these years?'))

printOutput(init_amount, monthly_contribution, number_of_years, interest_rate)
}
// Step 4:

function printOutput(init_amount, monthly_contribution, number_of_years,interest_rate) {
    let final_value = compoundInterest(init_amount, monthly_contribution, number_of_years,interest_rate)
    final_value = parseFloat(final_value)
    let value_without_compounding = calculateRegular(init_amount, monthly_contribution, number_of_years)
    let summary = `INIT_AMOUNT: $${init_amount}\nMONTHLY_CONTRIBUTION: $${monthly_contribution}\nNUMBER_OF_YEARS: ${number_of_years}\nINTEREST_RATE: ${interest_rate}\n\nFINAL_COMPUNDED_VALUE: $${final_value}\nREGULAR_AMOUNT: $${value_without_compounding}\NDIFFERENCE: $${final_value - value_without_compounding}`
    console.log(summary)
}

run()